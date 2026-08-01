import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // remotePatterns is the modern replacement for 'domains'
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // Matches all Cloudinary paths
      },
    ],
  },
};

export default nextConfig;
