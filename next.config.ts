import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
      hostname: 'newsroom.porsche.com',
      protocol: 'https',
      port: '',
      },
      {
        hostname: 'lh3.googleusercontent.com',
        protocol: 'https',
        port: '',
      },
      {
        hostname: 'www.bmw-m.com',
        protocol: 'https',
        port: '',
      },
      {
        hostname: 'images-porsche.imgix.net',
        protocol: 'https',
        port: '',
      },
    ],
  },
};

export default nextConfig;
