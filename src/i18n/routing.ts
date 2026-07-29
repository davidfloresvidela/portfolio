import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  // Spanish (the default) lives at "/" with no prefix; English is "/en".
  // Browsers that explicitly ask for English get redirected there on first
  // visit (localeDetection, on by default) — anything else falls back to
  // the default instead of guessing.
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
