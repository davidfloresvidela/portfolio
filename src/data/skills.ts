import type { Locale } from "@/i18n/routing";
import type { SkillGroup } from "@/types";

export const skills: Record<Locale, SkillGroup[]> = {
  es: [
    {
      id: "frontend",
      category: "Frontend",
      items: ["React", "TypeScript", "JavaScript"],
    },
    { id: "backend", category: "Backend", items: ["C#", ".NET"] },
    {
      id: "database",
      category: "Bases de datos",
      items: ["SQL Server", "PostgreSQL", "MySQL"],
    },
    {
      id: "cloud",
      category: "Cloud & DevOps",
      items: ["Azure", "AWS S3", "Docker", "Power Platform"],
    },
  ],
  en: [
    {
      id: "frontend",
      category: "Frontend",
      items: ["React", "TypeScript", "JavaScript"],
    },
    { id: "backend", category: "Backend", items: ["C#", ".NET"] },
    {
      id: "database",
      category: "Databases",
      items: ["SQL Server", "PostgreSQL", "MySQL"],
    },
    {
      id: "cloud",
      category: "Cloud & DevOps",
      items: ["Azure", "AWS S3", "Docker", "Power Platform"],
    },
  ],
};
