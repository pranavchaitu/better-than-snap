import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'bjakx7u5m5.ufs.sh',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};



export default nextConfig;
