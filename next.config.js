/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Enable during production builds
    ignoreDuringBuilds: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/pepeso/' : '',

}

module.exports = nextConfig
