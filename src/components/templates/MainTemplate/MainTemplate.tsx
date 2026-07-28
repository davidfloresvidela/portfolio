"use client";

import { MotionConfig } from "framer-motion";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import type { MainTemplateProps } from "./MainTemplate.types";

// ThemeProvider already wraps the app at the root layout, so it isn't
// repeated here — this template only owns the visual shell (skip link,
// header/footer, motion config).
export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="focus:border-accent focus:bg-base focus:text-accent sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:border focus:px-4 focus:py-2 focus:font-mono focus:text-sm"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </MotionConfig>
  );
}
