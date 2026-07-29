import Link from "next/link";
import { getButtonClasses } from "@/components/atoms/Button";

// Only reachable for a path outside any [locale] segment (e.g. a stray or
// mistyped URL with no locale prefix at all) — [locale]/not-found.tsx
// handles unmatched paths within a known locale and gets the full
// translated treatment. This one can't use next-intl (its
// NextIntlClientProvider lives inside [locale]/layout.tsx, which this
// route never reaches), so it stays a plain, static, Spanish-only fallback
// — the same default the rest of the site falls back to at "/".
export default function GlobalNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="text-accent font-mono text-sm">404</p>
      <h1 className="font-display text-3xl font-semibold">
        Página no encontrada
      </h1>
      <p className="text-secondary max-w-md">
        La página que buscas no existe o fue movida.
      </p>
      <Link href="/" className={getButtonClasses()}>
        Volver al inicio
      </Link>
    </main>
  );
}
