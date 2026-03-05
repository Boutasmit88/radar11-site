import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-navy-light border-t border-cyan/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <Image
                src="/logo-full.png"
                alt="Radar 11 Sportsystems"
                width={180}
                height={80}
                className="w-44 h-auto object-contain"
              />
            </div>
            <p className="text-gray-mid text-sm leading-relaxed">
              AI-gedreven beslissingsondersteuning voor ambitieuze jeugdvoetbaltrainers.
            </p>
            <p className="text-cyan text-sm italic mt-3">The game is changing.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-[var(--font-heading)] text-white text-sm font-bold uppercase tracking-widest mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {["Features", "Pricing", "Roadmap", "Changelog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-mid hover:text-cyan text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bedrijf */}
          <div>
            <h4 className="font-[var(--font-heading)] text-white text-sm font-bold uppercase tracking-widest mb-4">
              Bedrijf
            </h4>
            <ul className="space-y-2.5">
              {["Over ons", "Contact", "Blog", "Partners"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-mid hover:text-cyan text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-[var(--font-heading)] text-white text-sm font-bold uppercase tracking-widest mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {["Privacy Policy", "Disclaimer", "Algemene Voorwaarden"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-mid hover:text-cyan text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cyan/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-mid text-xs">
            © {new Date().getFullYear()} Radar11. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-6">
            {/* Social links */}
            {[
              { label: "LinkedIn", href: "#" },
              { label: "Twitter/X", href: "#" },
              { label: "Instagram", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-mid hover:text-cyan text-xs transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
