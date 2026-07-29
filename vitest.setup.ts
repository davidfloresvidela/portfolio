import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

// Testing Library's auto-cleanup relies on a global `afterEach`, which we
// don't have since `test.globals` is off (explicit imports elsewhere) — so
// it's wired up by hand here instead.
afterEach(() => {
  cleanup();
});
