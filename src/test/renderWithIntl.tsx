import { render, type RenderOptions } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import type { ReactElement } from "react";
import messages from "../../messages/es.json";

// Wraps RTL's render with a real NextIntlClientProvider (the app's default
// locale, Spanish) so components/hooks that call useTranslations don't each
// need a hand-rolled mock — and a renamed/missing message key fails the
// test instead of failing silently.
export function renderWithIntl(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return render(ui, {
    wrapper: ({ children }) => (
      <NextIntlClientProvider locale="es" messages={messages}>
        {children}
      </NextIntlClientProvider>
    ),
    ...options,
  });
}
