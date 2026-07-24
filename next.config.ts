import type { NextConfig } from "next";

const isVercelBuild =
  process.env.VERCEL === "1" || process.env.NEXT_BUILD_TARGET === "vercel";

const nextConfig: NextConfig = {
  ...(isVercelBuild
    ? {
        typescript: {
          tsconfigPath: "tsconfig.vercel.json",
        },
      }
    : {}),
};

export default nextConfig;
