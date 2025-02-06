import fs from "fs";
import path from "path";

export const getFileName = (filename: string) =>
  filename.replace(/\.mdx$/, "").replace(/\.md$/, "");

export const getContentDirectory = () =>
  path.join(process.cwd(), "/src/app/content");

export const getContentFiles = () => fs.readdirSync(getContentDirectory());

export const getSlugs = () => {
  return getContentFiles().map((filename) => ({
    slug: getFileName(filename),
  }));
};
