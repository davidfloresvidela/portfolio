import { describe, expect, it } from "vitest";
import {
  fadeIn,
  fadeInUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from "./motion";

describe("motion variants", () => {
  it("fadeInUp starts invisible and offset, ends visible at rest", () => {
    expect(fadeInUp.hidden).toMatchObject({ opacity: 0, y: 24 });
    expect(fadeInUp.visible).toMatchObject({ opacity: 1, y: 0 });
  });

  it("fadeIn only animates opacity", () => {
    expect(fadeIn.hidden).toMatchObject({ opacity: 0 });
    expect(fadeIn.visible).toMatchObject({ opacity: 1 });
  });

  it("scaleIn starts slightly shrunk and invisible", () => {
    expect(scaleIn.hidden).toMatchObject({ opacity: 0, scale: 0.96 });
    expect(scaleIn.visible).toMatchObject({ opacity: 1, scale: 1 });
  });

  it("staggerContainer orchestrates children with a delay", () => {
    const visible = staggerContainer.visible;
    if (typeof visible !== "object" || !("transition" in visible)) {
      throw new Error("expected staggerContainer.visible to have a transition");
    }
    expect(visible.transition).toMatchObject({
      staggerChildren: 0.08,
      delayChildren: 0.1,
    });
  });

  it("viewportOnce triggers once, after 20% is visible", () => {
    expect(viewportOnce).toEqual({ once: true, amount: 0.2 });
  });
});
