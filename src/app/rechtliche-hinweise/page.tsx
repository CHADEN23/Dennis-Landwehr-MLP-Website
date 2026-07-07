import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { legalTexts } from "@/content/legal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Rechtliche Hinweise",
  description: `Rechtliche Hinweise der persönlichen Beraterwebsite von ${siteConfig.name}.`,
  canonical: "/rechtliche-hinweise",
  noIndex: true,
});

export default function RechtlicheHinweisePage() {
  return (
    <>
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ name: "Rechtliche Hinweise", href: "/rechtliche-hinweise" }]} />
      </div>

      <section className="py-12 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-3xl font-bold text-navy mb-8">Rechtliche Hinweise</h1>

          {/* Platzhalter-Warnung */}
          <div
            className="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-8"
            role="alert"
            aria-live="polite"
          >
            <p className="text-sm font-semibold text-amber-800 mb-1">⚠️ Platzhalter</p>
            <p className="text-sm text-amber-700">{legalTexts.legalNotesPlaceholder}</p>
          </div>

          <div className="space-y-6 text-sm text-muted leading-relaxed">
            <div>
              <h2 className="text-base font-bold text-navy mb-2">Allgemeiner Hinweis</h2>
              <p>{legalTexts.disclaimer}</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">Persönliche Beraterwebsite</h2>
              <p>{legalTexts.personalSite}</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">Zulassung und Aufsicht</h2>
              <p>
                [Platzhalter: Angaben zu Zulassung, Registrierung und zuständiger Aufsichtsbehörde
                für Finanzberatungsleistungen – vor Veröffentlichung durch MLP-Compliance und
                Rechtsberatung prüfen lassen]
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">Interessenkonflikte</h2>
              <p>
                [Platzhalter: Angaben zu möglichen Interessenkonflikten und Vergütungsstrukturen –
                vor Veröffentlichung prüfen lassen]
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">Anlageberatung</h2>
              <p>
                [Platzhalter: Hinweise zu den erbrachten Dienstleistungen und deren rechtlicher
                Einordnung – vor Veröffentlichung durch Rechtsberatung prüfen lassen]
              </p>
            </div>

            <div className="border-t border-border pt-4">
              <p className="text-xs text-muted/70">
                Stand: Diese Seite ist ein Platzhalter und noch nicht rechtlich geprüft. Eine
                Nutzung der Website zur Veröffentlichung setzt die vollständige Freigabe aller
                Rechtstexte voraus. Bitte wenden Sie sich für Fragen an{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
