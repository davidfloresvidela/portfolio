"use client";

import { MotionConfig } from "framer-motion";
import { useTranslations } from "next-intl";
import type { MainTemplateProps } from "./MainTemplate.types";

// ThemeProvider already wraps the app at the root layout, so it isn't
// repeated here — this template only owns the visual shell (skip link,
// header/footer, motion config). Header/Footer come in as props rather
// than being imported and rendered directly: Footer is a Server Component
// that calls next-intl's server-only getTranslations, and a "use client"
// file can't import a server-only component and instantiate it itself —
// only a Server Component parent can. Header is passed the same way for
// symmetry.
export function MainTemplate({ header, footer, children }: MainTemplateProps) {
  const t = useTranslations("layout");

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="focus:border-accent focus:bg-base focus:text-accent sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:border focus:px-4 focus:py-2 focus:font-mono focus:text-sm"
      >
        {t("skipToContent")}
      </a>
      {header}
      <main id="main">{children}</main>
      {footer}
    </MotionConfig>
  );
}
