export const siteConfig = {
  name: "Dennis Landwehr",
  professionalTitle: "Finanzberater bei MLP",
  specialization: "Finanzberatung für Humanmediziner, Zahnmediziner und Medizinstudierende",
  city: "Hannover",
  region: "Hannover",
  phone: "01754960247",
  phoneFormatted: "0175 496 02 47",
  email: "dennis.landwehr@mlp.de",
  address: {
    street: "Marienstr. 11",
    zip: "30171",
    city: "Hannover",
    country: "Deutschland",
    full: "Marienstr. 11, 30171 Hannover",
  },
  bookingUrl: "https://onlineberatung.mlp.de/consultant/dennis.landwehr",
  mlpProfileUrl: "https://mlp-financify.de/hannover/team/profile/dennis-landwehr/",
  siteUrl: "https://dennis-landwehr.com",
  description:
    "Finanzberatung für Human- und Zahnmediziner in Hannover. Dennis Landwehr, Finanzberater bei MLP, begleitet Medizinstudierende, Ärztinnen und Ärzte sowie Zahnärzte bei Absicherung, Vermögensaufbau und finanzieller Planung.",
  ogImage: "/images/og-image.jpg",
  twitterHandle: undefined,
  locale: "de_DE",
  legalNotice: {
    pendingReview: true,
    message:
      "Die Rechtstexte dieser Seite sind Platzhalter und wurden noch nicht juristisch geprüft. Vor Veröffentlichung ist eine anwaltliche Prüfung sowie die Compliance-Freigabe durch MLP erforderlich.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
