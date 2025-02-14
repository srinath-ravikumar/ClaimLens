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
  },
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/<project-name>' : '', // Adjust paths for GitLab Pages
  // trailingSlash: true, // Ensure trailing slashes for all paths
};

export default nextConfig;
