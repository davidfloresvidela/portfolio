import type { ElementType, ReactNode } from "react";

export type TextVariant =
  "display" | "h1" | "h2" | "h3" | "body" | "small" | "mono" | "eyebrow";

export type TextTone = "primary" | "secondary" | "muted" | "accent";

export interface TextProps {
  as?: ElementType;
  variant?: TextVariant;
  tone?: TextTone;
  className?: string;
  children: ReactNode;
}
