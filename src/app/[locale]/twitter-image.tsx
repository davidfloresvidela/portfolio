import { ogImageSize, renderOgImage } from "@/lib/ogImage";
import { routing, type Locale } from "@/i18n/routing";

// Next requires `alt` to be a static string, not a function — can't vary it
// per locale here, so it stays name-only (identical in both languages). The
// actual generated PNG below IS localized via renderOgImage(locale).
export const alt = "David Flores";
export const size = ogImageSize;
export const contentType = "image/png";
// Required for `output: "export"` — nothing here reads request data, so
// this is also just a more explicit way to say what was already true.
export const dynamic = "force-static";

// [locale]/layout.tsx already declares this for the page itself, but a
// route handler nested under a dynamic segment needs its own — "output:
// export" can't otherwise know which locales to pre-render this image for.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function TwitterImage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return renderOgImage(locale);
}
