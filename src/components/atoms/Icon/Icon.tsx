import { cn } from "@/lib/cn";
import type { IconProps } from "./Icon.types";

export function Icon({
  icon: LucideIcon,
  size = 20,
  className,
  label,
}: IconProps) {
  return (
    <LucideIcon
      size={size}
      className={cn("shrink-0", className)}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
    />
  );
}
