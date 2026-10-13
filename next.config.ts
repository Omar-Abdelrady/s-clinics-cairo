import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/s-clinics-cairo" : "",
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
