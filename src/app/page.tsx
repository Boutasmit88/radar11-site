import { EarlyAccessForm } from "@/components/EarlyAccessForm";

/* ───────────────────────── DATA ───────────────────────── */

const STEPS = [
  { num: "01", title: "Analyseren", desc: "Voer observaties in en herken patronen in spelerontwikkeling.", icon: "🔍" },
  { num: "02", title: "Beslissen", desc: "Bepaal aandachtspunten en doelen op basis van data, niet onderbuikgevoel.", icon: "🎯" },
  { num: "03", title: "Ontwerpen", desc: "Stel trainingen samen die aansluiten op de ontwikkeldoelen.", icon: "⚙️" },
  { num: "04", title: "Evalueren", desc: "Meet voortgang en voed de volgende cyclus met inzichten.", icon: "📊" },
];

const FEATURES = [
  { title: "Wekelijks Besliskader", desc: "Structureer je complete trainersweek in één overzichtelijk systeem. Van observatie tot evaluatie.", icon: "📋" },
  { title: "Spelersontwikkeling", desc: "Volg individuele groei per speler. Niet alleen het team, maar elk talent verdient aandacht.", icon: "⚽" },
  { title: "AI-suggesties", desc: "Ontvang slimme aanbevelingen voor trainingsfocus op basis van je observaties en doelen.", icon: "🤖" },
  { title: "Periodisering (VCT)", desc: "Wetenschappelijk onderbouwde seizoensplanning met Visual Coaching Tool integratie.", icon: "📅" },
  { title: "Mobiel-eerst", desc: "Plan je training op de bus naar het veld. Alles werkt perfect op je telefoon.", icon: "📱" },
  { title: "Cluboverzicht", desc: "TC-coördinatoren zien alle teams in één dashboard. Consistente aanpak door de hele jeugd.", icon: "🏟️" },
];

const TESTIMONIALS = [
  { quote: "Eindelijk een tool die begrijpt hoe mijn week als jeugdtrainer eruitziet. Geen overbodige rommel, gewoon focus.", name: "Jeroen V.", role: "Trainer U15, amateurclub Brabant" },
  { quote: "Ik besteed 30 minuten minder per week aan voorbereiding en mijn trainingen zijn beter onderbouwd.", name: "Lisa M.", role: "Trainer U13, Zuid-Holland" },
  { quote: "De spelersontwikkeling-module maakt het verschil. Nu kan ik ouders ook écht laten zien hoe hun kind groeit.", name: "Mark D.", role: "TC-coördinator, club in Gelderland" },
];

const STATS = [
  { value: "40.000+", label: "Jeugdtrainers in NL" },
  { value: "< 5%", label: "Gebruikt digitale tools" },
  { value: "45 min", label: "Tijdsbesparing per week" },
  { value: "4.8/5", label: "Beta-gebruikersscore" },
];

const PRICING = [
  {
    name: "Trainer",
    price: "€9,99",
    period: "/maand",
    desc: "Voor de individuele ambitieuze trainer",
    features: ["1 team", "Wekelijks besliskader", "Spelersontwikkeling", "Mobiele app"],
    cta: "Start gratis proefperiode",
    highlight: false,
  },
  {
    name: "Team Pro",
    price: "€24,99",
    period: "/maand",
    desc: "Trainer + assistent, uitgebreide analyse",
    features: ["2 teams", "Alles in Trainer", "AI-suggesties", "Video-integratie", "Periodisering"],
    cta: "Start gratis proefperiode",
    highlight: true,
  },
  {
    name: "Club",
    price: "€99",
    period: "/maand",
    desc: "Hele jeugdafdeling in één systeem",
    features: ["5–15 teams", "Alles in Team Pro", "Clubdashboard", "Meerdere gebruikers", "Prioriteit support"],
    cta: "Neem contact op",
    highlight: false,
  },
];

