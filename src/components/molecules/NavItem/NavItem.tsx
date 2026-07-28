"use client";

import { cn } from "@/lib/cn";
import type { NavItemProps } from "./NavItem.types";

export function NavItem({ link, active = false, onNavigate }: NavItemProps) {
  return (
    <a
      href={link.href}
      aria-current={active ? "page" : undefined}
      onClick={() => onNavigate?.(link.href)}
      className={cn(
        "group hover:text-accent relative inline-flex min-h-11 items-center px-1 font-mono text-sm transition-colors duration-200",
        active ? "text-accent" : "text-secondary",
      )}
    >
      {link.label}
      <span
        className={cn(
          "bg-accent absolute -bottom-0.5 left-0 h-px transition-all duration-300",
          active ? "w-full shadow-[var(--glow)]" : "w-0 group-hover:w-full",
        )}
      />
    </a>
  );
}
