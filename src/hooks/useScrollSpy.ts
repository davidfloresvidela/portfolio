"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view to highlight the active nav item.
 * Accepts the list of section ids (without the leading `#`).
 *
 * Picks whichever section's bounds contain a horizontal reference line at
 * `offset` (fraction of viewport height from the top), falling back to the
 * section with the nearest edge when the line falls in a gap between
 * sections. This always resolves to exactly one section — an earlier
 * IntersectionObserver-based version could end up with nothing intersecting
 * at once (e.g. scrolling past a short section, or the last section not
 * filling the viewport), leaving the previous nav item stuck highlighted or
 * nothing highlighted at all.
 */
export function useScrollSpy(sectionIds: string[], offset = 0.4): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    let ticking = false;

    function updateActiveSection() {
      ticking = false;
      const referenceLine = window.innerHeight * offset;

      let closestId = sectionIds[0] ?? "";
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const { top, bottom } = element.getBoundingClientRect();
        if (top <= referenceLine && bottom >= referenceLine) {
          closestId = id;
          closestDistance = 0;
          break;
        }

        const distance = Math.min(
          Math.abs(top - referenceLine),
          Math.abs(bottom - referenceLine),
        );
        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = id;
        }
      }

      setActiveId(closestId);
    }

    function handleScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}
