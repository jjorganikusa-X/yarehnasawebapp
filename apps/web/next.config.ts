import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  // Disable development indicators (hides the small Next.js icon in bottom-left corner)
  devIndicators: false,
  reactStrictMode: true,
  // Allow images from common sources
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.githubusercontent.com' },
      { protocol: 'https', hostname: '**.googleusercontent.com' },
    ],
  },
  // Production-ready TypeScript and ESLint config
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
