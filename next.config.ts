import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'brawijayamultiusaha.co.id',
        pathname: '/img/**',
      },
      {
        protocol: 'https',
        hostname: 'api.apps.bmuconnect.id',
        pathname: '/image/publication/**',
      },
    ],
  },
};

export default nextConfig;
