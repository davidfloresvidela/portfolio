import type { Locale } from "@/i18n/routing";
import type { ExperienceItem } from "@/types";

export const experience: Record<Locale, ExperienceItem[]> = {
  es: [
    {
      company: "IMAGEN S.A.",
      role: "Desarrollador Full Stack Senior",
      period: "nov. 2021 — Actualidad",
      description:
        "Desarrollo full stack de sistemas web enterprise para clientes como Colbún, CMF y CAF, con React + TypeScript y C# .NET. Arquitectura backend con Clean Architecture, microservicios, caching, rate limiting y políticas de reintento (Polly). Lideré la migración de un sistema legacy de permisos de trabajo (SharePoint + WebParts) a una arquitectura moderna con React + Vite, microservicios en .NET 10 LTS y SQL Server normalizado. Referente técnico del equipo: definición de estándares, mentoría y comunicación directa con clientes.",
      stack: [
        "C#",
        ".NET",
        "React",
        "TypeScript",
        "SQL Server",
        "Azure",
        "Docker",
        "Power Platform",
      ],
    },
    {
      company: "Proyecto PAO",
      role: "Desarrollador Full Stack (Freelance)",
      period: "feb. 2024",
      description:
        "Desarrollo de nueva funcionalidad para un sistema LMS (Claroline) en producción.",
      stack: ["PHP", "JavaScript"],
    },
    {
      company: "Centro de Investigación en TI y Aprendizaje",
      role: "Ingeniero de Software",
      period: "jul. 2020 — mar. 2021",
      description:
        "Desarrollo y mantenimiento de aplicaciones sobre la plataforma Claroline (LMS), usando PHP y JavaScript vanilla.",
      stack: ["PHP", "JavaScript", "MySQL"],
    },
    {
      company: "Proyecto SWITCH_OM",
      role: "Desarrollador Full Stack",
      period: "ago. 2019 — jun. 2020",
      description:
        "Desarrollo de una mesa digital LAMP con 10 aplicaciones para gestión de mantenimientos, integrando JavaScript, PHP y C#, más una app de consola en C# que sincronizaba datos desde MS Access hacia MySQL.",
      stack: ["PHP", "JavaScript", "C#", "MS Access", "MySQL"],
    },
  ],
  en: [
    {
      company: "IMAGEN S.A.",
      role: "Senior Full Stack Developer",
      period: "Nov 2021 — Present",
      description:
        "Full-stack development of enterprise web systems for clients such as Colbún, CMF, and CAF, using React + TypeScript and C# .NET. Backend architecture with Clean Architecture, microservices, caching, rate limiting, and retry policies (Polly). Led the migration of a legacy work-permit system (SharePoint + WebParts) to a modern architecture with React + Vite, microservices on .NET 10 LTS, and a normalized SQL Server database. Technical point of contact for the team: defining standards, mentoring, and direct client communication.",
      stack: [
        "C#",
        ".NET",
        "React",
        "TypeScript",
        "SQL Server",
        "Azure",
        "Docker",
        "Power Platform",
      ],
    },
    {
      company: "Proyecto PAO",
      role: "Full Stack Developer (Freelance)",
      period: "Feb 2024",
      description: "Built new functionality for a production LMS (Claroline).",
      stack: ["PHP", "JavaScript"],
    },
    {
      company: "Centro de Investigación en TI y Aprendizaje",
      role: "Software Engineer",
      period: "Jul 2020 — Mar 2021",
      description:
        "Developed and maintained applications on the Claroline LMS platform, using PHP and vanilla JavaScript.",
      stack: ["PHP", "JavaScript", "MySQL"],
    },
    {
      company: "Proyecto SWITCH_OM",
      role: "Full Stack Developer",
      period: "Aug 2019 — Jun 2020",
      description:
        "Built a LAMP-based digital table with 10 applications for maintenance management, integrating JavaScript, PHP, and C#, plus a C# console app that synced data from MS Access to MySQL.",
      stack: ["PHP", "JavaScript", "C#", "MS Access", "MySQL"],
    },
  ],
};
