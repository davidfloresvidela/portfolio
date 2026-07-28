import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
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
];
