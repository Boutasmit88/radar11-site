import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    default: "Radar11 — AI-beslisplatform voor jeugdvoetbaltrainers",
    template: "%s | Radar11",
  },
  description:
    "Neem elke week betere trainingsbeslissingen. Radar11 geeft structuur aan analyse, ontwerp en evaluatie voor ambitieuze jeugdtrainers.",
  keywords: [
    "jeugdvoetbal",
    "trainerstools",
    "spelersontwikkeling",
    "trainingsplanning",
    "voetbal periodisering",
    "AI coaching",
    "jeugdtrainer",
  ],
  authors: [{ name: "Radar11" }],
  creator: "Radar11",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://radar11.com",
    siteName: "Radar11",
    title: "Radar11 — AI-beslisplatform voor jeugdvoetbaltrainers",
    description:
      "Neem elke week betere trainingsbeslissingen. Radar11 structureert analyse, ontwerp en evaluatie voor ambitieuze jeugdtrainers.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Radar11" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radar11 — AI-beslisplatform voor jeugdvoetbaltrainers",
    description:
      "Neem elke week betere trainingsbeslissingen met AI-ondersteunde beslissingsondersteuning.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700&family=Rajdhani:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-navy text-gray-light antialiased">
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
