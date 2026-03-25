import BackButton from "@/app/components/BackButton/BackButton";
import TypewriterTitle from "@/app/components/TypewriterTitle/TypewriterTitle";
import NoteTitle from "@/app/components/NoteTitle/NoteTitle";
import TopicTag from "@/app/components/TopicTag/TopicTag";
import { Frontmatter } from "@/app/types/content";
import { getFilesWithMetadata } from "@/app/utils/content";
import { parseDatePtBr } from "@/app/utils/date";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import path from "path";
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
    DottedShadowText: TypewriterTitle,
    TypewriterTitle,
    ul: (props: Record<string, unknown>) => <ul style={{ listStyle: "auto" }} {...props} />,
    ol: (props: Record<string, unknown>) => <ol style={{ listStyle: "auto" }} {...props} />,
    li: (props: Record<string, unknown>) => <li {...props} />,
    a: (props: Record<string, unknown>) => (
      <a
        style={{
          fontWeight: "600",
          textDecorationStyle: "dotted",
          textDecoration: "underline",
          textUnderlineOffset: "0.3rem",
        }}
        {...props}
      />
    ),
  };

  const filePath = path.join(process.cwd(), "/src/app/content", slug + ".mdx");

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContent);
  const metadata = frontmatter as Frontmatter;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "26px", width: "100%" }}>
      <BackButton text="voltar" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.85rem",
          paddingBottom: "0.4rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <span style={{ fontSize: "var(--text-sm)", color: "var(--text-tertiary)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Atualizado em {parseDatePtBr(metadata?.updatedAt)}
        </span>
        <NoteTitle className="note-title--page">{metadata.title}</NoteTitle>
      </div>

      <div style={{ width: "100%", maxWidth: "720px" }}>
        <Suspense fallback={<>Carregando...</>}>
          <MDXRemote source={content} components={components} />
        </Suspense>

        <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap", paddingTop: "0.25rem" }}>
          {metadata.topics?.map((topic: string) => (
            <TopicTag key={topic} text={topic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotePage;
