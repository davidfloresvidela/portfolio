"use client";

import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Icon } from "@/components/atoms/Icon";
import { NavItem } from "@/components/molecules/NavItem";
import { ThemeToggle } from "@/components/molecules/ThemeToggle";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { navLinks } from "@/data/navigation";
import { about } from "@/data/about";
import { cn } from "@/lib/cn";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

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
        aria-label="Navegación principal"
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

          <ThemeToggle />

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
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
          menuOpen ? "max-h-80" : "max-h-0",
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
      </div>
    </header>
  );
}
