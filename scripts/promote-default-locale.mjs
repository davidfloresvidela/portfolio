import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// GitHub Pages has no server to run next-intl's middleware, which is what
// normally makes the default locale (Spanish) reachable at "/" instead of
// "/es". Static export (with trailingSlash left at its default "false")
// emits one HTML/RSC-payload file pair per locale route — "es.html"/
// "es.txt", "en.html"/"en.txt" — so this promotes the "es" pair to
// "index.html"/"index.txt" afterwards: "/" ends up serving byte-identical
// content to "/es" (its internal canonical/hreflang tags still point at
// "/es", which is a minor, known SEO wrinkle of this trick, not a
// functional one).
//
// "es" must match routing.ts's defaultLocale.
const DEFAULT_LOCALE = "es";

const outDir = fileURLToPath(new URL("../out", import.meta.url));

for (const ext of ["html", "txt"]) {
  const src = join(outDir, `${DEFAULT_LOCALE}.${ext}`);
  const dest = join(outDir, `index.${ext}`);

  if (!existsSync(src)) {
    throw new Error(
      `Expected ${src} to exist after "next build" — did the STATIC_EXPORT build run first?`,
    );
  }

  copyFileSync(src, dest);
}

console.log(`Promoted ${DEFAULT_LOCALE}.html/.txt to index.html/.txt.`);
