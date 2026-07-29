import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useScrollSpy } from "./useScrollSpy";

type ObserverCallback = (entries: Partial<IntersectionObserverEntry>[]) => void;

let capturedCallback: ObserverCallback | null = null;

class MockIntersectionObserver {
  constructor(callback: ObserverCallback) {
    capturedCallback = callback;
  }
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

beforeEach(() => {
  capturedCallback = null;
  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

  document.body.innerHTML = `
    <div id="hero"></div>
    <div id="about"></div>
  `;
});

afterEach(() => {
  vi.unstubAllGlobals();
  document.body.innerHTML = "";
});

describe("useScrollSpy", () => {
  it("defaults to the first section id before anything intersects", () => {
    const { result } = renderHook(() => useScrollSpy(["hero", "about"]));
    expect(result.current).toBe("hero");
  });

  it("switches to the section with the highest intersection ratio", () => {
    const { result } = renderHook(() => useScrollSpy(["hero", "about"]));

    act(() => {
      capturedCallback?.([
        {
          isIntersecting: true,
          intersectionRatio: 0.3,
          target: document.getElementById("hero")!,
        },
        {
          isIntersecting: true,
          intersectionRatio: 0.8,
          target: document.getElementById("about")!,
        },
      ]);
    });

    expect(result.current).toBe("about");
  });

  it("ignores entries that aren't intersecting", () => {
    const { result } = renderHook(() => useScrollSpy(["hero", "about"]));

    act(() => {
      capturedCallback?.([
        {
          isIntersecting: false,
          intersectionRatio: 0,
          target: document.getElementById("hero")!,
        },
      ]);
    });

    expect(result.current).toBe("hero");
  });
});
