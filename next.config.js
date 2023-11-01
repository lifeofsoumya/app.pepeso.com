/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@/components/*": ["components/*"],
      "@/utils/*": ["utils/*"],
      "@/source/*": ["source/*"]
    }
  },
  eslint: {
    // Enable during production builds
    ignoreDuringBuilds: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/pepeso/" : ""
};

module.exports = nextConfig;
