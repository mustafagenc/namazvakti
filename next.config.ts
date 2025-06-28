import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: '*',
              port: '',
              pathname: '/**',
          },
      ],
  },
};

export default nextConfig;
