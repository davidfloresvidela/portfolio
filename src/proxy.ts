import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next.js 16 renamed the "middleware" file convention to "proxy" (same
// behavior, same default-export signature) — next-intl's own helper is
// still called createMiddleware, but the file itself must be proxy.ts now.
export default createMiddleware(routing);

export const config = {
  // Runs on every path except static assets and Next internals.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
