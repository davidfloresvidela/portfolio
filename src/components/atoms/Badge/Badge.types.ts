import type { ReactNode } from "react";

export type BadgeTone = "neutral" | "accent" | "accent2";

export interface BadgeProps {
  tone?: BadgeTone;
  className?: string;
  children: ReactNode;
}
