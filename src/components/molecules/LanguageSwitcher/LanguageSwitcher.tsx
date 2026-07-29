"use client";

import { useLocale, useTranslations } from "next-intl";
import { getPathname, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/cn";
import type { LanguageSwitcherProps } from "./LanguageSwitcher.types";

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const t = useTranslations("language");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label={t("label")}
      className={cn(
        "border-subtle inline-flex items-center rounded-lg border p-0.5 font-mono text-xs",
        className,
      )}
    >
      {routing.locales.map((loc) => {
        const isActive = locale === loc;
        // getPathname resolves the real target URL respecting
        // localePrefix: "as-needed" (no "/es" prefix for the default
        // locale) — a plain <a>, not next-intl's <Link>, because passing
        // an explicit `locale` to <Link> always forces a prefix (it
        // rendered "/es" instead of "/", which only worked via an extra
        // redirect hop). A full navigation here is also more robust than a
        // client-side transition for a locale switch: no stale client
        // state to worry about.
        const href = getPathname({ href: pathname, locale: loc });

        return (
          <a
            key={loc}
            href={href}
            aria-current={isActive ? "true" : undefined}
            aria-label={t(loc)}
            className={cn(
              "min-h-8 rounded-md px-2.5 py-1 uppercase transition-colors",
              isActive
                ? "bg-accent/10 text-accent pointer-events-none"
                : "text-secondary hover:text-primary",
            )}
          >
            {loc}
          </a>
        );
      })}
    </div>
  );
}
