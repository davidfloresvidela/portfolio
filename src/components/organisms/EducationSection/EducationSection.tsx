import { Award, GraduationCap, Languages, type LucideIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/atoms/Reveal";
import { EducationCard } from "@/components/molecules/EducationCard";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { staggerContainer } from "@/lib/motion";
import { education } from "@/data/education";
import type { Locale } from "@/i18n/routing";
import type { EducationGroupId } from "@/types";

const iconByGroupId: Record<EducationGroupId, LucideIcon> = {
  education: GraduationCap,
  certifications: Award,
  languages: Languages,
};

export async function EducationSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "education" });

  return (
    <section
      id="education"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <Reveal>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
      </Reveal>

      <Reveal
        variants={staggerContainer}
        className="mt-12 grid gap-5 md:grid-cols-2"
      >
        {education[locale].map((group) => (
          <Reveal
            as="div"
            key={group.id}
            // Languages lists several entries while the other two hold one
            // each: it takes the right column at full height and the short
            // cards stack on the left, so none of them stretch empty.
            className={
              group.id === "languages"
                ? "md:col-start-2 md:row-span-2 md:row-start-1"
                : undefined
            }
          >
            <EducationCard group={group} icon={iconByGroupId[group.id]} />
          </Reveal>
        ))}
      </Reveal>
    </section>
  );
}
