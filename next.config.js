/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'e-rejs.eu',
        port: '',
        pathname: '/media/catalog/product/cache/**',
      },
    ],
  },
};

module.exports = nextConfig;
