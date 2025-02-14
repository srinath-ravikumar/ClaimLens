import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export mode
  images: {
    unoptimized: true, // Disable Image Optimization for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc', // Allow external images from this host
      },
    ],
  }
};

export default nextConfig;
