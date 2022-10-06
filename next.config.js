/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cdn.dribbble.com",
      "www.joomdev.com",
      "cdn-icons-png.flaticon.com",
    ],
  },
  env: {
    baseUrl: '/'
  }
};

module.exports = nextConfig;
