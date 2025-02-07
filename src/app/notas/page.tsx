import DottedShadowText from "../components/DottedShadowText/DottedShadowText";
import NoteItem from "../components/NoteItem/NoteItem";
import { getFilesWithMetadata } from "../utils/content";

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
            <NoteItem {...frontmatter} filename={filename} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesPages;
