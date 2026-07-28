import { MainTemplate } from "@/components/templates/MainTemplate";
import { HeroSection } from "@/components/organisms/HeroSection";
import { AboutSection } from "@/components/organisms/AboutSection";
import { SkillsGrid } from "@/components/organisms/SkillsGrid";
import { ExperienceTimeline } from "@/components/organisms/ExperienceTimeline";
import { ProjectsSection } from "@/components/organisms/ProjectsSection";
import { ContactForm } from "@/components/organisms/ContactForm";

export default function Home() {
  return (
    <MainTemplate>
      <HeroSection />
      <AboutSection />
      <SkillsGrid />
      <ExperienceTimeline />
      <ProjectsSection />
      <ContactForm />
    </MainTemplate>
  );
}
