import Notes from "../components/Notes/Notes";
import { getFilesWithMetadata } from "../utils/content";

const NotesPages: React.FC = async () => {
  const filenames = getFilesWithMetadata();

  return <Notes notes={filenames} />;
};

export default NotesPages;
