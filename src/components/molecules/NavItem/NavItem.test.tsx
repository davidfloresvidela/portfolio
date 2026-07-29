import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { NavItem } from "./NavItem";

const link = { label: "Sobre mí", href: "#about" };

describe("NavItem", () => {
  it("marks the active link with aria-current", () => {
    render(<NavItem link={link} active />);
    expect(screen.getByRole("link", { name: "Sobre mí" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("doesn't set aria-current when inactive", () => {
    render(<NavItem link={link} />);
    expect(screen.getByRole("link", { name: "Sobre mí" })).not.toHaveAttribute(
      "aria-current",
    );
  });

  it("calls onNavigate with the href when clicked", () => {
    const onNavigate = vi.fn();
    render(<NavItem link={link} onNavigate={onNavigate} />);
    fireEvent.click(screen.getByRole("link", { name: "Sobre mí" }));
    expect(onNavigate).toHaveBeenCalledWith("#about");
  });
});
