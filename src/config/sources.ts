// Zentrale Quellenverwaltung für gesetzliche Grenzwerte und Fakten.
// Alle zeitabhängigen Werte müssen hier gepflegt werden.
// Veraltet ein Wert, reicht eine Anpassung in dieser Datei.

export type SourceEntry = {
  id: string;
  label: string;
  url?: string;
  retrievedAt: string; // ISO date string
};

export const sources: SourceEntry[] = [
  {
    id: "bmas-versicherungspflichtgrenze",
    label: "BMAS: Versicherungspflichtgrenze und Beitragsbemessungsgrenze",
    url: "https://www.bmas.de/DE/Arbeit/Arbeitsrecht/Arbeitnehmerrechte/Lohn-und-Gehalt/Beitragsbemessungsgrenze/beitragsbemessungsgrenze-art.html",
    retrievedAt: "2024-01-01",
  },
  {
    id: "gkv-spitzenverband",
    label: "GKV-Spitzenverband: Rechengrößen der Sozialversicherung",
    url: "https://www.gkv-spitzenverband.de/krankenversicherung/rechengroessen/rechengroessen.jsp",
    retrievedAt: "2024-01-01",
  },
];

// HINWEIS: Die Jahresarbeitsentgeltgrenze (JAEG) und andere gesetzliche
// Grenzwerte werden jährlich angepasst. Bitte prüfen und hier aktualisieren.
// Stand: Platzhalter – aktuelle Werte müssen vor Veröffentlichung eingetragen werden.
export const legalThresholds = {
  jaegStandard: {
    value: null as number | null, // Jahresarbeitsentgeltgrenze (regulär)
    year: 2025,
    note: "Bitte vor Veröffentlichung mit aktuellem Wert befüllen und Quelle angeben.",
  },
  jaegPrivileged: {
    value: null as number | null, // Besondere Jahresarbeitsentgeltgrenze (PKV-Bestandsversicherte)
    year: 2025,
    note: "Bitte vor Veröffentlichung mit aktuellem Wert befüllen und Quelle angeben.",
  },
};
