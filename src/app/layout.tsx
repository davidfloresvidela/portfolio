import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { about } from "@/data/about";
import { contact } from "@/data/contact";
import { routing, type Locale } from "@/i18n/routing";
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

function localeUrl(locale: string): string {
  return locale === routing.defaultLocale ? SITE_URL : `${SITE_URL}/${locale}`;
}

const keywordsByLocale: Record<Locale, string[]> = {
  es: [
    "David Flores",
    "Desarrollador Web",
    "Full Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Portafolio",
  ],
  en: [
    "David Flores",
    "Web Developer",
    "Full Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
};

// The canonical/hreflang URLs and now the title/description text are both
// correct per-locale — about/contact were translated in feature/i18n-content.
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const url = localeUrl(locale);
  const languages = Object.fromEntries(
    routing.locales.map((loc) => [loc, localeUrl(loc)]),
  );
  const { name, role, tagline } = about[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${name} — ${role}`,
      template: `%s | ${name}`,
    },
    description: tagline,
    keywords: keywordsByLocale[locale],
    authors: [{ name }],
    creator: name,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: "website",
      // Content and location are Chilean, not Mexican — was previously
      // es_MX by mistake.
      locale: locale === "en" ? "en_US" : "es_CL",
      url,
      title: `${name} — ${role}`,
      description: tagline,
      siteName: `${name} · Portafolio`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} — ${role}`,
      description: tagline,
    },
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
// underneath just validates the locale param and enables static rendering.
// The locale itself comes from getLocale(), populated by the middleware
// for every request regardless of how deep this layout sits.
export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();
  const { name, role, tagline, location } = about[locale];

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: role,
    description: tagline,
    email: contact.email,
    telephone: contact.phone,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: location,
    },
    sameAs: contact.socials.map((social) => social.url),
  };

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
