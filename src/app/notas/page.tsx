import Link from "next/link";
import { getContentFiles, getFileName } from "../utils/content";
import DottedShadowText from "../components/DottedShadowText/DottedShadowText";

const NotesPages: React.FC = async () => {
  const filenames = getContentFiles();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <DottedShadowText text="Notas" size="4rem" />
      </div>
      <ul style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        {filenames.map((filename) => (
          <li key={filename} style={{ fontSize: "var(--text-lg)" }}>
            <Link href={`/notas/${getFileName(filename)}`}>
              {getFileName(filename)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesPages;
