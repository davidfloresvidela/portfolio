import type { Locale } from "@/i18n/routing";
import type { SkillGroup } from "@/types";

export const skills: Record<Locale, SkillGroup[]> = {
  es: [
    {
      id: "frontend",
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "React Native",
        "Expo",
      ],
    },
    {
      id: "backend",
      category: "Backend",
      items: ["C#", ".NET", "PHP", "Entity Framework"],
    },
    {
      id: "database",
      category: "Bases de datos",
      items: ["SQL Server", "PostgreSQL", "MySQL"],
    },
    {
      id: "cloud",
      category: "Cloud & DevOps",
      items: [
        "Docker",
        "Azure App Service",
        "Azure Static Web Apps",
        "Azure Event Grid",
        "Azure Key Vault",
        "Azure OpenAI",
        "AWS S3",
        "Power Platform",
        "Clerk",
        "Supabase",
      ],
    },
  ],
  en: [
    {
      id: "frontend",
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "React Native",
        "Expo",
      ],
    },
    {
      id: "backend",
      category: "Backend",
      items: ["C#", ".NET", "PHP", "Entity Framework"],
    },
    {
      id: "database",
      category: "Databases",
      items: ["SQL Server", "PostgreSQL", "MySQL"],
    },
    {
      id: "cloud",
      category: "Cloud & DevOps",
      items: [
        "Docker",
        "Azure App Service",
        "Azure Static Web Apps",
        "Azure Event Grid",
        "Azure Key Vault",
        "Azure OpenAI",
        "AWS S3",
        "Power Platform",
        "Clerk",
        "Supabase",
      ],
    },
  ],
};
