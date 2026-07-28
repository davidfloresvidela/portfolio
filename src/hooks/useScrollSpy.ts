"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view to highlight the active nav item.
 * Accepts the list of section ids (without the leading `#`).
 */
export function useScrollSpy(sectionIds: string[], offset = 0.4): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: `0px 0px -${Math.round(offset * 100)}% 0px`,
        threshold: 0.1,
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
