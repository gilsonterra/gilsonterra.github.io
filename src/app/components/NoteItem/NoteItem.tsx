import { Frontmatter } from "@/app/types/content";
import { getFileName } from "@/app/utils/content";
import Link from "next/link";
import TopicTag from "../TopicTag/TopicTag";
import "./styles.css";

const NoteItem: React.FC<Frontmatter & { filename: string }> = ({
  title,
  description,
  topics,
  filename,
}) => {
  return (
    <div className="note-container">
      <Link href={`/notas/${getFileName(filename)}`} className="note-item">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            justifyContent: "space-between",
          }}
        >
          <strong style={{ fontSize: "var(--text-lg)" }}>
            {title || getFileName(filename)}
          </strong>
        </div>
        <span style={{ fontSize: "var(--text-sm)" }}>{description}</span>
      </Link>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          marginTop: "5px",
        }}
      >
        {topics?.map((topic) => (
          <TopicTag key={topic} text={topic} href={`/categoria/${topic}`} />
        ))}
      </div>
    </div>
  );
};

export default NoteItem;
