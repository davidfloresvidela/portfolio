import type { MetadataRoute } from "next";
import { about } from "@/data/about";
import { routing } from "@/i18n/routing";
import { withBasePath } from "@/lib/site";

// Not under [locale] — browsers fetch a single manifest.json regardless of
// page language, so this stays on the default locale rather than trying to
// pick one per-visit.
const { name, tagline } = about[routing.defaultLocale];

// Required for `output: "export"` — nothing here reads request data, so
// this is also just a more explicit way to say what was already true.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${name} — Portafolio`,
    short_name: name,
    description: tagline,
    start_url: withBasePath("/"),
    display: "standalone",
    background_color: "#0a0f0c",
    theme_color: "#0a0f0c",
    icons: [
      {
        src: withBasePath("/icon.svg"),
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
