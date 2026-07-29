import { about } from "@/data/about";
import { ogImageSize, renderOgImage } from "@/lib/ogImage";

export const alt = `${about.name} — ${about.role}`;
export const size = ogImageSize;
export const contentType = "image/png";

export default function TwitterImage() {
  return renderOgImage();
}
