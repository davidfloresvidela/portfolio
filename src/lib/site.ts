// Single source of truth for the site's canonical URL — layout.tsx,
// sitemap.ts, robots.ts and the JSON-LD block all read from here instead of
// repeating the literal domain.
export const SITE_URL = "https://davidfloresvidela.github.io/portfolio";

// Mirrors next.config.ts's `basePath`, set via NEXT_PUBLIC_BASE_PATH only
// for the GitHub Pages build (see package.json's "build:pages" script).
// Next.js applies basePath automatically to next/link and next/image, but
// not to hand-authored absolute paths (a plain <a href>, a manifest icon
// `src`) — those need to go through withBasePath() explicitly instead.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
