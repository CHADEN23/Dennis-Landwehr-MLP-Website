import { siteConfig } from "@/config/site";

export type BookingSource =
  | "hero"
  | "nav"
  | "services"
  | "audience"
  | "process"
  | "final-cta"
  | "sticky-mobile"
  | "service-page"
  | "studierende"
  | "ueber-mich"
  | "faq";

export function getBookingUrl(source?: BookingSource): string {
  const baseUrl = siteConfig.bookingUrl;
  if (!source) return baseUrl;
  // Konfigurierbare Herkunftskennung – nur wenn technisch unterstützt
  // Ansonsten einfache Weiterleitung zur zentralen Buchungsseite
  return baseUrl;
}

export function getPhoneHref(): string {
  return `tel:+49${siteConfig.phone}`;
}

export function getEmailHref(): string {
  return `mailto:${siteConfig.email}`;
}
