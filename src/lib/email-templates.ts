export function welcomeEmailHtml(name: string): string {
  return `
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#0a0e1a;font-family:'Inter',Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">
    
    <!-- Header -->
    <div style="text-align:center;margin-bottom:32px;">
      <h1 style="color:#00e5ff;font-size:28px;font-weight:800;letter-spacing:4px;margin:0;">
        RADAR<span style="color:#b366ff;">11</span>
      </h1>
      <p style="color:#7a8baa;font-size:12px;letter-spacing:3px;margin:4px 0 0;">SPORTSYSTEMS</p>
    </div>

    <!-- Main Card -->
    <div style="background-color:#111827;border:1px solid rgba(0,229,255,0.15);border-radius:12px;padding:40px 32px;">
      
      <h2 style="color:#ffffff;font-size:24px;font-weight:700;margin:0 0 8px;">
        Welkom${name ? ` ${name}` : ''}! 🎯
      </h2>
      
      <p style="color:#9ca3af;font-size:15px;line-height:1.7;margin:0 0 24px;">
        Je staat officieel op de Early Access lijst van Radar11. We zijn blij dat je erbij bent.
      </p>

      <div style="background-color:rgba(0,229,255,0.08);border-left:3px solid #00e5ff;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:24px;">
        <p style="color:#00e5ff;font-size:14px;font-weight:600;margin:0 0 4px;">Wat kun je verwachten?</p>
        <ul style="color:#9ca3af;font-size:14px;line-height:1.8;margin:8px 0 0;padding-left:20px;">
          <li>Uitnodiging zodra de beta open gaat</li>
          <li>Eerste toegang tot nieuwe features</li>
          <li>Founding member korting op het platform</li>
          <li>Directe lijn met het ontwikkelteam</li>
        </ul>
      </div>

      <p style="color:#9ca3af;font-size:14px;line-height:1.7;margin:0 0 24px;">
        We werken hard om Radar11 het beste hulpmiddel te maken voor ambitieuze jeugdvoetbaltrainers. 
        Jouw feedback is daarbij onmisbaar.
      </p>

      <!-- CTA Button -->
      <div style="text-align:center;margin:32px 0;">
        <a href="https://radar11.com" 
           style="display:inline-block;background:linear-gradient(135deg,#00e5ff,#b366ff);color:#0a0e1a;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:8px;letter-spacing:1px;text-transform:uppercase;">
          Bezoek Radar11.com →
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align:center;margin-top:32px;">
      <p style="color:#4b5563;font-size:12px;margin:0 0 8px;">
        © ${new Date().getFullYear()} Radar11 Sportsystems. Alle rechten voorbehouden.
      </p>
      <p style="color:#374151;font-size:11px;margin:0;">
        Je ontvangt deze e-mail omdat je je hebt aangemeld voor Early Access op radar11.com
      </p>
    </div>

  </div>
</body>
</html>
  `.trim();
}

export function welcomeEmailText(name: string): string {
  return `
Welkom${name ? ` ${name}` : ''}! 🎯

Je staat officieel op de Early Access lijst van Radar11.

Wat kun je verwachten?
- Uitnodiging zodra de beta open gaat
- Eerste toegang tot nieuwe features
- Founding member korting op het platform
- Directe lijn met het ontwikkelteam

We werken hard om Radar11 het beste hulpmiddel te maken voor ambitieuze jeugdvoetbaltrainers.

Bezoek: https://radar11.com

© ${new Date().getFullYear()} Radar11 Sportsystems
  `.trim();
}
