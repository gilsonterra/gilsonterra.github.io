import NoteTitle from "../NoteTitle/NoteTitle";
import TopicTag from "../TopicTag/TopicTag";
import "./styles.css";

type NotePaperProps = {
  title: string;
  updatedAt: string;
  topics?: string[];
  children: React.ReactNode;
};

const getNoteTone = (topicsCount: number) => {
  if (topicsCount <= 2) return "green";
  if (topicsCount <= 3) return "yellow";
  return "orange";
};

const NotePaper: React.FC<NotePaperProps> = ({
  title,
  updatedAt,
  topics = [],
  children,
}) => {
  const noteTone = getNoteTone(topics.length);

  return (
    <article className={"note-paper note-paper--" + noteTone}>
      <header className="note-paper__header">
        <span className="note-paper__eyebrow">Atualizado em {updatedAt}</span>
        <NoteTitle className="note-title--page note-paper__title">{title}</NoteTitle>
      </header>

      <div className="note-paper__content">{children}</div>

      {topics.length ? (
        <footer className="note-paper__footer">
          {topics.map((topic) => (
            <TopicTag key={topic} text={topic} />
          ))}
        </footer>
      ) : null}
    </article>
  );
};

export default NotePaper;
