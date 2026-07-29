import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { SyncHtmlLang } from "@/components/providers/SyncHtmlLang";
import { about } from "@/data/about";
import { contact } from "@/data/contact";
import { routing, type Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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

// Overrides the static fallback from the root layout with the real
// per-locale values, read straight from the route's own `params` — no
// dynamic getLocale() call needed, so this stays static-export friendly.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const url = localeUrl(locale);
  const languages = Object.fromEntries(
    routing.locales.map((loc) => [loc, localeUrl(loc)]),
  );
  const { name, role, tagline } = about[locale];

  return {
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
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enables static rendering for this segment — without it, any page using
  // useTranslations/getTranslations here would be forced dynamic.
  setRequestLocale(locale);

  const messages = await getMessages({ locale });
  const { name, role, tagline, location } = about[locale];

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: role,
    description: tagline,
    email: contact.email,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: location,
    },
    sameAs: contact.socials.map((social) => social.url),
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SyncHtmlLang locale={locale} />
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </NextIntlClientProvider>
  );
}
