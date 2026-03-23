import { redirectionIoWebpackWasmRule } from "@redirection.io/vercel-middleware/webpack";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.module.rules.push(redirectionIoWebpackWasmRule);
    }

    return config;
  },
};

export default nextConfig;
