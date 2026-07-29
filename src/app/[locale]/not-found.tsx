import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getButtonClasses } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";
import { Link } from "@/i18n/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("notFound");
  return { title: t("metaTitle") };
}

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <Text variant="eyebrow" tone="accent">
        {t("eyebrow")}
      </Text>
      <Text as="h1" variant="display">
        {t("heading")}
      </Text>
      <Text as="p" variant="body" tone="secondary" className="max-w-md">
        {t("description")}
      </Text>
      <Link href="/" className={getButtonClasses()}>
        {t("backHome")}
      </Link>
    </main>
  );
}
