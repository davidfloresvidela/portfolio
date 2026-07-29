import type es from "../../messages/es.json";
import type { Locale } from "./routing";

// Gives useTranslations()/getTranslations() literal-key type-checking
// against the actual Spanish message tree (the two locale files are kept
// structurally identical, so this covers both), and makes
// useLocale()/getLocale() return our Locale union instead of plain
// string — needed to index locale-keyed data like `about[locale]`.
declare module "next-intl" {
  interface AppConfig {
    Locale: Locale;
    Messages: typeof es;
  }
}
