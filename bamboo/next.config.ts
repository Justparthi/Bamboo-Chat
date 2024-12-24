import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'tailwindui.com',  // Allow images from tailwindui.com
      },
    ],
  },
  // Any other configuration options can be added here
};

export default nextConfig;
