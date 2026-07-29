import type { Locale } from "@/i18n/routing";
import type { Stat } from "@/types";

export const stats: Record<Locale, Stat[]> = {
  es: [
    { label: "Años de experiencia", value: "6+" },
    { label: "Clientes enterprise", value: "Colbún · CMF · CAF" },
    { label: "Stack principal", value: "React / Next.js" },
  ],
  en: [
    { label: "Years of experience", value: "6+" },
    { label: "Enterprise clients", value: "Colbún · CMF · CAF" },
    { label: "Main stack", value: "React / Next.js" },
  ],
};
