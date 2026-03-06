"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Hoe het werkt", href: "#hoe-werkt-het" },
  { label: "Functies", href: "#features" },
  { label: "Voor wie", href: "#product" },
  { label: "Prijzen", href: "#pricing" },
  { label: "Vragen", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md border-b border-cyan/10 shadow-lg shadow-navy/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <Image
            src="/logo-icon.png"
            alt="Radar 11"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <span className="font-[var(--font-heading)] text-white text-xl font-bold tracking-widest uppercase">
            Radar<span className="text-cyan">11</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-light hover:text-cyan transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#early-access"
            className="btn-primary text-sm py-2.5 px-5"
          >
            Start gratis →
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-light/98 backdrop-blur-lg border-t border-cyan/10">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-gray-light hover:text-cyan transition-colors text-sm font-medium tracking-wide uppercase py-2"
              >
                {item.label}
              </a>
            ))}
            <a href="#early-access" className="btn-primary text-sm py-3 text-center mt-2">
              Start gratis →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
