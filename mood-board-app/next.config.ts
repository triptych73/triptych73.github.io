import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/mood-board-app/out', // Optional: if we want to test locally in subpath, but 'export' usually expects relative paths if trailingSlash is handled. 
  // Actually, for simple static file serving from root, no basePath is often safer if we strictly just open the HTML.
  // But wait, Next.js 'export' emits root-relative paths like "/_next/..." by default.
  // If we serve this under triptych73-site/mood-board-app/out, we might need basePath or assetPrefix.
  // For now, let's try standard export. We might need to adjust assetPrefix if it fails to load resources.
};

export default nextConfig;
