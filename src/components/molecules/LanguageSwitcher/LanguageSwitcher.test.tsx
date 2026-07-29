import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderWithIntl } from "@/test/renderWithIntl";
import { LanguageSwitcher } from "./LanguageSwitcher";

// next/navigation's usePathname reads from a router context that only
// exists inside a real Next.js app — outside of it (as in this test) it
// returns null, which next-intl then can't build an href from.
vi.mock("next/navigation", async (importOriginal) => ({
  ...(await importOriginal<typeof import("next/navigation")>()),
  usePathname: () => "/",
}));

describe("LanguageSwitcher", () => {
  it("marks the current locale active and points the other at the right URL", () => {
    renderWithIntl(<LanguageSwitcher />);

    const es = screen.getByRole("link", { name: "Español" });
    const en = screen.getByRole("link", { name: "English" });

    expect(es).toHaveAttribute("aria-current", "true");
    expect(en).not.toHaveAttribute("aria-current");

    // Regression guard: an earlier version built this href by hand and
    // could end up pointing the default locale (Spanish, no URL prefix)
    // at "/es" — a route that only worked via an extra redirect hop, and
    // was one layer of the reported "language switch doesn't work"
    // bug. The English link must point at "/en" without ever doubling up
    // (e.g. "/en/en").
    expect(es).toHaveAttribute("href", "/");
    expect(en).toHaveAttribute("href", "/en");
  });
});
