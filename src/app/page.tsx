import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";
import { buildFaqSchema } from "@/lib/schema";
import { homepageFaqs } from "@/content/faqs";
import JsonLd from "@/components/seo/JsonLd";
import Hero from "@/components/sections/Hero";
import AudienceSelector from "@/components/sections/AudienceSelector";
import ServicesOverview from "@/components/sections/ServicesOverview";
import FinanceCalculators from "@/components/sections/FinanceCalculators";
import CareerTimeline from "@/components/sections/CareerTimeline";
import AdvisorProfile from "@/components/sections/AdvisorProfile";
import ConsultingProcess from "@/components/sections/ConsultingProcess";
import FAQ from "@/components/sections/FAQ";
import FinalCta from "@/components/sections/FinalCta";
import LegalNotice from "@/components/ui/LegalNotice";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = buildMetadata({
  title: `Finanzberatung für Ärzte und Zahnärzte in ${siteConfig.city}`,
  description: siteConfig.description,
  canonical: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(homepageFaqs)} />
      <Hero />
      <AudienceSelector />
      <Reveal>
        <ServicesOverview />
      </Reveal>
      <FinanceCalculators />
      <CareerTimeline />
      <Reveal>
        <AdvisorProfile />
      </Reveal>
      <Reveal>
        <ConsultingProcess />
      </Reveal>
      <FAQ faqs={homepageFaqs} title="Häufige Fragen zur Finanzberatung für Mediziner" />
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <LegalNotice />
      </div>
      <FinalCta />
    </>
  );
}
