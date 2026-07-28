import { Badge } from "@/components/atoms/Badge";
import { Icon } from "@/components/atoms/Icon";
import { Text } from "@/components/atoms/Text";
import type { SkillCardProps } from "./SkillCard.types";

export function SkillCard({ group, icon }: SkillCardProps) {
  return (
    <article className="group border-subtle bg-surface hover:border-accent/30 relative h-full overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--glow)]">
      <span
        aria-hidden
        className="bg-accent pointer-events-none absolute -top-10 -right-10 size-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
      />
      <div className="mb-4 flex items-center gap-3">
        <span className="border-subtle bg-elevated text-accent group-hover:border-accent/40 flex size-10 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Icon icon={icon} size={20} />
        </span>
        <Text as="h3" variant="h3">
          {group.category}
        </Text>
      </div>
      <ul className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li key={item}>
            <Badge>{item}</Badge>
          </li>
        ))}
      </ul>
    </article>
  );
}
