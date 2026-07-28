import type { LucideIcon } from "lucide-react";

export interface IconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  /** Decorative icons are hidden from assistive tech. Provide a label otherwise. */
  label?: string;
}
