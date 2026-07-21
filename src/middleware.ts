import { NextResponse } from "next/server";

/**
 * WARTUNGSMODUS – vorübergehende Deaktivierung der Website.
 *
 * Solange diese Datei existiert, beantwortet die Website ALLE Anfragen mit
 * einer Wartungsseite und dem Statuscode 503 (Service Unavailable).
 * 503 signalisiert Suchmaschinen ausdrücklich "nur vorübergehend nicht
 * erreichbar" und schützt so das Ranking während einer kurzen Auszeit.
 *
 * WIEDER AKTIVIEREN: einfach diese Datei (src/middleware.ts) löschen und
 * die Änderung nach GitHub pushen – Vercel deployt automatisch und die
 * Seite ist sofort wieder normal erreichbar.
 */

const maintenanceHtml = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex" />
<title>Kurz nicht erreichbar – Dennis Landwehr</title>
<style>
  :root {
    --navy: #0b2341;
    --primary: #1261a6;
    --muted: #5c6f82;
    --warm: #e8973a;
    --border: #d9e5ef;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { -webkit-text-size-adjust: 100%; }
  body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    line-height: 1.6;
    color: var(--navy);
    background: linear-gradient(135deg, #fdfaf6 0%, #eaf4fc 60%, #fef6ec 100%);
  }
  .card {
    width: 100%;
    max-width: 30rem;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 1rem;
    box-shadow: 0 8px 32px 0 rgba(18, 97, 166, 0.12);
    padding: 2.5rem 2rem;
    text-align: center;
  }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--primary);
    margin-bottom: 1.25rem;
  }
  .dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: var(--warm);
    display: inline-block;
  }
  h1 {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.25;
    margin-bottom: 0.75rem;
    text-wrap: balance;
  }
  p {
    color: var(--muted);
    font-size: 1rem;
    margin-bottom: 0.5rem;
    text-wrap: balance;
  }
  .contact {
    margin-top: 1.75rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
    font-size: 0.9rem;
  }
  .contact a {
    color: var(--primary);
    font-weight: 600;
    text-decoration: none;
  }
  .contact a:hover { text-decoration: underline; }
  .name { margin-top: 1.5rem; font-size: 0.8rem; color: var(--muted); }
</style>
</head>
<body>
  <main class="card">
    <span class="badge"><span class="dot"></span> Wartung</span>
    <h1>Wir sind gleich wieder für Sie da.</h1>
    <p>Die Website wird gerade kurz aktualisiert und ist in Kürze wieder erreichbar.</p>
    <p>Vielen Dank für Ihre Geduld.</p>
    <div class="contact">
      Sie erreichen mich weiterhin per E-Mail:<br />
      <a href="mailto:dennis.landwehr@mlp.de">dennis.landwehr@mlp.de</a>
    </div>
    <p class="name">Dennis Landwehr · Finanzberater bei MLP · Hannover</p>
  </main>
</body>
</html>`;

export function middleware() {
  return new NextResponse(maintenanceHtml, {
    status: 503,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
      "retry-after": "3600",
    },
  });
}

export const config = {
  // Alle Seitenaufrufe abfangen; Next.js-interne Assets bleiben unberührt.
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
