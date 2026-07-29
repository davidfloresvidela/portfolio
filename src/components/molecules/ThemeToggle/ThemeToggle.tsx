"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { Icon } from "@/components/atoms/Icon";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/cn";
import type { ThemeToggleProps } from "./ThemeToggle.types";

export function ThemeToggle({ className }: ThemeToggleProps) {
  const t = useTranslations("theme");
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t("activateLight") : t("activateDark")}
      title={isDark ? t("lightMode") : t("darkMode")}
      className={cn(
        "border-subtle text-secondary hover:border-accent/40 hover:text-accent relative flex size-11 items-center justify-center overflow-hidden rounded-lg border transition-colors duration-200",
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={{ y: 14, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <Icon icon={isDark ? Sun : Moon} size={18} />
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
