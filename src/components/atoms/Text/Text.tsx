import { cn } from "@/lib/cn";
import type { TextProps, TextTone, TextVariant } from "./Text.types";

const variantClasses: Record<TextVariant, string> = {
  display:
    "font-display font-bold tracking-tight text-[clamp(2.5rem,8vw,4rem)] leading-[1.05]",
  h1: "font-display font-bold tracking-tight text-[clamp(2rem,5vw,2.5rem)] leading-tight",
  h2: "font-display font-semibold tracking-tight text-[clamp(1.5rem,4vw,1.75rem)] leading-tight",
  h3: "font-display font-semibold text-xl leading-snug",
  body: "font-sans text-base leading-relaxed",
  small: "font-sans text-sm leading-relaxed",
  mono: "font-mono text-sm tracking-tight",
  eyebrow: "font-mono text-xs uppercase tracking-[0.2em]",
};

const toneClasses: Record<TextTone, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  muted: "text-muted",
  accent: "text-accent",
};

const defaultElement: Record<TextVariant, ElementTag> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  small: "p",
  mono: "span",
  eyebrow: "span",
};

type ElementTag = "h1" | "h2" | "h3" | "p" | "span";

export function Text({
  as,
  variant = "body",
  tone = "primary",
  className,
  children,
}: TextProps) {
  const Component = as ?? defaultElement[variant];

  return (
    <Component
      className={cn(variantClasses[variant], toneClasses[tone], className)}
    >
      {children}
    </Component>
  );
}
