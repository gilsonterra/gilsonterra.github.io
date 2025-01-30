import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  compiler: {
    styledComponents: true,
  },
};

export default withMDX(nextConfig);
