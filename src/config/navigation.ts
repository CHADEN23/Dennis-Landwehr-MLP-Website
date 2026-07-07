import { siteConfig } from "./site";

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavGroup = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const mainNav: NavGroup[] = [
  {
    label: "Leistungen",
    href: "/leistungen",
    children: [
      { label: "Berufshaftpflicht", href: "/leistungen/berufshaftpflicht-mediziner" },
      { label: "Krankenversicherung", href: "/leistungen/krankenversicherung-mediziner" },
      { label: "Berufsunfähigkeit", href: "/leistungen/berufsunfaehigkeit-mediziner" },
      { label: "Vermögensaufbau", href: "/leistungen/vermoegensaufbau-mediziner" },
      { label: "Liquiditätsmanagement", href: "/leistungen/liquiditaetsmanagement-mediziner" },
    ],
  },
  {
    label: "Für Studierende",
    href: "/studierende",
  },
  {
    label: "Über mich",
    href: "/ueber-mich",
  },
];

export const footerNav = {
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "Rechtliche Hinweise", href: "/rechtliche-hinweise" },
  ],
  contact: [
    { label: siteConfig.phoneFormatted, href: `tel:+49${siteConfig.phone}` },
    { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  ],
  external: [
    {
      label: "MLP-Beraterprofil",
      href: siteConfig.mlpProfileUrl,
      external: true,
    },
  ],
};
