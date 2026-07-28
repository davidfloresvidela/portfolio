import { cn } from "@/lib/cn";
import type { BadgeProps, BadgeTone } from "./Badge.types";

const toneClasses: Record<BadgeTone, string> = {
  neutral: "border-subtle bg-elevated text-secondary",
  accent: "border-accent/30 bg-accent/5 text-accent",
  accent2: "border-accent-2/30 bg-accent-2/5 text-accent-2",
};

export function Badge({ tone = "neutral", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs tracking-tight transition-colors duration-200",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
