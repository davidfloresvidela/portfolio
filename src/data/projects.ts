import type { Locale } from "@/i18n/routing";
import type { Project } from "@/types";

// TODO: reemplazar liveUrl/repoUrl por las URLs reales una vez estén
// publicadas — se dejan marcadas a propósito en vez de usar un dominio de
// ejemplo silencioso. Pendiente todavía tras el pase de content/real-data:
// las URLs reales no estaban disponibles al momento de ese commit.
export const projects: Record<Locale, Project[]> = {
  es: [
    {
      title: "StellarisMind",
      description:
        "Plataforma full stack para profesionales de salud mental: historial clínico, seguimiento por sesión, asignación de actividades y comunicación sincrónica entre paciente y psicólogo. Incluye un módulo especializado para pacientes con TDA que registra emociones asociadas a eventos específicos.",
      stack: [
        "React Native",
        "Expo",
        ".NET 10",
        "Azure",
        "Docker",
        "Cloudflare R2",
        "Clerk",
        "EF Core",
      ],
      liveUrl: "https://TODO-set-live-url.example",
      repoUrl: "https://github.com/davidfloresvidela/TODO-set-repo",
      featured: true,
    },
    {
      title: "Carrera de Tortugas",
      description:
        "Simulación de carreras por línea de comandos con interfaz gráfica en Tkinter. Configuración dinámica de participantes y sistema de apuestas.",
      stack: ["Python", "Tkinter"],
      liveUrl: "https://TODO-set-live-url.example",
      repoUrl: "https://github.com/davidfloresvidela/TODO-set-repo",
      featured: false,
    },
  ],
  en: [
    {
      title: "StellarisMind",
      description:
        "Full-stack platform for mental health professionals: clinical history, per-session tracking, activity assignment, and real-time patient-psychologist communication. Includes a specialized module for ADHD patients that logs emotions tied to specific events.",
      stack: [
        "React Native",
        "Expo",
        ".NET 10",
        "Azure",
        "Docker",
        "Cloudflare R2",
        "Clerk",
        "EF Core",
      ],
      liveUrl: "https://TODO-set-live-url.example",
      repoUrl: "https://github.com/davidfloresvidela/TODO-set-repo",
      featured: true,
    },
    {
      title: "Turtle Race",
      description:
        "Command-line race simulation with a Tkinter GUI. Dynamic participant setup and a betting system.",
      stack: ["Python", "Tkinter"],
      liveUrl: "https://TODO-set-live-url.example",
      repoUrl: "https://github.com/davidfloresvidela/TODO-set-repo",
      featured: false,
    },
  ],
};
