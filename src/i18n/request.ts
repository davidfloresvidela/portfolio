import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// Reads `locale` (the explicit override every caller passes — see
// setRequestLocale calls in [locale]/layout.tsx and the `{ locale, ... }`
// argument on every getTranslations()/getMessages() call), not
// `requestLocale`. The latter is a lazy getter that falls back to reading
// the incoming request's headers when no override is given, which
// "output: export" (the GitHub Pages build) forbids — there's no request to
// read, and no middleware/proxy running to have set one in the first place.
export default getRequestConfig(async ({ locale: requested }) => {
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
