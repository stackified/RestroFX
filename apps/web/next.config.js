/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // basePath will be auto-injected by GitHub Actions configure-pages action
  // Don't set it here to allow the action to inject it correctly
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

