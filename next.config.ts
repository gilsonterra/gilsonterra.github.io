import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
};

export default withMDX(nextConfig);
