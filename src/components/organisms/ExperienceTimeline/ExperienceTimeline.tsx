import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/atoms/Reveal";
import { ExperienceItem } from "@/components/molecules/ExperienceItem";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { experience } from "@/data/experience";

export async function ExperienceTimeline() {
  const t = await getTranslations("experience");

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <Reveal>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
      </Reveal>

      <ol className="mt-12 space-y-8">
        {experience.map((item, index) => (
          <Reveal
            as="li"
            key={`${item.company}-${item.period}`}
            delay={index * 0.05}
          >
            <ExperienceItem
              item={item}
              isLast={index === experience.length - 1}
            />
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
