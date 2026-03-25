import { Frontmatter } from "@/app/types/content";
import { getFileName } from "@/app/utils/content";
import Link from "next/link";
import TopicTag from "../TopicTag/TopicTag";
import NoteTitle from "../NoteTitle/NoteTitle";
import "./styles.css";

const NoteItem: React.FC<Frontmatter & { filename: string }> = ({
  title,
  description,
  topics,
  filename,
}) => {
  const topicsCount = topics?.length ?? 0;
  const noteColorClass =
    topicsCount <= 2
      ? "note-container--green"
      : topicsCount <= 3
        ? "note-container--yellow"
        : "note-container--orange";

  return (
    <article className={`note-container ${noteColorClass}`}>
      <Link href={`/notas/${getFileName(filename)}`} className="note-item">
        <span className="note-eyebrow">Nota</span>
        <NoteTitle>{title || getFileName(filename)}</NoteTitle>
        {description ? <span className="note-description">{description}</span> : null}
      </Link>
      <div className="note-topics">
        {topics?.map((topic) => (
          <TopicTag key={topic} text={topic} href={`/categoria/${topic}`} />
        ))}
      </div>
    </article>
  );
};

export default NoteItem;
