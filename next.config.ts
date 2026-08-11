import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isCustomDomain = process.env.CUSTOM_DOMAIN === "true";
const basePath = isGitHubPages && !isCustomDomain ? "/Talia" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
