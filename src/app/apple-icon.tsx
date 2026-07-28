import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple applies its own corner mask, so this stays a plain square — same
// "DF" monogram as icon.svg, generated as a PNG since iOS doesn't accept SVG
// touch icons.
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0f0c",
        fontSize: 88,
        fontWeight: 700,
        fontFamily: "sans-serif",
        color: "#2ee08a",
      }}
    >
      DF
    </div>,
    { ...size },
  );
}
