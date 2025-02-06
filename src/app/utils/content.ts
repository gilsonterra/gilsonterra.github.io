import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Frontmatter = {
  title: string;
  description: string;
  updatedAt: string;
  startedAt: string;
  type: string;
  cover: string;
  topics: string[];
};

export const getFileName = (filename: string) =>
  filename.replace(/\.mdx$/, "").replace(/\.md$/, "");

export const getContentDirectory = () =>
  path.join(process.cwd(), "/src/app/content");

export const getFiles = () => fs.readdirSync(getContentDirectory());

export const getFilesWithMetadata = () => {
  return getFiles().map((filename) => {
    const filePath = path.join(getContentDirectory(), filename);
    const fileContent = fs.readFileSync(filePath, "utf8");

    const { data } = matter(fileContent);

    return {
      filename,
      frontmatter: data as Frontmatter,
    };
  });
};

export const getSlugs = () => {
  return getFiles().map((filename) => ({
    slug: getFileName(filename),
  }));
};

export async function getMdxContent(slug: string) {
  const filePath = path.join(process.cwd(), "app/content", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(fileContent);

  return { content, frontmatter: data };
}
