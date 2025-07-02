import DottedShadowText from "../components/DottedShadowText/DottedShadowText";
import Notes from "../components/Notes/Notes";
import { getFilesWithMetadata } from "../utils/content";

const NotesPages: React.FC = async () => {
  const filenames = getFilesWithMetadata();

  return (
    <div className="notes">
      <div style={{ display: "flex", justifyContent: "center", padding: '1rem 0' }}>
        <DottedShadowText text="Notas" size="3rem" />
      </div>
      <Notes notes={filenames} />
    </div>
  );
};

export default NotesPages;
