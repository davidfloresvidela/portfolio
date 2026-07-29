import type { Locale } from "@/i18n/routing";
import type { Project } from "@/types";

// Turtle Race's liveUrl/repoUrl are still placeholders — it was never
// deployed or open-sourced, so this stays marked instead of using a silent
// example domain until (if ever) that changes.
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
      liveUrl: "https://gentle-mushroom-04015650f.7.azurestaticapps.net",
      featured: true,
    },
    {
      title: "OptiAhorro",
      description:
        "Comparador de cuentas remuneradas chilenas: permite comparar tasas de interés, saldos mínimos y condiciones de los principales bancos de Chile sin necesidad de registrarse. Instalable como PWA.",
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Supabase",
        "TanStack Query",
        "Zustand",
        "Zod",
        "Tailwind CSS",
      ],
      liveUrl: "https://www.optiahorro.cl/",
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
      liveUrl: "https://gentle-mushroom-04015650f.7.azurestaticapps.net",
      featured: true,
    },
    {
      title: "OptiAhorro",
      description:
        "Comparison tool for Chilean high-yield savings accounts: lets anyone compare interest rates, minimum balances, and terms across Chile's main banks with no sign-up required. Installable as a PWA.",
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Supabase",
        "TanStack Query",
        "Zustand",
        "Zod",
        "Tailwind CSS",
      ],
      liveUrl: "https://www.optiahorro.cl/",
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
