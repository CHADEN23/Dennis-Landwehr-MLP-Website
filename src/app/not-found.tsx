import Link from "next/link";
import BookingLink from "@/components/ui/BookingLink";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="max-w-lg text-center px-4">
        <p className="text-8xl font-bold text-border mb-4" aria-hidden="true">
          404
        </p>
        <h1 className="text-2xl font-bold text-navy mb-4">Seite nicht gefunden</h1>
        <p className="text-muted leading-relaxed mb-8">
          Die gesuchte Seite existiert leider nicht. Möglicherweise wurde sie verschoben oder die
          URL enthält einen Tippfehler.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary bg-white border border-primary rounded-lg hover:bg-secondary transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus min-h-[44px]"
          >
            Zur Startseite
          </Link>
          <BookingLink source="hero">Termin vereinbaren</BookingLink>
        </div>
      </div>
    </div>
  );
}
