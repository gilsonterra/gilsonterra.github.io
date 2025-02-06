import BackButton from "@/app/components/BackButton/BackButton";
import { getSlugs } from "@/app/utils/content";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import DottedShadowText from "@/app/components/DottedShadowText/DottedShadowText";
import { notFound } from "next/navigation";

type PostProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return getSlugs();
}

const NotePage: React.FC<PostProps> = async ({ params }) => {
  const slug = (await params).slug;
  const { default: Note } = await import(`@/app/content/${slug}.mdx`);

  const filePath = path.join(process.cwd(), "/src/app/content", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContent);

  const components = {
    DottedShadowText,
  };

  return (
    <div>
      <BackButton text="voltar" />
      {JSON.stringify(frontmatter, null, 2)}
      <br />
      <br />
      <br />
      <br />
      {<MDXRemote source={content} components={components} />}
      <br />
      <br />
      <br />
      <br />
      <Note />
    </div>
  );
};

export default NotePage;
