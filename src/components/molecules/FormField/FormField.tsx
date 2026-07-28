import { cn } from "@/lib/cn";
import type { FormFieldProps } from "./FormField.types";

const baseClasses =
  "w-full rounded-xl border border-subtle bg-base px-4 py-3 font-sans text-primary placeholder:text-muted transition-colors focus:border-accent focus:outline-none";

export function FormField({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  placeholder,
  rows = 5,
  error,
}: FormFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  const fieldClasses = cn(baseClasses, error && "border-danger");

  return (
    <div>
      <label
        htmlFor={id}
        className="text-secondary mb-2 block font-mono text-sm"
      >
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className={cn(fieldClasses, "resize-none")}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className={fieldClasses}
        />
      )}

      {error && (
        <p id={errorId} className="text-danger mt-1.5 font-mono text-xs">
          {error}
        </p>
      )}
    </div>
  );
}
