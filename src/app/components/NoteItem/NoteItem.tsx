import { Frontmatter } from "@/app/types/content";
import { getFileName } from "@/app/utils/content";
import Link from "next/link";
import TopicTag from "../TopicTag/TopicTag";
import { parseDatePtBr } from "@/app/utils/date";
import "./styles.css";

const NoteItem: React.FC<Frontmatter & { filename: string }> = ({
  title,
  updatedAt,
  description,
  topics,
  filename,
}) => {
  return (
    <Link href={`/notas/${getFileName(filename)}`} className="note-item">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          height: "100%",
        }}
      >
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
          <span style={{ fontSize: "var(--text-xs)", opacity: 0.3 }}>
            {parseDatePtBr(updatedAt)}
          </span>
        </div>
        <span style={{ fontSize: "var(--text-sm)" }}>{description}</span>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {topics?.map((topic) => <TopicTag key={topic} text={topic} />)}
        </div>
      </div>
    </Link>
  );
};

export default NoteItem;
