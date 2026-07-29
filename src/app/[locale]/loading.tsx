import { getTranslations } from "next-intl/server";

export default async function Loading() {
  const t = await getTranslations("loading");

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div
        aria-hidden
        className="border-subtle border-t-accent size-10 animate-spin rounded-full border-4"
      />
      <span className="sr-only">{t("label")}</span>
    </main>
  );
}
