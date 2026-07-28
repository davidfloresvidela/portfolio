import { BrandIcon, type Brand } from "@/components/atoms/BrandIcon";
import { cn } from "@/lib/cn";
import type { SocialLinkProps } from "./SocialLink.types";

const brandByLabel: Record<string, Brand> = {
  GitHub: "github",
  LinkedIn: "linkedin",
  X: "x",
  Twitter: "x",
};

export function SocialLink({
  social,
  showLabel = false,
  className,
}: SocialLinkProps) {
  const brand = brandByLabel[social.label] ?? "x";

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className={cn(
        "group border-subtle bg-surface text-secondary hover:border-accent/40 hover:text-accent inline-flex min-h-11 items-center gap-2 rounded-full border px-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--glow)]",
        className,
      )}
    >
      <BrandIcon brand={brand} size={18} />
      {showLabel && <span className="font-mono text-sm">{social.label}</span>}
    </a>
  );
}
