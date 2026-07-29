import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

// Required for `output: "export"` — nothing here reads request data, so
// this is also just a more explicit way to say what was already true.
export const dynamic = "force-static";

// The home page exists once per locale ("/" for the default locale, "/en"
// for the rest) — this lists every localized URL and points each one at
// the others via `alternates.languages`, so Google understands they're
// translations of the same page rather than duplicate content.
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      locale === routing.defaultLocale ? SITE_URL : `${SITE_URL}/${locale}`,
    ]),
  );

  return routing.locales.map((locale) => ({
    url: languages[locale],
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === routing.defaultLocale ? 1 : 0.9,
    alternates: { languages },
  }));
}
