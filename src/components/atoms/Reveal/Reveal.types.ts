import type { ReactNode } from "react";
import type { Variants } from "framer-motion";

export type RevealTag =
  "div" | "section" | "article" | "ul" | "li" | "header" | "footer" | "span";

export interface RevealProps {
  as?: RevealTag;
  variants?: Variants;
  className?: string;
  /** Delay in seconds before the reveal animation starts. */
  delay?: number;
  children: ReactNode;
}
