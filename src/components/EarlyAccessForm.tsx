"use client";

import { useState } from "react";

export function EarlyAccessForm({ variant = "default" }: { variant?: "default" | "compact" }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("trainer");
  const [honeypot, setHoneypot] = useState(""); // Bot trap
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, role, honeypot }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Er ging iets mis. Probeer het opnieuw.");
        setLoading(false);
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Verbindingsfout. Controleer je internet en probeer opnieuw.");
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="card text-center py-8">
        <div className="text-4xl mb-3">🎯</div>
        <h3 className="text-white text-xl font-bold mb-2">Je staat op de lijst!</h3>
        <p className="text-gray-light text-sm">
          We hebben een welkomstmail gestuurd naar <strong className="text-cyan">{email}</strong>. Check je inbox (en spam).
        </p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Honeypot - hidden from real users */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="absolute opacity-0 h-0 w-0 pointer-events-none"
            aria-hidden="true"
          />
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
        </div>
        {error && <p className="text-red-400 text-xs mt-2 text-center">{error}</p>}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card max-w-md w-full space-y-4">
      <h3 className="font-[var(--font-heading)] text-white text-lg font-bold uppercase tracking-wider">
        Meld je aan voor Early Access
      </h3>
      {/* Honeypot - hidden from real users */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="absolute opacity-0 h-0 w-0 pointer-events-none"
        aria-hidden="true"
      />
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
      {error && <p className="text-red-400 text-xs text-center">{error}</p>}
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
