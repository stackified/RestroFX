/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // basePath will be auto-injected by GitHub Actions configure-pages action
  // Don't set it manually to allow the action to inject it correctly
  trailingSlash: true,
  // assetPrefix must match basePath (with trailing slash) for GitHub Pages
  // The configure-pages action injects basePath, and we set assetPrefix to match
  // Use environment variable if set, otherwise default to /RestroFX/ for production builds
  assetPrefix: process.env.ASSET_PREFIX || (process.env.NODE_ENV === 'production' ? '/RestroFX/' : ''),
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

