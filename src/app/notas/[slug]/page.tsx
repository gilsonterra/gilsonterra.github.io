import BackButton from "@/app/components/BackButton/BackButton";
import { getFilesWithMetadata } from "@/app/utils/content";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import DottedShadowText from "@/app/components/DottedShadowText/DottedShadowText";
import { notFound } from "next/navigation";
import TopicTag from "@/app/components/TopicTag/TopicTag";
import { parseDatePtBr } from "@/app/utils/date";
import { Frontmatter } from "@/app/types/content";
import { Suspense } from "react";

type PostProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return getFilesWithMetadata();
}

const NotePage: React.FC<PostProps> = async ({ params }) => {
  const slug = (await params).slug;
  const components = {
    DottedShadowText,
    a: (props: Record<string, unknown>) => (
      <a
        style={{
          fontWeight: "500",
          fontStyle: "italic",
          textDecorationStyle: "dotted",
          textDecoration: "underline",
          textUnderlineOffset: "0.3rem",
        }}
        {...props}
      />
    ),
  };

  //const { default: Note } = await import(`@/app/content/${slug}.mdx`);

  const filePath = path.join(process.cwd(), "/src/app/content", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContent);
  const metadata = frontmatter as Frontmatter;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <BackButton text="voltar" />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ fontSize: "var(--text-xl)", fontWeight: "bold" }}>
          {metadata.title}
        </h1>
        <span style={{ fontSize: "var(--text-sm)", opacity: 0.5 }}>
          {parseDatePtBr(metadata?.updatedAt)}
        </span>
      </div>
      <Suspense fallback={<>Carregando...</>}>
        <MDXRemote source={content} components={components} />
      </Suspense>

      <div style={{ display: "flex", gap: "5px" }}>
        {metadata.topics?.map((topic: string) => (
          <TopicTag key={topic} text={topic} />
        ))}
      </div>
    </div>
  );
};

export default NotePage;
