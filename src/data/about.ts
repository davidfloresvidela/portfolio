import type { Locale } from "@/i18n/routing";
import type { About } from "@/types";

export const about: Record<Locale, About> = {
  es: {
    name: "David Flores",
    role: "Ingeniero de Software",
    location: "Antofagasta, Chile",
    tagline:
      "Backend .NET, React y Azure para sistemas enterprise y migración de plataformas legacy.",
    bio: `Ingeniero de software con 6 años de experiencia construyendo soluciones web escalables para clientes enterprise. Me especializo en backend C# .NET (Clean Architecture, microservicios) y frontend React + TypeScript, con despliegue en Azure y Docker. He liderado migraciones de sistemas legacy, definido estándares técnicos de equipo y gestionado comunicación directa con clientes en proyectos críticos.`,
    yearsOfExperience: 6,
    available: true,
  },
  en: {
    name: "David Flores",
    role: "Software Engineer",
    location: "Antofagasta, Chile",
    tagline:
      ".NET backends, React, and Azure for enterprise systems and legacy platform migrations.",
    bio: `Software engineer with 6 years of experience building scalable web solutions for enterprise clients. I specialize in C# .NET backends (Clean Architecture, microservices) and React + TypeScript frontends, deployed on Azure and Docker. I've led legacy system migrations, defined technical standards for my team, and managed direct client communication on critical projects.`,
    yearsOfExperience: 6,
    available: true,
  },
};
