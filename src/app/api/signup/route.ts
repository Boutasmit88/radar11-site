import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rate-limit";
import { welcomeEmailHtml, welcomeEmailText } from "@/lib/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple email validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 255;
}

// Simple name sanitization
function sanitizeName(name: string): string {
  return name.replace(/<[^>]*>/g, "").trim().slice(0, 100);
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting by IP (max 3 signups per hour per IP)
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
               req.headers.get("x-real-ip") || 
               "unknown";
    
    const rateLimitResult = rateLimit(ip, 3, 60 * 60 * 1000);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Te veel aanmeldingen. Probeer het later opnieuw." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { email, name, role, honeypot } = body;

    // Bot detection: honeypot field should be empty
    if (honeypot) {
      // Silently accept but don't process (bots think it worked)
      return NextResponse.json({ success: true });
    }

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Ongeldig e-mailadres." },
        { status: 400 }
      );
    }

    // Validate role
    const validRoles = ["trainer", "coordinator", "club", "other"];
    const safeRole = validRoles.includes(role) ? role : "other";
    const safeName = name ? sanitizeName(name) : "";

    // 1. Add to Resend Audience (subscriber list)
    if (process.env.RESEND_AUDIENCE_ID) {
      try {
        await resend.contacts.create({
          email,
          firstName: safeName,
          audienceId: process.env.RESEND_AUDIENCE_ID,
          unsubscribed: false,
        });
      } catch {
        // Contact might already exist, continue anyway
        console.log("Contact may already exist, continuing...");
      }
    }

    // 2. Send welcome email
    const fromEmail = process.env.RESEND_FROM_EMAIL || "noreply@send.radar11.com";
    const fromAddress = fromEmail.includes("<") ? fromEmail : `Radar11 <${fromEmail}>`;

    const { error: emailError } = await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: "Welkom bij Radar11 — Je staat op de Early Access lijst! 🎯",
      html: welcomeEmailHtml(safeName),
      text: welcomeEmailText(safeName),
      tags: [
        { name: "type", value: "early-access" },
        { name: "role", value: safeRole },
      ],
    });

    if (emailError) {
      console.error("Email error:", emailError);
      return NextResponse.json(
        { error: "Er ging iets mis bij het versturen. Probeer het opnieuw." },
        { status: 500 }
      );
    }

    // 3. Send notification to yourself
    if (process.env.NOTIFY_EMAIL) {
      await resend.emails.send({
        from: fromAddress,
        to: process.env.NOTIFY_EMAIL,
        subject: `🆕 Nieuwe Early Access aanmelding: ${email}`,
        html: `
          <h2>Nieuwe aanmelding!</h2>
          <p><strong>Naam:</strong> ${safeName || "Niet opgegeven"}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Rol:</strong> ${safeRole}</p>
          <p><strong>Tijd:</strong> ${new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" })}</p>
          <p><strong>IP:</strong> ${ip}</p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Er ging iets mis. Probeer het later opnieuw." },
      { status: 500 }
    );
  }
}
