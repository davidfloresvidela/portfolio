"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/motion";
import type { RevealProps } from "./Reveal.types";

const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  ul: motion.ul,
  li: motion.li,
  header: motion.header,
  footer: motion.footer,
  span: motion.span,
};

export function Reveal({
  as = "div",
  variants = fadeInUp,
  className,
  delay = 0,
  children,
}: RevealProps) {
  const MotionComponent = motionTags[as];

  return (
    <MotionComponent
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionComponent>
  );
}
