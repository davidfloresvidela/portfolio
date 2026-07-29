import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { about } from "@/data/about";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

// Static fallback, used only by the one route with no [locale] segment to
// read (the root 404 boundary — see src/app/not-found.tsx). Every real
// page gets its actual per-locale metadata from [locale]/layout.tsx's own
// generateMetadata, which fully overrides this using the route's locale
// param directly instead of a dynamic per-request lookup — see the comment
// on RootLayout below for why this one has to stay request-independent.
export async function generateMetadata(): Promise<Metadata> {
  const { name, role, tagline } = about[routing.defaultLocale];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${name} — ${role}`,
      template: `%s | ${name}`,
    },
    description: tagline,
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0f0c" },
    { media: "(prefers-color-scheme: light)", color: "#eceef3" },
  ],
  colorScheme: "dark light",
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

// Only the true root layout may render <html>/<body> — [locale]/layout.tsx
// underneath adds the real <NextIntlClientProvider>, per-locale metadata,
// and JSON-LD once the [locale] route param is known. This layout
// deliberately never calls next-intl's request-scoped APIs (getLocale(),
// getMessages()): those need to read request headers to resolve a locale
// when there's no [locale] segment to read it from instead, and
// "output: export" (for the GitHub Pages build) hard-fails any route that
// does that. <html lang> defaults to the site's default locale here and
// gets corrected client-side for real /en pages by SyncHtmlLang, since a
// nested layout can't touch <html> itself.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang={routing.defaultLocale}
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