const FAQ = [
  { q: "Hoe verschilt Radar11 van Coachbetter of Hudl?", a: "Coachbetter focust op trainingsplanning, Hudl op video-analyse. Radar11 is het enige platform dat de wekelijkse besliscyclus van een jeugdtrainer structureert: van observatie naar trainingskeuze naar evaluatie. Wij zijn de 'decision layer', niet een plannings- of videotool." },
  { q: "Heb ik technische kennis nodig?", a: "Absoluut niet. Radar11 is ontworpen voor trainers op het veld, niet voor data-analisten. Als je WhatsApp kunt gebruiken, kun je Radar11 gebruiken. Onboarding duurt minder dan 3 minuten." },
  { q: "Werkt het ook voor pupillenteams (U8–U12)?", a: "De focus ligt op U12–U19, maar de basisprincipes van gestructureerde spelersontwikkeling gelden voor alle leeftijden. In de beta testen we ook met U10–U12 trainers." },
  { q: "Wat kost het?", a: "De beta is gratis. Na de beta starten de prijzen vanaf €9,99/maand voor individuele trainers. Clubs en academies krijgen een prijs op maat. Er is altijd een gratis tier beschikbaar." },
  { q: "Is mijn data veilig?", a: "Ja. We slaan alle data versleuteld op in de EU (AVG-compliant). Spelersdata wordt geanonimiseerd en we delen nooit gegevens met derden. Privacy staat centraal." },
  { q: "Kan ik Radar11 met mijn hele staf gebruiken?", a: "Ja! Met Team Pro en Club-licenties kun je meerdere trainers en assistenten toevoegen. De TC-coördinator krijgt een overzicht van alle teams." },
];

