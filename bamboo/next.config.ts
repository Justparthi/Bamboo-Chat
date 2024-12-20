import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',  // The protocol is 'https'
        hostname: 'avatars.githubusercontent.com',  // The hostname of the remote image
      },
    ],
  },
  // Add any other config options you need here
};

export default nextConfig;
