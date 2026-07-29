import {
  Cloud,
  Database,
  LayoutTemplate,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Reveal } from "@/components/atoms/Reveal";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { SkillCard } from "@/components/molecules/SkillCard";
import { staggerContainer } from "@/lib/motion";
import { skills } from "@/data/skills";
import type { SkillGroupId } from "@/types";

// Keyed by the stable `id`, not the translated `category` label — the
// label differs per locale, the id doesn't.
const iconByGroupId: Record<SkillGroupId, LucideIcon> = {
  frontend: LayoutTemplate,
  backend: Server,
  database: Database,
  cloud: Cloud,
};

export async function SkillsGrid() {
  const [t, locale] = await Promise.all([
    getTranslations("skills"),
    getLocale(),
  ]);

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
        {skills[locale].map((group) => (
          <Reveal as="div" key={group.id}>
            <SkillCard group={group} icon={iconByGroupId[group.id] ?? Wrench} />
          </Reveal>
        ))}
      </Reveal>
    </section>
  );
}
