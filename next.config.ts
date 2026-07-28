import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pins the workspace root so Turbopack doesn't get confused by unrelated
  // lockfiles elsewhere on disk (e.g. a stray one in the user's home dir).
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
