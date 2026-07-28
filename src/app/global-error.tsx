"use client";

// Only fires if the root layout itself throws — Next.js requires this file
// to render its own <html>/<body>, since it fully replaces the root layout
// in that case. Inline styles only: the normal CSS bundle isn't guaranteed
// to be available here, so this intentionally doesn't use Tailwind classes
// or the design-system components.
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          padding: "1rem",
          textAlign: "center",
          background: "#0a0f0c",
          color: "#eef3ef",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <p>Algo salió mal a nivel de aplicación.</p>
        <button
          type="button"
          onClick={reset}
          style={{
            borderRadius: "9999px",
            border: "1px solid #2ee08a",
            padding: "0.625rem 1.5rem",
            color: "#2ee08a",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          Intentar de nuevo
        </button>
      </body>
    </html>
  );
}
