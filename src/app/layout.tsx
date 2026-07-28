import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Flores — Portafolio",
  description:
    "Portafolio personal de David Flores, desarrollador web full stack.",
};

// Runs before paint to set the theme class on <html>, avoiding a flash of the
// wrong theme. Stored preference wins; otherwise we follow the OS setting.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    var theme = stored || (prefersLight ? "light" : "dark");
    document.documentElement.classList.add(theme);
  } catch (e) {
    document.documentElement.classList.add("dark");
  }
})();
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
