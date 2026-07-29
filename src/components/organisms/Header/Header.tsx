"use client";

import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Icon } from "@/components/atoms/Icon";
import { LanguageSwitcher } from "@/components/molecules/LanguageSwitcher";
import { NavItem } from "@/components/molecules/NavItem";
import { ThemeToggle } from "@/components/molecules/ThemeToggle";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { about } from "@/data/about";
import { cn } from "@/lib/cn";
import type { NavLink } from "@/types";

const NAV_IDS = [
  "hero",
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
] as const;

export function Header() {
  const t = useTranslations("nav");
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy([...NAV_IDS]);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const navLinks: NavLink[] = NAV_IDS.map((id) => ({
    href: `#${id}`,
    label: t(id),
  }));

  const initials = about.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header className="border-subtle bg-base/70 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="bg-accent absolute bottom-0 left-0 h-px w-full origin-left"
      />
      <nav
        aria-label={t("srLabel")}
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#hero"
          className="font-display text-primary text-lg font-bold tracking-tight"
        >
          <span className="text-accent">{initials}</span>
          <span className="text-muted">.dev</span>
        </a>

        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavItem
                  link={link}
                  active={activeId === link.href.replace("#", "")}
                />
              </li>
            ))}
          </ul>

          <LanguageSwitcher className="hidden sm:inline-flex" />
          <ThemeToggle />

          <button
            type="button"
            aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="border-subtle text-primary flex size-11 items-center justify-center rounded-lg border md:hidden"
          >
            <Icon icon={menuOpen ? X : Menu} size={20} />
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "border-subtle overflow-hidden border-t transition-[max-height] duration-300 md:hidden",
          menuOpen ? "max-h-96" : "max-h-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavItem
                link={link}
                active={activeId === link.href.replace("#", "")}
                onNavigate={() => setMenuOpen(false)}
              />
            </li>
          ))}
        </ul>
        <div className="flex justify-center px-4 pb-3 sm:hidden">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
