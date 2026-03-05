"use client";

import { useState } from "react";

export function EarlyAccessForm({ variant = "default" }: { variant?: "default" | "compact" }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("trainer");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to email service (Mailchimp/ConvertKit/Resend)
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="card text-center py-8">
        <div className="text-4xl mb-3">🎯</div>
        <h3 className="text-white text-xl font-bold mb-2">Je staat op de lijst!</h3>
        <p className="text-gray-light text-sm">
          We sturen je binnenkort een uitnodiging voor de beta. Check je inbox.
        </p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
        <input
          type="email"
          required
          placeholder="je@email.nl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-navy-light border border-cyan/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-mid focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/30 transition-all"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn-primary whitespace-nowrap text-sm py-3 disabled:opacity-50"
        >
          {loading ? "Bezig..." : "Aanmelden →"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card max-w-md w-full space-y-4">
      <h3 className="font-[var(--font-heading)] text-white text-lg font-bold uppercase tracking-wider">
        Meld je aan voor Early Access
      </h3>
      <div>
        <input
          type="text"
          required
          placeholder="Je naam"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-navy border border-cyan/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-mid focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/30 transition-all"
        />
      </div>
      <div>
        <input
          type="email"
          required
          placeholder="je@email.nl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-navy border border-cyan/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-mid focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/30 transition-all"
        />
      </div>
      <div>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full bg-navy border border-cyan/20 rounded-lg px-4 py-3 text-white text-sm focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/30 transition-all"
        >
          <option value="trainer">Jeugdtrainer</option>
          <option value="coordinator">TC-coördinator</option>
          <option value="club">Clubvertegenwoordiger</option>
          <option value="other">Anders</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full py-3.5 text-sm disabled:opacity-50"
      >
        {loading ? "Bezig..." : "Vraag Early Access aan →"}
      </button>
      <p className="text-gray-mid text-xs text-center">
        Gratis beta toegang · Geen creditcard nodig · Direct starten
      </p>
    </form>
  );
}
