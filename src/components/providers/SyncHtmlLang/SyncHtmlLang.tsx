"use client";

import { useEffect } from "react";
import type { SyncHtmlLangProps } from "./SyncHtmlLang.types";

// The root layout can't know the real locale without a request-time lookup
// that "output: export" forbids (see src/app/layout.tsx), so it always
// renders <html lang> with the default locale. This corrects it for actual
// /en pages once [locale]/layout.tsx knows the real value — a client-only
// patch, but `lang` has no visual effect, so there's nothing to flash.
export function SyncHtmlLang({ locale }: SyncHtmlLangProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
