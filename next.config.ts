import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Ẩn header Next.js
  experimental: {
    optimizeCss: true, // Tối ưu CSS
  },
};

export default nextConfig;
