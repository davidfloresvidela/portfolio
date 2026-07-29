"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/cn";
import type { LanguageSwitcherProps } from "./LanguageSwitcher.types";

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const t = useTranslations("language");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      role="group"
      aria-label={t("label")}
      className={cn(
        "border-subtle inline-flex items-center rounded-lg border p-0.5 font-mono text-xs",
        className,
      )}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          aria-current={locale === loc ? "true" : undefined}
          aria-label={t(loc)}
          className={cn(
            "min-h-8 rounded-md px-2.5 py-1 uppercase transition-colors",
            locale === loc
              ? "bg-accent/10 text-accent"
              : "text-secondary hover:text-primary",
          )}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
