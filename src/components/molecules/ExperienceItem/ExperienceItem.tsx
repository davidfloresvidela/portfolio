import { Badge } from "@/components/atoms/Badge";
import { Text } from "@/components/atoms/Text";
import type { ExperienceItemProps } from "./ExperienceItem.types";

export function ExperienceItem({ item, isLast = false }: ExperienceItemProps) {
  return (
    <div className="group relative pl-10">
      <span
        aria-hidden
        className="border-accent bg-base absolute top-2 left-[7px] size-3 rounded-full border-2 shadow-[var(--glow)] transition-transform duration-300 group-hover:scale-125"
      />
      {!isLast && (
        <span
          aria-hidden
          className="from-accent/40 absolute top-5 left-[13px] h-[calc(100%+1rem)] w-px bg-gradient-to-b to-transparent"
        />
      )}

      <div className="border-subtle bg-surface hover:border-accent/30 rounded-2xl border p-6 transition-all duration-300 hover:translate-x-1 hover:shadow-[var(--glow)]">
        <Text variant="eyebrow" tone="accent">
          {item.period}
        </Text>
        <div className="mt-2 flex flex-wrap items-baseline gap-x-2">
          <Text as="h3" variant="h3">
            {item.role}
          </Text>
          <Text as="span" variant="body" tone="secondary">
            · {item.company}
          </Text>
        </div>
        <Text as="p" variant="body" tone="secondary" className="mt-3">
          {item.description}
        </Text>
        <ul className="mt-4 flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
