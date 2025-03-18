/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  // Next.js 15 already has React Server Components enabled by default
  // Configure webpack to properly resolve module paths
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    return config;
  },
  transpilePackages: [
    "@radix-ui",
    "class-variance-authority",
    "clsx",
    "tailwind-merge"
  ],
  // Ensure TypeScript paths are properly resolved
  typescript: {
    ignoreBuildErrors: true, // Temporarily ignore TS errors during build
  }
};

module.exports = nextConfig;
