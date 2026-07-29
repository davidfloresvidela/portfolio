import type { Locale } from "@/i18n/routing";
import type { Project } from "@/types";

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
  ],
};
