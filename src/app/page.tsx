export default function Home() {
  return (
    <div style={{ fontSize: "var(--text-lg)", color: "var(--text-secondary)" }}>
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
    </div>
  );
}
