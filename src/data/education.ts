import type { Locale } from "@/i18n/routing";
import type { EducationGroup } from "@/types";

export const education: Record<Locale, EducationGroup[]> = {
  es: [
    {
      id: "education",
      category: "Educación",
      entries: [
        {
          title: "Ingeniería en Informática",
          detail: "INACAP",
          period: "2017 — 2021",
        },
      ],
    },
    {
      id: "certifications",
      category: "Certificaciones",
      entries: [
        {
          title: "Scrum Product Owner",
          detail: "Diacos Asesores",
          period: "2022",
        },
      ],
    },
    {
      id: "languages",
      category: "Idiomas",
      entries: [
        { title: "Español", detail: "Nativo" },
        {
          title: "Inglés",
          detail:
            "Intermedio (B1): lectura y escritura técnica; conversación en desarrollo",
        },
        {
          title: "British Council English Online",
          detail: "Nivel B1, en curso",
          period: "sep. 2026 — Actualidad",
        },
        {
          title: "English Forever",
          detail: "Inglés general",
          period: "2024 — 2025",
        },
      ],
    },
  ],
  en: [
    {
      id: "education",
      category: "Education",
      entries: [
        {
          title: "Computer Engineering",
          detail: "INACAP",
          period: "2017 — 2021",
        },
      ],
    },
    {
      id: "certifications",
      category: "Certifications",
      entries: [
        {
          title: "Scrum Product Owner",
          detail: "Diacos Asesores",
          period: "2022",
        },
      ],
    },
    {
      id: "languages",
      category: "Languages",
      entries: [
        { title: "Spanish", detail: "Native" },
        {
          title: "English",
          detail:
            "Intermediate (B1): technical reading and writing; spoken fluency still developing",
        },
        {
          title: "British Council English Online",
          detail: "B1 level, in progress",
          period: "Sep 2026 — Present",
        },
        {
          title: "English Forever",
          detail: "General English",
          period: "2024 — 2025",
        },
      ],
    },
  ],
};
