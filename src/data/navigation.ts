import type { Locale } from "@/i18n/routing";
import type { Stat } from "@/types";

export const stats: Record<Locale, Stat[]> = {
  es: [
    { label: "Años de experiencia", value: "6+" },
    { label: "Stack principal", value: "React / .NET" },
  ],
  en: [
    { label: "Years of experience", value: "6+" },
    { label: "Main stack", value: "React / .NET" },
  ],
};
