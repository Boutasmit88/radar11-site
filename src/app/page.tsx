import { EarlyAccessForm } from "@/components/EarlyAccessForm";

/* ───────────────────────── DATA ───────────────────────── */

const STEPS = [
  { num: "01", title: "Observeren", desc: "Leg je observaties vast tijdens en na de training. Wat zie je bij elke speler?", icon: "👁️" },
  { num: "02", title: "Analyseren", desc: "Radar11 herkent patronen en toont waar elke speler staat in zijn ontwikkeling.", icon: "📊" },
  { num: "03", title: "Plannen", desc: "Stel je training samen in minuten — met oefenstof uit de bibliotheek en gericht op wat je spelers nodig hebben.", icon: "📋" },
  { num: "04", title: "Evalueren", desc: "Meet het effect van je keuzes en begin de volgende week scherper.", icon: "✅" },
];

const FEATURES = [
  {
    title: "Training maken in minuten",
    desc: "Stel in een paar klikken een complete training samen. Kies uit kant-en-klare oefeningen, koppel ze aan ontwikkeldoelen en je bent klaar.",
    icon: "⚽",
    details: ["Drag & drop trainingsopbouw", "Koppel oefeningen aan doelen", "Weekplanning in één overzicht", "Hergebruik je beste sessies"],
  },
  {
    title: "Oefenstof bibliotheek",
    desc: "Toegang tot honderden oefeningen, gesorteerd op leeftijd, thema en niveau. Nooit meer zonder inspiratie op het veld.",
    icon: "📚",
    details: ["Honderden oefeningen beschikbaar", "Filter op leeftijd & thema", "Met uitleg en opstellingen", "Eigen oefeningen toevoegen"],
  },
  {
    title: "Spelers beoordelen",
    desc: "Beoordeel elke speler op techniek, inzicht, fysiek en mentaliteit. Zie groei over weken en maanden.",
    icon: "📊",
    details: ["Techniek & balvaardigheid", "Spelintelligentie & positiespel", "Fysieke ontwikkeling", "Trainingsopkomst"],
  },
  {
    title: "AI-trainingsadvies",
    desc: "Op basis van je observaties geeft Radar11 suggesties voor je volgende training. Gericht op wat je spelers écht nodig hebben.",
    icon: "🤖",
    details: ["Persoonlijke aanbevelingen", "Gebaseerd op jouw data", "Elke week slimmer"],
  },
  {
    title: "Seizoensplanning",
    desc: "Plan je seizoen met wetenschappelijk onderbouwde periodisering. Weet wanneer je moet pieken en wanneer je moet bouwen.",
    icon: "📅",
    details: ["Periodisering per blok", "VCT-integratie", "Automatische fasering"],
  },
  {
    title: "Werkt op je telefoon",
    desc: "Alles wat je nodig hebt past in je broekzak. Plan je training op de bus naar het veld.",
    icon: "📱",
    details: ["Volledig mobiel", "Snel invoeren", "Offline beschikbaar"],
  },
  {
    title: "Clubdashboard",
    desc: "TC-coördinatoren zien alle teams in één overzicht. Consistente aanpak door de hele jeugdopleiding.",
    icon: "🏟️",
    details: ["Alle teams op één plek", "Vergelijk ontwikkeling", "Eén lijn in de club"],
  },
  {
    title: "Voetbal.nl & Sportlink",
    desc: "Koppel Radar11 aan Voetbal.nl en Sportlink. Spelersgegevens, wedstrijddata en teaminfo worden automatisch gesynchroniseerd.",
    icon: "🔗",
    details: ["Automatische spelersimport", "Wedstrijddata ophalen", "Teamindelingen synchroniseren", "Geen dubbel werk"],
  },
];

