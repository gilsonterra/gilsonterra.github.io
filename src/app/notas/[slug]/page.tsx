import BackButton from "@/app/components/BackButton/BackButton";
import NotePaper from "@/app/components/NotePaper/NotePaper";
import TypewriterTitle from "@/app/components/TypewriterTitle/TypewriterTitle";
import { Frontmatter } from "@/app/types/content";
import { getFilesWithMetadata } from "@/app/utils/content";
import { parseDatePtBr } from "@/app/utils/date";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import path from "path";
import { Suspense } from "react";

const NOTE_VIEW_TRANSITION_NAME = "active-note-paper";

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

      <NotePaper
        title={metadata.title}
        updatedAt={parseDatePtBr(metadata?.updatedAt)}
        topics={metadata.topics}
        transitionName={NOTE_VIEW_TRANSITION_NAME}
      >
        <Suspense fallback={<>Carregando...</>}>
          <MDXRemote source={content} components={components} />
        </Suspense>
      </NotePaper>
    </div>
  );
};

export default NotePage;
