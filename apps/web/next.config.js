/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // basePath for GitHub Pages - will be overridden by GitHub Actions if it injects it
  // Set explicitly for production builds to ensure it's available during build
  basePath: process.env.BASE_PATH || '',
  trailingSlash: true,
  // assetPrefix must match basePath (with trailing slash)
  // This ensures CSS, JS, and other assets load correctly
  assetPrefix: process.env.ASSET_PREFIX || '',
  transpilePackages: ["@crimsonfx/ui", "@crimsonfx/utils", "@crimsonfx/types"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

