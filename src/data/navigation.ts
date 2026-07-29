import type { Stat } from "@/types";

// TODO(i18n content): stat labels are still Spanish-only here; the values
// (proper nouns / numbers) don't need translation but the labels do —
// bundled into the follow-up content-translation branch along with the
// rest of src/data.
export const stats: Stat[] = [
  { label: "Años de experiencia", value: "6+" },
  { label: "Clientes enterprise", value: "Colbún · CMF · CAF" },
  { label: "Stack principal", value: "React / Next.js" },
];
