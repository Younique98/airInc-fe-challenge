/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
          },
      {
        protocol: "https",
        hostname: "air-prod.imgix.net",
          },
      {
        protocol: "https",
        hostname: "air-original.imgix.net",
          }
    ],
    },
}

module.exports = nextConfig
