import path from "node:path";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// No Content-Security-Policy here on purpose: the anti-FOUC theme script and
// the JSON-LD block in layout.tsx are both inline, so a real CSP would need
// nonces wired through the whole render, and there's no browser available in
// this environment to verify it doesn't silently break something. Left as a
// deliberate follow-up rather than a guess.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

// GitHub Pages only serves static files — no Node server, so no middleware
// (src/proxy.ts becomes a no-op there) and no custom response headers.
// `output: "export"` and `basePath` are only turned on for that build (see
// the "build:pages" script), so `next dev`/`next build`/CI stay exactly as
// they were for everyone else.
const isStaticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Pins the workspace root so Turbopack doesn't get confused by unrelated
  // lockfiles elsewhere on disk (e.g. a stray one in the user's home dir).
  turbopack: {
    root: path.resolve(__dirname),
  },
  ...(isStaticExport
    ? {
        output: "export",
        basePath,
        images: { unoptimized: true },
      }
    : {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: securityHeaders,
            },
          ];
        },
      }),
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);
