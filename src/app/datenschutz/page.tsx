import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { legalTexts } from "@/content/legal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung der persönlichen Beraterwebsite von ${siteConfig.name}.`,
  canonical: "/datenschutz",
  noIndex: true,
});

export default function DatenschutzPage() {
  return (
    <>
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ name: "Datenschutz", href: "/datenschutz" }]} />
      </div>

      <section className="py-12 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-3xl font-bold text-navy mb-8">Datenschutzerklärung</h1>

          {/* Platzhalter-Warnung */}
          <div
            className="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-8"
            role="alert"
            aria-live="polite"
          >
            <p className="text-sm font-semibold text-amber-800 mb-1">⚠️ Platzhalter</p>
            <p className="text-sm text-amber-700">{legalTexts.privacyPlaceholder}</p>
          </div>

          <div className="space-y-6 text-sm text-muted leading-relaxed">
            <div>
              <h2 className="text-base font-bold text-navy mb-2">Verantwortliche Stelle</h2>
              <address className="not-italic">
                {siteConfig.name}
                <br />
                {siteConfig.address.street}
                <br />
                {siteConfig.address.zip} {siteConfig.address.city}
                <br />
                E-Mail:{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                  {siteConfig.email}
                </a>
              </address>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">Erhobene Daten</h2>
              <p>
                Diese Website verwendet keine Tracking-Technologien und setzt standardmäßig keine
                Cookies außer technisch notwendigen ein. Es werden keine personenbezogenen Daten
                erhoben, außer jenen, die Sie selbst übermitteln (z. B. beim Klick auf
                Kontakt-Links).
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">Externe Links</h2>
              <p>
                Diese Website enthält Links zu externen Diensten, insbesondere zum
                Terminbuchungssystem der MLP und zum MLP-Beraterprofil. Beim Aufruf dieser Links
                gelten die Datenschutzbestimmungen der jeweiligen Anbieter.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">Hosting</h2>
              <p>[Platzhalter: Angaben zum Hosting-Anbieter – vor Veröffentlichung eintragen]</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
                Verarbeitung Ihrer Daten sowie das Recht auf Datenübertragbarkeit und Widerspruch.
                Wenden Sie sich dazu bitte an die oben genannte Kontaktadresse.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">Beschwerderecht</h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
                [Platzhalter: Zuständige Aufsichtsbehörde eintragen]
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
