import type { Locale } from "@/i18n/routing";
import type { Project } from "@/types";

export const projects: Record<Locale, Project[]> = {
  es: [
    {
      title: "StellarisMind",
      description:
        "Plataforma para profesionales de salud mental y sus pacientes. La construí primero sobre .NET y Azure, y hoy la estoy migrando a Supabase y Cloudflare para reducir costos de infraestructura y mejorarla.",
      stack: [],
      featured: true,
      versions: [
        {
          label: "V1 · .NET + React Native",
          period: "feb. 2026 — abr. 2026",
          description:
            "Historial clínico, seguimiento por sesión, asignación de actividades y comunicación sincrónica entre paciente y psicólogo, con un módulo para pacientes con TDA que registra emociones asociadas a eventos específicos.",
          stack: [
            ".NET 10",
            "EF Core",
            "React Native",
            "Expo",
            "Azure",
            "Docker",
            "Cloudflare R2",
            "Clerk",
          ],
          liveUrl: "https://gentle-mushroom-04015650f.7.azurestaticapps.net",
        },
        {
          label: "V2 · Migración a Supabase + Cloudflare",
          period: "oct. 2026 — Actualidad",
          description:
            "PostgreSQL con RLS, Edge Functions y Next.js sobre Cloudflare Workers, en un monorepo con Clean Architecture. Módulo de reservas completo: pagos por transferencia con revisión de comprobantes, Google Calendar y Meet, y correos con cola de reintentos.",
          stack: [
            "Supabase",
            "PostgreSQL",
            "Next.js",
            "Cloudflare Workers",
            "TypeScript",
            "Turborepo",
            "Playwright",
          ],
          status: "En desarrollo",
        },
      ],
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
        "Cloudflare Pages",
      ],
      liveUrl: "https://www.optiahorro.cl/",
      featured: true,
    },
    {
      title: "Slangario",
      description:
        "App móvil de trivia para aprender slang en inglés: rondas con puntaje, rachas, energía, tienda, onboarding y perfil, con anuncios con recompensa y notificaciones push.",
      stack: [
        "React Native",
        "Expo",
        "TypeScript",
        "Supabase",
        "TanStack Query",
        "Zustand",
        "AdMob",
        "OneSignal",
      ],
      featured: false,
      status: "En validación",
    },
  ],
  en: [
    {
      title: "StellarisMind",
      description:
        "Platform for mental health professionals and their patients. I first built it on .NET and Azure, and I'm now migrating it to Supabase and Cloudflare to cut infrastructure costs and improve it.",
      stack: [],
      featured: true,
      versions: [
        {
          label: "V1 · .NET + React Native",
          period: "Feb 2026 — Apr 2026",
          description:
            "Clinical history, per-session tracking, activity assignment, and real-time patient-psychologist communication, with a module for ADHD patients that logs emotions tied to specific events.",
          stack: [
            ".NET 10",
            "EF Core",
            "React Native",
            "Expo",
            "Azure",
            "Docker",
            "Cloudflare R2",
            "Clerk",
          ],
          liveUrl: "https://gentle-mushroom-04015650f.7.azurestaticapps.net",
        },
        {
          label: "V2 · Migration to Supabase + Cloudflare",
          period: "Oct 2026 — Present",
          description:
            "PostgreSQL with RLS, Edge Functions, and Next.js on Cloudflare Workers, in a monorepo with Clean Architecture. Complete booking module: bank-transfer payments with receipt review, Google Calendar and Meet, and emails sent through a retry queue.",
          stack: [
            "Supabase",
            "PostgreSQL",
            "Next.js",
            "Cloudflare Workers",
            "TypeScript",
            "Turborepo",
            "Playwright",
          ],
          status: "In development",
        },
      ],
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
        "Cloudflare Pages",
      ],
      liveUrl: "https://www.optiahorro.cl/",
      featured: true,
    },
    {
      title: "Slangario",
      description:
        "Mobile trivia app for learning English slang: scored rounds, streaks, energy, a shop, onboarding, and a profile, with rewarded ads and push notifications.",
      stack: [
        "React Native",
        "Expo",
        "TypeScript",
        "Supabase",
        "TanStack Query",
        "Zustand",
        "AdMob",
        "OneSignal",
      ],
      featured: false,
      status: "In validation",
    },
  ],
};
