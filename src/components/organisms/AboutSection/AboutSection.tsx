import { MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Icon } from "@/components/atoms/Icon";
import { Reveal } from "@/components/atoms/Reveal";
import { Text } from "@/components/atoms/Text";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { StatCard } from "@/components/molecules/StatCard";
import { about } from "@/data/about";
import { stats } from "@/data/navigation";

export async function AboutSection() {
  const t = await getTranslations("about");

  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <Reveal>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5">
          <Text as="p" variant="body" tone="secondary" className="text-lg">
            {about.bio}
          </Text>
          <p className="text-secondary flex items-center gap-2">
            <Icon icon={MapPin} size={18} className="text-accent" />
            <Text as="span" variant="body">
              {about.location}
            </Text>
          </p>
        </Reveal>

        <Reveal
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          delay={0.1}
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
