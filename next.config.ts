import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => [
    {
      source: "/teardowns/ownly",
      destination: "/teardowns/ownly/index.html",
    },
  ],
};

export default nextConfig;
