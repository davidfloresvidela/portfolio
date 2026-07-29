import type es from "../../messages/es.json";

// Gives useTranslations()/getTranslations() literal-key type-checking
// against the actual Spanish message tree (the two locale files are kept
// structurally identical, so this covers both).
declare module "next-intl" {
  interface AppConfig {
    Messages: typeof es;
  }
}
