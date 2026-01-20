import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only apply basePath in production (for GitHub Pages deployment)
  basePath: isProd ? '/mood-board-v2/out' : '',
  trailingSlash: true,
  // Ensure we don't have issues with distDir
  distDir: 'out',
};

export default nextConfig;