/* ───────────────────────── PAGE ───────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan/5 blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-purple/5 blur-3xl" />
          {/* Radar circles */}
          <div className="radar-circle w-[200px] h-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
          <div className="radar-circle w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
          <div className="radar-circle w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-20">
          {/* Beta badge */}
          <div className="inline-flex items-center gap-2 bg-cyan/10 border border-cyan/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
            <span className="text-cyan text-xs font-semibold uppercase tracking-widest">Beta Nu Open</span>
          </div>

          <h1 className="font-[var(--font-heading)] text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-wide leading-none mb-6">
            The Game Is{" "}
            <span className="text-gradient-cyan">Changing</span>
          </h1>

          <p className="text-gray-light text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Radar11 helpt ambitieuze jeugdvoetbaltrainers om elke week betere
            ontwikkelingsbeslissingen te nemen — met AI-ondersteunde structuur
            voor analyse, training en evaluatie.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a href="#early-access" className="btn-primary text-base px-8 py-4">
              Aanmelden voor Early Access →
            </a>
            <p className="text-gray-mid text-xs">
              ✓ Gratis beta &nbsp; ✓ Geen creditcard &nbsp; ✓ Direct starten
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto text-cyan/50">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="bg-navy-light border-y border-cyan/10">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-cyan mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-mid text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM ═══ */}
      <section className="py-24 md:py-32 relative" id="product">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6">
              Het Probleem
            </h2>
            <p className="text-gray-light text-lg leading-relaxed">
              40.000 jeugdtrainers in Nederland nemen wekelijks tientallen
              ontwikkelingsbeslissingen op basis van onderbuikgevoel. Er is geen
              hulpmiddel dat hen helpt om <em className="text-cyan">systematisch</em> te analyseren,
              plannen en evalueren.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Geen structuur", desc: "Theorie uit cursussen bereikt de praktijk niet. Trainers werken met WhatsApp, Excel en losse aantekeningen.", icon: "🧩" },
              { title: "Tijdsdruk", desc: "2–3 uur per week voorbereiding, versnipperd over tools. Geen geïntegreerde workflow.", icon: "⏱️" },
              { title: "Resultaat boven ontwikkeling", desc: "Bestaande tools focussen op wedstrijden, niet op individuele spelerontwikkeling. Het kind verdwijnt uit beeld.", icon: "🎯" },
            ].map((problem) => (
              <div key={problem.title} className="card group">
                <div className="text-3xl mb-4">{problem.icon}</div>
                <h3 className="font-[var(--font-heading)] text-white text-xl font-bold uppercase tracking-wider mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-light text-sm leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-cyan font-semibold text-sm mt-10 tracking-wide">
            Gevolg: ongelijke kansen voor jeugdspelers, bepaald door de toevallige kwaliteit van hun trainer.
          </p>
        </div>
      </section>

      {/* ═══ SOLUTION: 4-STEP CYCLE ═══ */}
      <section className="py-24 md:py-32 bg-navy-light relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6">
              De Oplossing
            </h2>
            <p className="text-gray-light text-lg leading-relaxed">
              Radar11 structureert je wekelijkse cyclus in vier stappen —
              van observatie naar onderbouwde actie.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative group">
                <div className="card text-center h-full">
                  <div className="font-[var(--font-display)] text-cyan/20 text-6xl font-bold mb-2">
                    {step.num}
                  </div>
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <h3 className="font-[var(--font-heading)] text-white text-lg font-bold uppercase tracking-wider mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-light text-sm leading-relaxed">{step.desc}</p>
                </div>
                {/* Arrow between steps */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 text-cyan/30 text-2xl -translate-y-1/2 z-20">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Cycle indicator */}
          <div className="text-center mt-8">
            <span className="text-cyan/40 text-sm tracking-widest">↻ DE CYCLUS HERHAALT ELKE WEEK</span>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="py-24 md:py-32" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6">
              Alles wat je nodig hebt
            </h2>
            <p className="text-gray-light text-lg leading-relaxed">
              Gebouwd door en voor jeugdtrainers. Elke feature is ontworpen om
              je wekelijkse werk eenvoudiger en effectiever te maken.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="card group">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-[var(--font-heading)] text-white text-lg font-bold uppercase tracking-wider mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-light text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF ═══ */}
      <section className="py-24 md:py-32 bg-navy-light border-y border-cyan/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6">
              Wat beta-trainers zeggen
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card">
                <div className="text-cyan text-4xl leading-none mb-4">"</div>
                <p className="text-gray-light text-sm leading-relaxed mb-6 italic">{t.quote}</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-mid text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section className="py-24 md:py-32" id="pricing">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6">
              Pricing
            </h2>
            <p className="text-gray-light text-lg leading-relaxed">
              Start gratis in de beta. Schaal op wanneer je klaar bent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PRICING.map((tier) => (
              <div
                key={tier.name}
                className={`card relative ${
                  tier.highlight
                    ? "border-cyan/40 shadow-lg shadow-cyan/10"
                    : ""
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan to-purple text-navy text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    Populair
                  </div>
                )}
                <h3 className="font-[var(--font-heading)] text-white text-xl font-bold uppercase tracking-wider mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-mid text-sm mb-4">{tier.desc}</p>
                <div className="mb-6">
                  <span className="font-[var(--font-heading)] text-4xl font-bold text-white">
                    {tier.price}
                  </span>
                  <span className="text-gray-mid text-sm">{tier.period}</span>
                </div>
                <ul className="space-y-2.5 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-light">
                      <span className="text-cyan">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#early-access"
                  className={tier.highlight ? "btn-primary w-full text-sm" : "btn-outline w-full text-sm"}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-mid text-xs mt-8">
            Prijzen na beta. Huidige beta-gebruikers krijgen founding member korting.
          </p>
        </div>
      </section>

      {/* ═══ EARLY ACCESS CTA ═══ */}
      <section className="py-24 md:py-32 relative overflow-hidden" id="early-access">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-navy to-purple/10" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6">
            Word een van de eersten
          </h2>
          <p className="text-gray-light text-lg leading-relaxed mb-10">
            De beta is nu open voor ambitieuze jeugdtrainers in Nederland.
            Meld je aan en begin vandaag nog met betere trainingsbeslissingen.
          </p>

          <div className="flex justify-center">
            <EarlyAccessForm />
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-24 md:py-32 bg-navy-light" id="faq">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-12 text-center">
            Veelgestelde vragen
          </h2>

          <div className="space-y-4">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group card cursor-pointer"
              >
                <summary className="flex items-center justify-between text-white font-semibold text-sm list-none">
                  {item.q}
                  <span className="text-cyan ml-4 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="text-gray-light text-sm leading-relaxed mt-4 pt-4 border-t border-cyan/10">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-20 border-t border-cyan/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-[var(--font-heading)] text-cyan text-lg italic mb-4">
            "The game is changing."
          </p>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-4xl font-bold text-white uppercase tracking-wide mb-8">
            Doe mee met de toekomst van jeugdvoetbal
          </h2>
          <a href="#early-access" className="btn-primary text-base px-8 py-4">
            Start met Radar11 →
          </a>
        </div>
      </section>
    </>
  );
}
