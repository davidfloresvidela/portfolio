import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/atoms/Badge";
import { BrandIcon } from "@/components/atoms/BrandIcon";
import { Icon } from "@/components/atoms/Icon";
import { Text } from "@/components/atoms/Text";
import type { ProjectCardProps } from "./ProjectCard.types";

function StackList({ stack }: { stack: string[] }) {
  if (stack.length === 0) return null;
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {stack.map((tech) => (
        <li key={tech}>
          <Badge tone="accent">{tech}</Badge>
        </li>
      ))}
    </ul>
  );
}

function DemoLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:text-accent inline-flex min-h-11 items-center gap-1.5 font-mono text-sm transition-colors"
    >
      {label}
      <Icon
        icon={ArrowUpRight}
        size={16}
        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}

export async function ProjectCard({ project, locale }: ProjectCardProps) {
  const t = await getTranslations({ locale, namespace: "projects" });

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
        <div className="flex shrink-0 flex-wrap justify-end gap-2">
          {project.status && <Badge tone="neutral">{project.status}</Badge>}
          {project.featured && <Badge tone="accent2">{t("featured")}</Badge>}
        </div>
      </div>

      <Text as="p" variant="body" tone="secondary">
        {project.description}
      </Text>

      {project.versions && (
        <ol className="mt-5 flex flex-col gap-4">
          {project.versions.map((version) => (
            <li
              key={version.label}
              className="border-subtle rounded-xl border p-4"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <Text as="h4" variant="body" className="font-semibold">
                  {version.label}
                </Text>
                <span className="text-secondary font-mono text-xs">
                  {version.period}
                </span>
              </div>
              <Text as="p" variant="small" tone="secondary" className="mt-2">
                {version.description}
              </Text>
              <StackList stack={version.stack} />
              {(version.liveUrl || version.status) && (
                <div className="mt-3 flex items-center gap-3">
                  {version.liveUrl && (
                    <DemoLink href={version.liveUrl} label={t("viewDemo")} />
                  )}
                  {version.status && (
                    <Badge tone="neutral">{version.status}</Badge>
                  )}
                </div>
              )}
            </li>
          ))}
        </ol>
      )}

      <div className="flex-1">
        <StackList stack={project.stack} />
      </div>

      <div className="border-subtle mt-6 flex items-center gap-5 border-t pt-4">
        {project.liveUrl && (
          <DemoLink href={project.liveUrl} label={t("viewDemo")} />
        )}
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
