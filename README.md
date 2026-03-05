# Radar11 — Website

AI-gedreven beslissingsplatform voor ambitieuze jeugdvoetbaltrainers.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Taal:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Rajdhani, Orbitron, Inter (Google Fonts)
- **Deploy:** Vercel (aanbevolen)

## Snel starten

```bash
# Dependencies installeren
npm install

# Development server starten
npm run dev

# Productie build
npm run build

# Productie server starten
npm start
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## Project Structuur

```
src/
├── app/
│   ├── globals.css          # Tailwind + brand design system
│   ├── layout.tsx           # Root layout (fonts, meta, header/footer)
│   ├── page.tsx             # Homepage (alle secties)
│   ├── robots.ts            # SEO robots.txt
│   └── sitemap.ts           # SEO sitemap.xml
├── components/
│   ├── Header.tsx           # Navigatie + mobile menu
│   ├── Footer.tsx           # Footer met links
│   ├── EarlyAccessForm.tsx  # Wachtlijst/sign-up formulier
│   └── JsonLd.tsx           # Structured data (SEO)
└── lib/                     # Utilities (nog leeg)
```

## Design System (Brand Guide)

### Kleuren
| Kleur | Hex | CSS Variable |
|-------|-----|-------------|
| Deep Navy | `#0A0E27` | `--color-navy` |
| Dark Blue | `#0F1B3D` | `--color-navy-light` |
| Neon Cyan | `#00E5FF` | `--color-cyan` |
| Electric Purple | `#9C27B0` | `--color-purple` |
| Magenta | `#E040FB` | `--color-magenta` |
| Teal | `#00BCD4` | `--color-teal` |
| Neon Green | `#39FF14` | `--color-neon-green` |

### Fonts
- **Headlines:** Rajdhani Bold / Orbitron
- **Body:** Inter
- **Code/Data:** JetBrains Mono

### Components
- `.card` — Donker paneel met hover-glow
- `.btn-primary` — Neon cyan button
- `.btn-outline` — Transparante button met cyan border
- `.grid-pattern` — Subtiel grid-achtergrond
- `.text-gradient-cyan` — Gradient tekst (cyan→teal)
- `.glow-cyan` — Neon glow effect

## Deployen op Vercel

1. Push naar GitHub
2. Ga naar [vercel.com](https://vercel.com) en importeer de repo
3. Vercel detecteert Next.js automatisch — klik Deploy
4. Custom domain instellen (radar11.com)

### Environment Variables (optioneel)
```env
# Email service (voor early access formulier)
RESEND_API_KEY=re_xxxxx

# Analytics
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxx

# CMS (als je later Contentful toevoegt)
CONTENTFUL_SPACE_ID=xxxxx
CONTENTFUL_ACCESS_TOKEN=xxxxx
```

## Volgende stappen

### Prioriteit 1 (deze week)
- [ ] Early access formulier koppelen aan email service (Resend/Mailchimp)
- [ ] Logo SVG toevoegen aan `/public`
- [ ] OG image maken (1200x630) → `/public/og-image.png`
- [ ] Echte beta-testimonials invullen
- [ ] Contact pagina toevoegen

### Prioriteit 2 (week 2)
- [ ] Product pagina (`/product`)
- [ ] Pricing pagina (`/pricing`)
- [ ] Blog structuur (`/blog`)
- [ ] Analytics integreren (PostHog/GA4)
- [ ] Cookie consent banner

### Prioriteit 3 (week 3+)
- [ ] Over ons pagina
- [ ] Legal pagina's (privacy, disclaimer, AV)
- [ ] Performance optimalisatie (Lighthouse audit)
- [ ] A/B testing op hero headline/CTA

## SEO

De site bevat:
- ✅ Metadata API (title, description, OG, Twitter)
- ✅ robots.txt (via `app/robots.ts`)
- ✅ sitemap.xml (via `app/sitemap.ts`)
- ✅ JSON-LD structured data (Organization, SoftwareApplication, FAQPage)
- ✅ Semantische HTML (H1→H2→H3 hiërarchie)

## Licentie

Proprietary — Radar11 © 2026
