import {
  Cloud,
  Database,
  LayoutTemplate,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/atoms/Reveal";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { SkillCard } from "@/components/molecules/SkillCard";
import { staggerContainer } from "@/lib/motion";
import { skills } from "@/data/skills";

const iconByCategory: Record<string, LucideIcon> = {
  Frontend: LayoutTemplate,
  Backend: Server,
  "Bases de datos": Database,
  "Cloud & DevOps": Cloud,
};

export async function SkillsGrid() {
  const t = await getTranslations("skills");

  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <Reveal>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />
      </Reveal>

      <Reveal
        variants={staggerContainer}
        className="mt-12 grid gap-5 sm:grid-cols-2"
      >
        {skills.map((group) => (
          <Reveal as="div" key={group.category}>
            <SkillCard
              group={group}
              icon={iconByCategory[group.category] ?? Wrench}
            />
          </Reveal>
        ))}
      </Reveal>
    </section>
  );
}
