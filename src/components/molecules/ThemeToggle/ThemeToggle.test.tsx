import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ThemeToggle } from "./ThemeToggle";

afterEach(() => {
  document.documentElement.classList.remove("light", "dark");
});

describe("ThemeToggle", () => {
  it("defaults to dark when no theme class is set on <html>", () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    );
    expect(
      screen.getByRole("button", { name: "Activar modo claro" }),
    ).toBeInTheDocument();
  });

  it("toggles the <html> class and its own label when clicked", () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Activar modo claro" }));

    expect(document.documentElement.classList.contains("light")).toBe(true);
    expect(
      screen.getByRole("button", { name: "Activar modo oscuro" }),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", { name: "Activar modo oscuro" }),
    );

    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });
});
