import type { MetadataRoute } from "next";
import { about } from "@/data/about";
import { routing } from "@/i18n/routing";

// Not under [locale] — browsers fetch a single manifest.json regardless of
// page language, so this stays on the default locale rather than trying to
// pick one per-visit.
const { name, tagline } = about[routing.defaultLocale];

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${name} — Portafolio`,
    short_name: name,
    description: tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0f0c",
    theme_color: "#0a0f0c",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
