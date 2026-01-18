import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/mood-board-app/out',
  assetPrefix: '/mood-board-app/out/',
  trailingSlash: true,
};

export default nextConfig;
