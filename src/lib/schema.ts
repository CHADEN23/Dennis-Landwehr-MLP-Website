import { siteConfig } from "@/config/site";
import type { FaqItem } from "@/content/faqs";

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.professionalTitle,
    description: `${siteConfig.professionalTitle}, spezialisiert auf ${siteConfig.specialization}`,
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    telephone: `+49${siteConfig.phone}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.zip,
      addressLocality: siteConfig.address.city,
      addressCountry: "DE",
    },
    sameAs: [siteConfig.mlpProfileUrl],
    worksFor: {
      "@type": "Organization",
      name: "MLP Finanzberatung SE",
      url: "https://www.mlp.de",
    },
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} – ${siteConfig.professionalTitle}`,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    author: buildPersonSchema(),
  };
}

export function buildWebPageSchema(options: {
  name: string;
  description: string;
  url: string;
  breadcrumbs?: Array<{ name: string; href: string }>;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: options.name,
    description: options.description,
    url: `${siteConfig.siteUrl}${options.url}`,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    inLanguage: "de",
  };

  if (options.breadcrumbs && options.breadcrumbs.length > 0) {
    schema["breadcrumb"] = buildBreadcrumbSchema(options.breadcrumbs);
  }

  return schema;
}

export function buildBreadcrumbSchema(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.href}`,
    })),
  };
}

export function buildFaqSchema(faqs: FaqItem[]): Record<string, unknown> | null {
  if (faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildFinancialServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: `${siteConfig.name} – Finanzberatung für Mediziner`,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    telephone: `+49${siteConfig.phone}`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.zip,
      addressLocality: siteConfig.address.city,
      addressCountry: "DE",
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.city,
    },
    provider: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };
}
