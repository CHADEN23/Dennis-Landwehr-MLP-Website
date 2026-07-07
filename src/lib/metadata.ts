import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type MetadataOptions = {
  title: string;
  description: string;
  canonical?: string;
  noIndex?: boolean;
};

export function buildMetadata(options: MetadataOptions): Metadata {
  const { title, description, canonical, noIndex } = options;
  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = canonical ? `${siteConfig.siteUrl}${canonical}` : siteConfig.siteUrl;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} – ${siteConfig.professionalTitle}`,
        },
      ],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export function buildServiceMetadata(
  serviceTitle: string,
  serviceDescription: string,
  slug: string
): Metadata {
  return buildMetadata({
    title: serviceTitle,
    description: serviceDescription,
    canonical: `/leistungen/${slug}`,
  });
}
