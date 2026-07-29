import type { Locale } from "@/i18n/routing";
import type { About } from "@/types";

export const about: Record<Locale, About> = {
  es: {
    name: "David Flores",
    role: "Desarrollador Full Stack Senior",
    location: "Antofagasta, Chile",
    tagline: "Construyo interfaces rápidas, accesibles y con carácter.",
    bio: `Full Stack Developer con 6 años de experiencia construyendo soluciones web escalables para clientes enterprise. Me especializo en backend C# .NET (Clean Architecture, microservicios) y frontend React + TypeScript, con despliegue en Azure y Docker. He liderado migraciones de sistemas legacy, definido estándares técnicos de equipo y gestionado comunicación directa con clientes en proyectos críticos. Me obsesiona el detalle: el rendimiento, la accesibilidad y esa micro-interacción que hace que una interfaz se sienta bien.`,
    yearsOfExperience: 6,
    available: true,
  },
  en: {
    name: "David Flores",
    role: "Senior Full Stack Developer",
    location: "Antofagasta, Chile",
    tagline:
      "I build interfaces that are fast, accessible, and full of character.",
    bio: `Full Stack Developer with 6 years of experience building scalable web solutions for enterprise clients. I specialize in C# .NET backends (Clean Architecture, microservices) and React + TypeScript frontends, deployed on Azure and Docker. I've led legacy system migrations, defined technical standards for my team, and managed direct client communication on critical projects. I obsess over the details: performance, accessibility, and the micro-interaction that makes an interface feel right.`,
    yearsOfExperience: 6,
    available: true,
  },
};
