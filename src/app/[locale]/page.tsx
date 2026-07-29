import { setRequestLocale } from "next-intl/server";
import { MainTemplate } from "@/components/templates/MainTemplate";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { HeroSection } from "@/components/organisms/HeroSection";
import { AboutSection } from "@/components/organisms/AboutSection";
import { SkillsGrid } from "@/components/organisms/SkillsGrid";
import { ExperienceTimeline } from "@/components/organisms/ExperienceTimeline";
import { ProjectsSection } from "@/components/organisms/ProjectsSection";
import { ContactForm } from "@/components/organisms/ContactForm";
import type { Locale } from "@/i18n/routing";

export default async function Home({
  params,
}: {
  // [locale]/layout.tsx already gates invalid locales via notFound() before
  // this ever renders, so it's safe to type this as Locale rather than
  // re-validating with hasLocale() a second time.
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <MainTemplate header={<Header />} footer={<Footer />}>
      <HeroSection />
      <AboutSection />
      <SkillsGrid />
      <ExperienceTimeline />
      <ProjectsSection />
      <ContactForm />
    </MainTemplate>
  );
}
