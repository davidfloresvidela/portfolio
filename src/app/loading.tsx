export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div
        aria-hidden
        className="border-subtle border-t-accent size-10 animate-spin rounded-full border-4"
      />
      <span className="sr-only">Cargando…</span>
    </main>
  );
}
