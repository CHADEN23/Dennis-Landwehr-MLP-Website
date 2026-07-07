export type Service = {
  id: string;
  title: string;
  slug: string;
  href: string;
  shortText: string;
  highlights: string[];
  ctaText: string;
  iconName: string;
};

export const services: Service[] = [
  {
    id: "berufshaftpflicht",
    title: "Berufshaftpflicht für Mediziner",
    slug: "berufshaftpflicht-mediziner",
    href: "/leistungen/berufshaftpflicht-mediziner",
    shortText:
      "Berufliche Verantwortung braucht einen Schutz, der zur konkreten Tätigkeit passt. Gemeinsam prüfen wir, welche Risiken in Studium, Anstellung, Nebentätigkeit oder eigener Praxis berücksichtigt werden müssen.",
    highlights: [
      "Famulatur und Praktisches Jahr",
      "Angestellte Tätigkeit und Nebentätigkeiten",
      "Human- und Zahnmedizin",
      "Praxis und Mitarbeitende",
    ],
    ctaText: "Berufshaftpflicht ansehen",
    iconName: "shield",
  },
  {
    id: "krankenversicherung",
    title: "Krankenversicherung für Mediziner",
    slug: "krankenversicherung-mediziner",
    href: "/leistungen/krankenversicherung-mediziner",
    shortText:
      "Gesetzlich oder privat ist keine pauschale Entscheidung. Entscheidend sind berufliche Situation, Leistungswünsche, langfristige Beitragsentwicklung und persönliche Lebensplanung.",
    highlights: [
      "GKV und PKV vergleichen",
      "Optionen für Studierende und Berufseinsteiger",
      "Krankentagegeld mitdenken",
      "Langfristige Versorgung planen",
    ],
    ctaText: "Krankenversicherung prüfen",
    iconName: "heart",
  },
  {
    id: "berufsunfaehigkeit",
    title: "Berufsunfähigkeit für Mediziner",
    slug: "berufsunfaehigkeit-mediziner",
    href: "/leistungen/berufsunfaehigkeit-mediziner",
    shortText:
      "Die eigene Arbeitskraft ist die Grundlage des späteren Einkommens. Eine medizinerspezifische Absicherung sollte Tätigkeit, Karriereentwicklung und mögliche Versorgungslücken berücksichtigen.",
    highlights: [
      "Früher Abschluss im Studium",
      "Passende Rentenhöhe",
      "Nachversicherungsmöglichkeiten",
      "Medizinische und zahnmedizinische Tätigkeitsbilder",
    ],
    ctaText: "Arbeitskraft absichern",
    iconName: "umbrella",
  },
  {
    id: "vermoegensaufbau",
    title: "Vermögensaufbau für Mediziner",
    slug: "vermoegensaufbau-mediziner",
    href: "/leistungen/vermoegensaufbau-mediziner",
    shortText:
      "Ein gutes Einkommen schafft Möglichkeiten, aber noch keine Strategie. Wir strukturieren kurz-, mittel- und langfristige Ziele und entwickeln daraus ein nachvollziehbares Vermögenskonzept.",
    highlights: [
      "Flexible Rücklagen",
      "Langfristiger Vermögensaufbau",
      "Altersvorsorge und Versorgungswerk",
      "Individuelle Risikobereitschaft",
    ],
    ctaText: "Vermögensstrategie besprechen",
    iconName: "trending-up",
  },
  {
    id: "liquiditaetsmanagement",
    title: "Liquiditätsmanagement für Mediziner",
    slug: "liquiditaetsmanagement-mediziner",
    href: "/leistungen/liquiditaetsmanagement-mediziner",
    shortText:
      "Eine klare Trennung von laufenden Ausgaben, Rücklagen und langfristigem Vermögen schafft finanzielle Kontrolle – privat ebenso wie in der eigenen Praxis.",
    highlights: [
      "Notfallreserve",
      "Planbare Rücklagen",
      "Private und berufliche Zahlungsströme",
      "Liquiditätsplanung für Praxisinhaber",
    ],
    ctaText: "Liquidität strukturieren",
    iconName: "bar-chart",
  },
];

export const careerPhases = [
  {
    id: "studium",
    label: "Studium",
    description: "Erste Absicherung, Grundlagen schaffen",
  },
  {
    id: "famulatur-pj",
    label: "Famulatur & PJ",
    description: "Berufshaftpflicht, praktische Erfahrung",
  },
  {
    id: "berufseinstieg",
    label: "Berufseinstieg",
    description: "Krankenversicherung, BU, erste Rücklagen",
  },
  {
    id: "facharzt",
    label: "Facharzt­laufbahn",
    description: "Vermögensaufbau, Versorgungswerk optimieren",
  },
  {
    id: "niederlassung",
    label: "Niederlassung",
    description: "Praxisabsicherung, Finanzierung, Liquidität",
  },
  {
    id: "praxisfuehrung",
    label: "Praxis­führung",
    description: "Betriebswirtschaftliche Kontrolle, Team absichern",
  },
  {
    id: "ruhestand",
    label: "Ruhestands­planung",
    description: "Praxisabgabe, Rentenplanung, Vermögensübergabe",
  },
];
