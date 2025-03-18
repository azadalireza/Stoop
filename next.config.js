/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Enable React Server Components
    serverComponents: true,
  },
  // Configure webpack to properly resolve module paths
  webpack: (config) => {
    // This helps with resolving the @/ imports
    config.resolve.modules.push('.');
    return config;
  },
};

module.exports = nextConfig;
