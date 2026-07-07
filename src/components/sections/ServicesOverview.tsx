import { services } from "@/config/services";
import ServiceCard from "./ServiceCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 gradient-section" aria-labelledby="services-heading">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="services-heading"
          as="h2"
          title="Die wichtigsten Finanzthemen für Mediziner auf einen Blick"
          subtitle="Von der Absicherung der Arbeitskraft über die richtige Krankenversicherung bis zum strukturierten Vermögensaufbau – diese Themen sind für Human- und Zahnmediziner besonders relevant."
          className="mb-12"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
