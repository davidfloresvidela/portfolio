import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { about } from "@/data/about";
import { contact } from "@/data/contact";
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

const SITE_URL = "https://dflores-portfolio.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${about.name} — ${about.role}`,
    template: `%s | ${about.name}`,
  },
  description: about.tagline,
  keywords: [
    "David Flores",
    "Desarrollador Web",
    "Full Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Portafolio",
  ],
  authors: [{ name: about.name }],
  creator: about.name,
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    title: `${about.name} — ${about.role}`,
    description: about.tagline,
    siteName: `${about.name} · Portafolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${about.name} — ${about.role}`,
    description: about.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

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

export default function RootLayout({ children }: { children: ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: about.name,
    jobTitle: about.role,
    description: about.tagline,
    email: contact.email,
    telephone: contact.phone,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: about.location,
    },
    sameAs: contact.socials.map((social) => social.url),
  };

  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>{children}</ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
