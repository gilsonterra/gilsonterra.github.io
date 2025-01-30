import fs from "fs";
import path from "path";

export const getContentDirectory = () =>
  path.join(process.cwd(), "/src/app/content");

export const getContentFiles = () => fs.readdirSync(getContentDirectory());

export const getSlugs = () => {
  return getContentFiles().map((filename) => ({
    slug: filename.replace(/\.mdx$/, ""),
  }));
};

export const getFileName = (filename: string) => filename.replace(/\.mdx$/, "");
