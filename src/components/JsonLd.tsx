export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Radar11",
    url: "https://radar11.com",
    logo: "https://radar11.com/logo.png",
    description:
      "AI-gedreven beslissingsplatform voor ambitieuze jeugdvoetbaltrainers",
    foundingDate: "2026",
    sameAs: [
      "https://linkedin.com/company/radar11",
      "https://twitter.com/radar11",
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Radar11",
    applicationCategory: "SportApplication",
    operatingSystem: "Web",
    description:
      "AI-gedreven beslissingsplatform dat jeugdvoetbaltrainers helpt om wekelijks betere ontwikkelingsbeslissingen te nemen via een gestructureerde cyclus van analyse, beslissing, ontwerp en evaluatie.",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "199",
      priceCurrency: "EUR",
      offerCount: "4",
    },
    featureList: [
      "Wekelijks besliskader",
      "Spelersontwikkeling tracking",
      "AI-trainingssuggesties",
      "Wetenschappelijke periodisering (VCT)",
      "Mobiel-eerst design",
      "Cluboverzicht dashboard",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Hoe verschilt Radar11 van Coachbetter of Hudl?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Coachbetter focust op trainingsplanning, Hudl op video-analyse. Radar11 is het enige platform dat de wekelijkse besliscyclus van een jeugdtrainer structureert: van observatie naar trainingskeuze naar evaluatie.",
        },
      },
      {
        "@type": "Question",
        name: "Heb ik technische kennis nodig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absoluut niet. Radar11 is ontworpen voor trainers op het veld. Onboarding duurt minder dan 3 minuten.",
        },
      },
      {
        "@type": "Question",
        name: "Wat kost Radar11?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "De beta is gratis. Na de beta starten de prijzen vanaf €9,99/maand. Er is altijd een gratis tier beschikbaar.",
        },
      },
      {
        "@type": "Question",
        name: "Is mijn data veilig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Alle data wordt versleuteld opgeslagen in de EU (AVG-compliant). Spelersdata wordt geanonimiseerd.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
