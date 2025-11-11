/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // Add any custom webpack config here if needed
    return config;
  },
};

module.exports = nextConfig;
