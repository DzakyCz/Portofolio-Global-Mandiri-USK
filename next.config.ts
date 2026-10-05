import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/Images/**',
        search: '',
      },
      {
        pathname: '/Images/rizal.png',
        search: '?v=2',
      },
      {
        pathname: '/Images/syaifullah.png',
        search: '?v=2',
      },
    ],
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
