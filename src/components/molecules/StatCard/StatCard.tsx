import { Text } from "@/components/atoms/Text";
import type { StatCardProps } from "./StatCard.types";

export function StatCard({ stat }: StatCardProps) {
  return (
    <div className="border-subtle bg-surface hover:border-accent/30 rounded-2xl border p-5 text-center transition-colors duration-300 sm:text-left">
      <Text as="p" variant="h2" tone="accent" className="font-mono">
        {stat.value}
      </Text>
      <Text as="p" variant="small" tone="secondary" className="mt-1">
        {stat.label}
      </Text>
    </div>
  );
}
