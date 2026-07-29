"use client";

import { useEffect } from "react";
import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <Text variant="eyebrow" tone="accent">
        Algo salió mal
      </Text>
      <Text as="h1" variant="display">
        Hubo un error inesperado
      </Text>
      <Text as="p" variant="body" tone="secondary" className="max-w-md">
        Intenta de nuevo. Si el problema persiste, escríbeme directamente.
      </Text>
      <Button type="button" onClick={reset}>
        Intentar de nuevo
      </Button>
    </main>
  );
}