const USE_CASES = [
  {
    role: "Trainers",
    desc: "Plan trainingen, beoordeel spelers en volg hun ontwikkeling — alles in één tool.",
    items: ["Weekplanning maken", "Spelers evalueren", "Training samenstellen", "Voortgang bijhouden"],
    icon: "🎽",
  },
  {
    role: "Clubs & TC's",
    desc: "Eén systeem voor de hele jeugdopleiding. Overzicht, consistentie en kwaliteitsborging.",
    items: ["Overzicht alle teams", "Lijn in de club", "Talent signaleren", "Kwaliteit borgen"],
    icon: "🏟️",
  },
  {
    role: "Spelers & ouders",
    desc: "Inzicht in persoonlijke groei. Geen vaag gevoel, maar concrete data over ontwikkeling.",
    items: ["Eigen voortgang zien", "Doelen begrijpen", "Ontwikkeling volgen", "Feedback ontvangen"],
    icon: "⚽",
  },
];

const STATS = [
  { value: "4 stappen", label: "Van observatie tot evaluatie" },
  { value: "< 10 min", label: "Trainingsvoorbereiding" },
  { value: "100%", label: "Gratis tijdens de beta" },
  { value: "Nu open", label: "Early access beschikbaar" },
];

const FAQ = [
  { q: "Hoe verschilt Radar11 van Coachbetter of Hudl?", a: "Coachbetter focust op trainingsplanning, Hudl op video-analyse. Radar11 is het enige platform dat de wekelijkse besliscyclus van een jeugdtrainer structureert: van observatie naar trainingskeuze naar evaluatie. Wij zijn de beslissingslaag, niet een plannings- of videotool." },
  { q: "Heb ik technische kennis nodig?", a: "Absoluut niet. Radar11 is ontworpen voor trainers op het veld, niet voor data-analisten. Als je WhatsApp kunt gebruiken, kun je Radar11 gebruiken. Je bent binnen 3 minuten aan de slag." },
  { q: "Werkt het ook voor pupillenteams (O8–O12)?", a: "De focus ligt op O12–O19, maar de basisprincipes van gestructureerde spelersontwikkeling gelden voor alle leeftijden. In de beta testen we ook met O10–O12 trainers." },
  { q: "Wat kost het?", a: "Tijdens de beta is Radar11 volledig gratis. Na de beta starten de prijzen vanaf €9,99/maand. Early access gebruikers krijgen founding member korting." },
  { q: "Is mijn data veilig?", a: "Ja. Alle data wordt versleuteld opgeslagen in de EU (AVG-compliant). Spelersdata wordt geanonimiseerd en we delen nooit gegevens met derden." },
  { q: "Kan ik Radar11 met mijn hele staf gebruiken?", a: "Ja! Je kunt meerdere trainers en assistenten toevoegen. De TC-coördinator krijgt een overzicht van alle teams." },
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
          <div className="radar-circle w-[200px] h-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
          <div className="radar-circle w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
          <div className="radar-circle w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-20">
          {/* Beta badge */}
          <div className="inline-flex items-center gap-2 bg-cyan/10 border border-cyan/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
            <span className="text-cyan text-xs font-semibold uppercase tracking-widest">Beta nu open</span>
          </div>

          <h1 className="font-[var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide leading-none mb-4">
            Het platform voor{" "}
            <span className="text-gradient-cyan">slimmere jeugdtrainers</span>
          </h1>

          <p className="text-white/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto mb-4 leading-snug">
            Maak in minuten een training. Beoordeel spelers. Volg ontwikkeling.
          </p>

          <p className="text-gray-light text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Radar11 brengt trainingsplanning, oefenstof en spelersanalyse samen
            in één AI-gedreven platform — zodat jij betere beslissingen neemt
            voor je spelers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <a href="#early-access" className="btn-primary text-base px-8 py-4">
              Start gratis →
            </a>
            <a href="#demo" className="btn-outline text-base px-8 py-4">
              Boek een demo
            </a>
          </div>
          <p className="text-gray-mid text-xs">
            Gratis tijdens de beta · Geen creditcard nodig · Direct aan de slag
          </p>

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

      {/* ═══ PROBLEEM ═══ */}
      <section className="py-24 md:py-32 relative" id="product">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-4">Het probleem</p>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6">
              Trainers verdienen beter gereedschap
            </h2>
            <p className="text-gray-light text-lg leading-relaxed">
              De meeste jeugdtrainers werken met WhatsApp-groepen, Excel-lijstjes
              en losse aantekeningen. Er is geen tool die hen helpt om{" "}
              <em className="text-cyan not-italic font-semibold">structureel betere keuzes</em> te maken
              voor hun spelers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Geen structuur", desc: "Cursuskennis bereikt de praktijk niet. Je werkt met losse tools die niet samenwerken. Voorbereiding kost te veel tijd.", icon: "🧩" },
              { title: "Geen spelersdata", desc: "Je ziet je spelers groeien, maar je kunt het niet bijhouden. Ouders vragen hoe het gaat — je hebt geen concreet antwoord.", icon: "📉" },
              { title: "Focus op resultaat", desc: "Bestaande tools draaien om wedstrijduitslagen. Niet om de individuele ontwikkeling van elk kind in je team.", icon: "🎯" },
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
        </div>
      </section>

      {/* ═══ HOE WERKT HET: 4 STAPPEN ═══ */}
      <section className="py-24 md:py-32 bg-navy-light relative overflow-hidden" id="hoe-werkt-het">
        <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-4">Hoe werkt het</p>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6">
              Vier stappen, elke week
            </h2>
            <p className="text-gray-light text-lg leading-relaxed">
              Radar11 geeft structuur aan je trainersweek. Van observatie
              tot evaluatie — elke stap bouwt voort op de vorige.
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
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 text-cyan/30 text-2xl -translate-y-1/2 z-20">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <span className="text-cyan/40 text-sm tracking-widest">↻ DE CYCLUS HERHAALT ELKE WEEK</span>
          </div>
        </div>
      </section>

      {/* ═══ FUNCTIONALITEITEN ═══ */}
      <section className="py-24 md:py-32" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-4">Functionaliteiten</p>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6">
              Alles wat je nodig hebt
            </h2>
            <p className="text-gray-light text-lg leading-relaxed">
              Gebouwd door en voor jeugdtrainers. Elke functie is ontworpen om
              je wekelijkse werk concreet eenvoudiger te maken.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="card group">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-[var(--font-heading)] text-white text-lg font-bold uppercase tracking-wider mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-light text-sm leading-relaxed mb-4">{feature.desc}</p>
                <ul className="space-y-1.5">
                  {feature.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-gray-mid">
                      <span className="text-cyan text-xs">✓</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VOOR WIE ═══ */}
      <section className="py-24 md:py-32 bg-navy-light border-y border-cyan/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-4">Voor wie</p>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6">
              Gebouwd voor het hele veld
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {USE_CASES.map((uc) => (
              <div key={uc.role} className="card">
                <div className="text-3xl mb-4">{uc.icon}</div>
                <h3 className="font-[var(--font-heading)] text-white text-xl font-bold uppercase tracking-wider mb-3">
                  {uc.role}
                </h3>
                <p className="text-gray-light text-sm leading-relaxed mb-4">{uc.desc}</p>
                <ul className="space-y-2">
                  {uc.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-mid">
                      <span className="text-cyan">→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF (eerlijk, beta-context) ═══ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-4">Waarom Radar11</p>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6">
              Wat maakt Radar11 anders?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Andere tools", items: ["Gericht op wedstrijduitslagen", "Video-analyse of statistieken", "Complex en tijdrovend", "Gebouwd voor profclubs"], color: "gray-mid" },
              { label: "Radar11", items: ["Gericht op spelersontwikkeling", "Wekelijks besliskader", "Klaar in minuten", "Gebouwd door trainers, voor trainers"], color: "cyan" },
            ].map((col) => (
              <div key={col.label} className="card">
                <h3 className={`font-[var(--font-heading)] text-${col.color} text-lg font-bold uppercase tracking-wider mb-4`}>
                  {col.label}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-light">
                      <span className={col.color === "cyan" ? "text-cyan" : "text-gray-mid"}>
                        {col.color === "cyan" ? "✓" : "—"}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRIJZEN: BETA FOCUS ═══ */}
      <section className="py-24 md:py-32 bg-navy-light" id="pricing">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-4">Prijzen</p>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6">
              Gratis tijdens de beta
            </h2>
            <p className="text-gray-light text-lg leading-relaxed">
              We bouwen Radar11 samen met trainers. Daarom is het platform
              volledig gratis zolang we in beta zijn.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="card border-cyan/30 shadow-lg shadow-cyan/10 text-center">
              <div className="inline-flex items-center gap-2 bg-cyan/10 border border-cyan/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
                <span className="text-cyan text-xs font-semibold uppercase tracking-widest">Beta</span>
              </div>
              <h3 className="font-[var(--font-heading)] text-white text-2xl font-bold uppercase tracking-wider mb-2">
                Volledig gratis
              </h3>
              <p className="text-gray-mid text-sm mb-6">Alle functies, geen beperkingen, geen creditcard</p>

              <div className="mb-8">
                <span className="font-[var(--font-heading)] text-5xl font-bold text-cyan">€0</span>
                <span className="text-gray-mid text-sm"> /maand</span>
              </div>

              <ul className="space-y-3 mb-8 text-left max-w-xs mx-auto">
                {["Trainingen plannen", "Spelers beoordelen", "AI-trainingsadvies", "Seizoensplanning", "Mobiele app", "Onbeperkte teams"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-light">
                    <span className="text-cyan">✓</span> {f}
                  </li>
                ))}
              </ul>

              <a href="#early-access" className="btn-primary w-full text-base">
                Start gratis →
              </a>

              <p className="text-gray-mid text-xs mt-4">
                Early access gebruikers krijgen founding member korting na de beta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AANMELDEN ═══ */}
      <section className="py-24 md:py-32 relative overflow-hidden" id="early-access">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-navy to-purple/10" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6">
            Word een van de eersten
          </h2>
          <p className="text-gray-light text-lg leading-relaxed mb-10">
            Meld je aan voor de beta en begin vandaag nog met betere
            trainingsbeslissingen. Gratis, vrijblijvend, direct toegang.
          </p>

          <div className="flex justify-center">
            <EarlyAccessForm />
          </div>
        </div>
      </section>

      {/* ═══ VEELGESTELDE VRAGEN ═══ */}
      <section className="py-24 md:py-32 bg-navy-light" id="faq">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-4 text-center">Vragen</p>
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

      {/* ═══ BOEK EEN DEMO ═══ */}
      <section className="py-24 md:py-32 bg-navy-light border-y border-cyan/10" id="demo">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-4">Demo</p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6">
            Liever eerst zien hoe het werkt?
          </h2>
          <p className="text-gray-light text-lg leading-relaxed mb-10">
            Plan een korte demo van 15 minuten. We laten je zien hoe je in
            Radar11 een training maakt, spelers beoordeelt en je week structureert.
          </p>
          <a
            href="mailto:info@radar11.com?subject=Demo%20aanvragen&body=Hoi%2C%20ik%20wil%20graag%20een%20demo%20van%20Radar11%20plannen."
            className="btn-primary text-base px-8 py-4"
          >
            Boek een demo →
          </a>
          <p className="text-gray-mid text-xs mt-4">We nemen binnen 24 uur contact op</p>
        </div>
      </section>

      {/* ═══ LAATSTE CTA ═══ */}
      <section className="py-20 border-t border-cyan/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[var(--font-heading)] text-2xl md:text-4xl font-bold text-white uppercase tracking-wide mb-4">
            Klaar om je trainersweek te structureren?
          </h2>
          <p className="text-gray-light text-base mb-8">
            Sluit je aan bij trainers die nu al betere keuzes maken voor hun spelers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#early-access" className="btn-primary text-base px-8 py-4">
              Start gratis met Radar11 →
            </a>
            <a href="#demo" className="btn-outline text-base px-8 py-4">
              Boek een demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
