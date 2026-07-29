import type { MetadataRoute } from "next";
import { about } from "@/data/about";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${about.name} — Portafolio`,
    short_name: about.name,
    description: about.tagline,
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
