import type { Metadata } from "next";
import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <Text variant="eyebrow" tone="accent">
        Error 404
      </Text>
      <Text as="h1" variant="display">
        Esta página no existe
      </Text>
      <Text as="p" variant="body" tone="secondary" className="max-w-md">
        El enlace que seguiste puede estar roto, o la página se movió.
      </Text>
      <Button href="/">Volver al inicio</Button>
    </main>
  );
}
