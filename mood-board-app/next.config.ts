import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath: '/mood-board-app/out', // Removing absolute path dependency
  // Using dot prefix to attempt relative resolution for all assets
  assetPrefix: '.',
  trailingSlash: true,
};

export default nextConfig;
