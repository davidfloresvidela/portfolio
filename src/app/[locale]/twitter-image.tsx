import { ogImageSize, renderOgImage } from "@/lib/ogImage";
import type { Locale } from "@/i18n/routing";

// Next requires `alt` to be a static string, not a function — can't vary it
// per locale here, so it stays name-only (identical in both languages). The
// actual generated PNG below IS localized via renderOgImage(locale).
export const alt = "David Flores";
export const size = ogImageSize;
export const contentType = "image/png";

export default async function TwitterImage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return renderOgImage(locale);
}
