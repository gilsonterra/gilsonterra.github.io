import BackButton from "@/app/components/BackButton/BackButton";
import Notes from "@/app/components/Notes/Notes";
import { getCategories, getFilesWithMetadata } from "@/app/utils/content";

type PostProps = {
  params: Promise<{ category: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return getCategories();
}

const NotePage: React.FC<PostProps> = async ({ params }) => {
  const category = (await params).category;
  const filenames = getFilesWithMetadata(category);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <BackButton text="voltar" />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <span
          style={{
            background: "#ea9a97",
            fontSize: "2rem",
            lineHeight: "2rem",
            padding: "10px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {category}
        </span>
      </div>
      <Notes notes={filenames} />
    </div>
  );
};

export default NotePage;
