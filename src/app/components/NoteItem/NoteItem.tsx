"use client";

import { Frontmatter } from "@/app/types/content";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import NoteTitle from "../NoteTitle/NoteTitle";
import TopicTag from "../TopicTag/TopicTag";
import "./styles.css";

type NoteItemProps = Frontmatter & { filename: string };

const getNoteSlug = (filename: string) => {
  const parts = filename.split(".");
  parts.pop();
  return parts.join(".");
};

const NoteItem: React.FC<NoteItemProps> = ({
  title,
  description,
  topics,
  filename,
}) => {
  const router = useRouter();
  const openTimerRef = useRef<number | null>(null);
  const href = "/notas/" + getNoteSlug(filename);
  const topicsCount = topics?.length ?? 0;
  const noteColorClass =
    topicsCount <= 2
      ? "note-container--green"
      : topicsCount <= 3
        ? "note-container--yellow"
        : "note-container--orange";

  const handleNavigate = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    const target = event.currentTarget.closest("article");
    target?.classList.add("note-container--opening");

    if (openTimerRef.current) {
      window.clearTimeout(openTimerRef.current);
    }

    openTimerRef.current = window.setTimeout(() => {
      router.push(href);
    }, 170);
  };

  return (
    <article className={`note-container ${noteColorClass}`}>
      <Link href={href} className="note-item" onClick={handleNavigate}>
        <span className="note-eyebrow">Nota</span>
        <NoteTitle>{title || getNoteSlug(filename)}</NoteTitle>
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
