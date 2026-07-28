import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/cn";
import type { SectionHeadingProps } from "./SectionHeading.types";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <div className="flex items-center gap-3">
        <span aria-hidden className="bg-accent h-px w-8" />
        <Text variant="eyebrow" tone="accent">
          {eyebrow}
        </Text>
      </div>
      <Text as="h2" variant="h1" className="mt-3">
        {title}
      </Text>
      {description && (
        <Text as="p" variant="body" tone="secondary" className="mt-4">
          {description}
        </Text>
      )}
    </div>
  );
}
