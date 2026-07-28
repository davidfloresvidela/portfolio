import { cn } from "@/lib/cn";
import type { ButtonProps, ButtonSize, ButtonVariant } from "./Button.types";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-display font-medium transition-all duration-200 ease-out focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 min-h-11 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-on-accent shadow-[0_8px_24px_-12px_var(--accent)] hover:shadow-[var(--glow)]",
  secondary:
    "border border-accent-2/40 text-primary hover:border-accent-2 hover:shadow-[var(--glow-2)]",
  ghost:
    "border border-subtle text-secondary hover:text-primary hover:border-accent/40",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button(props: ButtonProps) {
  const classes = cn(
    base,
    variantClasses[props.variant ?? "primary"],
    sizeClasses[props.size ?? "md"],
    props.className,
  );

  if (props.href !== undefined) {
    const { variant, size, className, children, ...rest } = props;
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { variant, size, className, href, children, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
