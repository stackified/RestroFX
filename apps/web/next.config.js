/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Set basePath and assetPrefix for GitHub Pages deployment
  // This is needed for assets to load correctly when deployed to a subdirectory
  basePath: process.env.NODE_ENV === 'production' ? '/crimsonfx' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/crimsonfx' : '',
  trailingSlash: true,
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

