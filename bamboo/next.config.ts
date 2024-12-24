import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
<<<<<<< HEAD
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',  // Add images.unsplash.com to the allowed domains
      },
    ],
  },
  // Add other configurations as needed
=======
        protocol: 'https',  // The protocol is 'https'
        hostname: 'avatars.githubusercontent.com',  // The hostname of the remote image
      },
    ],
  },
  // Add any other config options you need here
>>>>>>> 7e07509a79e99daa898803e224d7e9c30fe51a98
};

export default nextConfig;
