import { careerPhases } from "@/config/services";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CareerTimeline() {
  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="timeline-heading">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="timeline-heading"
          as="h2"
          title="Finanzplanung, die mit deiner Karriere mitwächst"
          subtitle="Finanzielle Entscheidungen verändern sich mit jeder beruflichen Phase. Statt einzelner Lösungen steht deshalb eine langfristig anpassbare Gesamtstrategie im Mittelpunkt."
          className="mb-12"
        />

        {/* Timeline Desktop: horizontal */}
        <div className="hidden md:block relative">
          {/* Verbindungslinie */}
          <div
            className="absolute top-8 left-0 right-0 h-0.5 bg-border"
            aria-hidden="true"
          />
          <ol className="grid grid-cols-7 gap-2 relative" aria-label="Karrierephasen">
            {careerPhases.map((phase, index) => (
              <li key={phase.id} className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-white border-2 border-primary rounded-full flex items-center justify-center z-10 relative shadow-sm">
                    <span className="text-lg font-bold text-primary">{index + 1}</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-navy mb-1 text-balance">{phase.label}</p>
                <p className="text-xs text-muted text-balance">{phase.description}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Timeline Mobile: vertikal */}
        <ol className="md:hidden space-y-0" aria-label="Karrierephasen">
          {careerPhases.map((phase, index) => (
            <li key={phase.id} className="flex gap-4">
              {/* Linie + Punkt */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 bg-white border-2 border-primary rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                </div>
                {index < careerPhases.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border my-1 min-h-[1.5rem]" aria-hidden="true" />
                )}
              </div>
              {/* Inhalt */}
              <div className="pb-6">
                <p className="text-sm font-semibold text-navy">{phase.label}</p>
                <p className="text-xs text-muted mt-0.5">{phase.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
