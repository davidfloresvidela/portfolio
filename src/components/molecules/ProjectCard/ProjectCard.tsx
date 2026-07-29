import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/atoms/Badge";
import { BrandIcon } from "@/components/atoms/BrandIcon";
import { Icon } from "@/components/atoms/Icon";
import { Text } from "@/components/atoms/Text";
import type { ProjectCardProps } from "./ProjectCard.types";

export async function ProjectCard({ project }: ProjectCardProps) {
  const t = await getTranslations("projects");

  return (
    <article className="group border-subtle bg-surface hover:border-accent/40 relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--glow)]">
      <span
        aria-hidden
        className="bg-accent pointer-events-none absolute -top-12 -right-12 size-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15"
      />
      <div
        aria-hidden
        className="via-accent pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="mb-3 flex items-start justify-between gap-4">
        <Text
          as="h3"
          variant="h3"
          className="group-hover:text-accent transition-colors duration-300"
        >
          {project.title}
        </Text>
        {project.featured && <Badge tone="accent2">{t("featured")}</Badge>}
      </div>

      <Text as="p" variant="body" tone="secondary" className="flex-1">
        {project.description}
      </Text>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech}>
            <Badge tone="accent">{tech}</Badge>
          </li>
        ))}
      </ul>

      <div className="border-subtle mt-6 flex items-center gap-5 border-t pt-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-accent inline-flex min-h-11 items-center gap-1.5 font-mono text-sm transition-colors"
        >
          {t("viewDemo")}
          <Icon
            icon={ArrowUpRight}
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent inline-flex min-h-11 items-center gap-1.5 font-mono text-sm transition-colors"
          >
            <BrandIcon brand="github" size={16} />
            {t("viewCode")}
          </a>
        ) : (
          <span className="text-secondary/70 inline-flex min-h-11 items-center gap-1.5 font-mono text-sm">
            <BrandIcon brand="github" size={16} />
            {t("privateCode")}
          </span>
        )}
      </div>
    </article>
  );
}
