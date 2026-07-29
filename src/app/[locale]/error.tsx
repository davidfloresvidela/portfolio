"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("error");

  useEffect(() => {
    console.error(error);
  }, [error]);

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
      <Button type="button" onClick={reset}>
        {t("retry")}
      </Button>
    </main>
  );
}
