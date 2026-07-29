import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useScrollSpy } from "./useScrollSpy";

function mockRect(id: string, top: number, bottom: number) {
  const element = document.getElementById(id);
  if (!element) throw new Error(`missing #${id} in test DOM`);
  element.getBoundingClientRect = () =>
    ({
      top,
      bottom,
      height: bottom - top,
      left: 0,
      right: 0,
      width: 0,
      x: 0,
      y: top,
      toJSON() {},
    }) as DOMRect;
}

beforeEach(() => {
  document.body.innerHTML = `
    <div id="hero"></div>
    <div id="about"></div>
    <div id="contact"></div>
  `;
  Object.defineProperty(window, "innerHeight", {
    value: 800,
    writable: true,
    configurable: true,
  });
  // Runs synchronously in tests instead of waiting a real animation frame.
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
    callback(0);
    return 0;
  });
});

afterEach(() => {
  vi.unstubAllGlobals();
  document.body.innerHTML = "";
});

describe("useScrollSpy", () => {
  it("resolves the active section from the initial layout on mount, no scroll needed", () => {
    // reference line = innerHeight * 0.4 = 320
    mockRect("hero", -400, 200);
    mockRect("about", 200, 1000);
    mockRect("contact", 1000, 1800);

    const { result } = renderHook(() =>
      useScrollSpy(["hero", "about", "contact"]),
    );

    expect(result.current).toBe("about");
  });

  it("switches section as the user scrolls", () => {
    mockRect("hero", -400, 200);
    mockRect("about", 200, 1000);
    mockRect("contact", 1000, 1800);

    const { result } = renderHook(() =>
      useScrollSpy(["hero", "about", "contact"]),
    );
    expect(result.current).toBe("about");

    // Scroll down until "contact" now spans the reference line.
    mockRect("hero", -1200, -600);
    mockRect("about", -600, 200);
    mockRect("contact", 200, 1000);

    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe("contact");
  });

  it("falls back to the nearest section when the reference line falls in a gap", () => {
    // Neither section's bounds contain the reference line (320) — "hero"
    // ends at 300, "about" starts at 340. This is exactly the dead zone the
    // old IntersectionObserver version could get stuck in.
    mockRect("hero", -500, 300);
    mockRect("about", 340, 900);
    mockRect("contact", 900, 1400);

    const { result } = renderHook(() =>
      useScrollSpy(["hero", "about", "contact"]),
    );

    // "hero" ends 20px above the line, "about" starts 20px below it — a
    // genuine tie goes to whichever is found first (hero).
    expect(result.current).toBe("hero");
  });

  it("cleans up its scroll/resize listeners on unmount", () => {
    mockRect("hero", 0, 800);
    mockRect("about", 800, 1600);
    mockRect("contact", 1600, 2400);

    const removeSpy = vi.spyOn(window, "removeEventListener");
    const { unmount } = renderHook(() =>
      useScrollSpy(["hero", "about", "contact"]),
    );

    unmount();

    expect(removeSpy).toHaveBeenCalledWith("scroll", expect.any(Function));
    expect(removeSpy).toHaveBeenCalledWith("resize", expect.any(Function));
  });
});
