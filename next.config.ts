import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build the entire portfolio as static files; no runtime server is required.
  output: "export",
};

export default nextConfig;
