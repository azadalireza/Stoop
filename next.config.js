/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep React strict mode disabled to avoid potential issues
  reactStrictMode: false,
  
  // Transpile necessary packages
  transpilePackages: [
    "@radix-ui",
    "class-variance-authority",
    "clsx",
    "tailwind-merge"
  ],
  
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable image optimization to simplify the build
  images: {
    unoptimized: true,
  },
  
  // Experimental features
  experimental: {
    esmExternals: 'loose',
  },
};

module.exports = nextConfig;
