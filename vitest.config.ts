import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    server: {
      // Next 16 dropped the "exports" map from its package.json, so bare
      // subpath imports like "next/navigation" only resolve through
      // Node's legacy CJS-style lookup. Vitest hands externalized deps
      // straight to Node's native (spec-strict) ESM resolver instead,
      // which requires the ".js" extension and fails otherwise — so
      // next-intl's own "next/navigation" import breaks unless these
      // packages are inlined and resolved through Vite instead.
      deps: {
        inline: [/next-intl/, /^next$/],
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
