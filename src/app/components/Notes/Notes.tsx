import { Frontmatter } from "@/app/types/content";
import NoteItem from "../NoteItem/NoteItem";
import "./styles.css";

type NotesProps = {
  notes: { filename: string; frontmatter: Frontmatter }[];
};

const Notes: React.FC<NotesProps> = ({ notes }) => {
  return (
    <ul className="notes-container">
      {notes.map(({ filename, frontmatter }) => (
        <li key={filename}>
          <NoteItem {...frontmatter} filename={filename} />
        </li>
      ))}
    </ul>
  );
};

export default Notes;
