import DottedShadowText from "../components/DottedShadowText/DottedShadowText";
import Notes from "../components/Notes/Notes";
import { getFilesWithMetadata } from "../utils/content";
import "./styles.css";

const NotesPages: React.FC = async () => {
  const filenames = getFilesWithMetadata();

  return (
    <div className="notes-page">
      <div className="notes-page__header">
        <DottedShadowText text="Notas" size="3rem" />
      </div>
      <Notes notes={filenames} />
    </div>
  );
};

export default NotesPages;
