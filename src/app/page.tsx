import NoteItem from "./components/NoteItem/NoteItem";
import { getFilesWithMetadata } from "./utils/content";

export default function Home() {
  const filenames = getFilesWithMetadata();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "60px",
        fontSize: "var(--text-lg)",
        color: "var(--text-secondary)",
      }}
    >
      <p>
        <strong>Frontend Developer</strong> com mais de 15 anos de experiência,
        focado em tecnologia, performance, UX, Design e inovação. <br />
        Atualmente no{" "}
        <a
          href="https://www.grupoboticario.com.br"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "underline",
            textDecorationStyle: "dotted",
            textUnderlineOffset: "0.3em",
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          Grupo Boticário.
        </a>
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h2
          style={{
            fontSize: "var(--text-md)",
            fontStyle: "italic",
          }}
        >
          Últimos posts
        </h2>
        <ul
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          {filenames.map(({ filename, frontmatter }) => (
            <li key={filename}>
              <NoteItem {...frontmatter} filename={filename} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
