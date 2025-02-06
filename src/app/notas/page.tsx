import Link from "next/link";
import DottedShadowText from "../components/DottedShadowText/DottedShadowText";
import { getFileName, getFilesWithMetadata } from "../utils/content";
import { parseDatePtBr } from "../utils/date";
import "./styles.css";
import TopicTag from "../components/TopicTag/TopicTag";

const NotesPages: React.FC = async () => {
  const filenames = getFilesWithMetadata();

  return (
    <div className="notes">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <DottedShadowText text="Notas" size="4rem" />
      </div>
      <ul
        style={{
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "1fr",
        }}
      >
        {filenames.map(({ filename, frontmatter }) => (
          <li key={filename}>
            <Link
              href={`/notas/${getFileName(filename)}`}
              className="note-item"
            >
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
                    {frontmatter?.title || getFileName(filename)}
                  </strong>
                  <span style={{ fontSize: "var(--text-xs)", opacity: 0.3 }}>
                    {parseDatePtBr(frontmatter?.updatedAt)}
                  </span>
                </div>
                <span style={{ fontSize: "var(--text-sm)" }}>
                  {frontmatter?.description}
                </span>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  {frontmatter?.topics?.map((topic) => (
                    <TopicTag key={topic} text={topic} />
                  ))}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesPages;
