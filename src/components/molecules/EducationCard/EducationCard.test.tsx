import { render, screen } from "@testing-library/react";
import { Languages } from "lucide-react";
import { describe, expect, it } from "vitest";
import type { EducationGroup } from "@/types";
import { EducationCard } from "./EducationCard";

const group: EducationGroup = {
  id: "languages",
  category: "Idiomas",
  entries: [
    { title: "Español", detail: "Nativo" },
    {
      title: "British Council English Online",
      detail: "Nivel B1, en curso",
      period: "sep. 2026 — Actualidad",
    },
  ],
};

describe("EducationCard", () => {
  it("renders the category as a heading and every entry", () => {
    render(<EducationCard group={group} icon={Languages} />);

    expect(
      screen.getByRole("heading", { level: 3, name: "Idiomas" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText("Nivel B1, en curso")).toBeInTheDocument();
  });

  it("shows a period only for entries that have one", () => {
    render(<EducationCard group={group} icon={Languages} />);

    expect(screen.getByText("sep. 2026 — Actualidad")).toBeInTheDocument();
    expect(screen.getAllByText(/—/)).toHaveLength(1);
  });
});
