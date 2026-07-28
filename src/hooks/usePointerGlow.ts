"use client";

import { useEffect, useRef } from "react";

/**
 * Drives a CSS pointer-following glow on desktop only. Writes the cursor
 * position into CSS custom properties so the effect stays off the main
 * React render path. Disabled for touch/coarse pointers.
 */
export function usePointerGlow<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const fine = window.matchMedia("(pointer: fine)");
    if (!fine.matches) return;

    const handleMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      element.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
      element.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
    };

    element.addEventListener("pointermove", handleMove);
    return () => element.removeEventListener("pointermove", handleMove);
  }, []);

  return ref;
}
