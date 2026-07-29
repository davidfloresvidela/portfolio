import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { usePointerGlow } from "./usePointerGlow";

function stubPointerFine(matches: boolean) {
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation((query: string) => ({
      matches: query === "(pointer: fine)" ? matches : false,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
}

function GlowTarget() {
  const ref = usePointerGlow<HTMLDivElement>();
  return (
    <div ref={ref} data-testid="glow-target">
      target
    </div>
  );
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("usePointerGlow", () => {
  it("writes --glow-x/--glow-y on pointermove for fine pointers", () => {
    stubPointerFine(true);
    render(<GlowTarget />);
    const target = screen.getByTestId("glow-target");

    target.dispatchEvent(
      new PointerEvent("pointermove", { clientX: 40, clientY: 20 }),
    );

    // jsdom's getBoundingClientRect is all zeros, so this just confirms the
    // properties get set (not the exact computed value).
    expect(target.style.getPropertyValue("--glow-x")).not.toBe("");
    expect(target.style.getPropertyValue("--glow-y")).not.toBe("");
  });

  it("does nothing for coarse (touch) pointers", () => {
    stubPointerFine(false);
    render(<GlowTarget />);
    const target = screen.getByTestId("glow-target");

    target.dispatchEvent(
      new PointerEvent("pointermove", { clientX: 40, clientY: 20 }),
    );

    expect(target.style.getPropertyValue("--glow-x")).toBe("");
    expect(target.style.getPropertyValue("--glow-y")).toBe("");
  });
});
