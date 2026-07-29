import { ImageResponse } from "next/og";
import { about } from "@/data/about";
import type { Locale } from "@/i18n/routing";

export const ogImageSize = { width: 1200, height: 630 };

// Shared by opengraph-image.tsx and twitter-image.tsx so both social
// previews render from the same source instead of duplicating the JSX.
export function renderOgImage(locale: Locale) {
  const { role, name, tagline } = about[locale];

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "90px",
        background: "linear-gradient(135deg, #0a0f0c 0%, #111815 100%)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 28,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#2ee08a",
        }}
      >
        {role}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 96,
          fontWeight: 700,
          marginTop: 20,
          color: "#eef3ef",
        }}
      >
        {name}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 32,
          marginTop: 28,
          maxWidth: 920,
          color: "#9eada3",
        }}
      >
        {tagline}
      </div>
    </div>,
    { ...ogImageSize },
  );
}
