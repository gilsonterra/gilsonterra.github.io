import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Frontmatter } from "../types/content";

type Category = {
  category: string;
};

export const getFileName = (filename: string) =>
  filename.replace(/\.mdx$/, "").replace(/\.md$/, "");

export const getContentDirectory = () =>
  path.join(process.cwd(), "/src/app/content");

export const getFiles = () => fs.readdirSync(getContentDirectory());

export const getFilesWithMetadata = (category?: string) => {
  return getFiles()
    .map((filename) => {
      const filePath = path.join(getContentDirectory(), filename);
      const fileContent = fs.readFileSync(filePath, "utf8");

      const { data } = matter(fileContent);

      const nota = {
        slug: getFileName(filename),
        filename,
        frontmatter: data as Frontmatter,
      };

      return nota;
    })
    .filter((nota) => {
      if (!category) {
        return true;
      }

      return nota.frontmatter.topics?.includes(category);
    });
};

export const getCategories = () => {
  const files = getFilesWithMetadata();

  return (files.reduce((acc, file) => {
    file?.frontmatter?.topics?.forEach((category) => {
      return acc.push({ category });
    });

    return acc;
  }, [] as Category[]) || []) as Category[];
};

export async function getMdxContent(slug: string) {
  const filePath = path.join(process.cwd(), "app/content", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(fileContent);

  return { content, frontmatter: data };
}
