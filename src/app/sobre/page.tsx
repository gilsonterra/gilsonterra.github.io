import Image from "next/image";
import "./styles.css";

export default function About() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        fontSize: "var(--text-md)",
        color: "var(--foreground)",
      }}
    >
      <p>
        👋 Olá! Meu nome é <strong>Gilson Terra</strong> e sou{" "}
        <strong>desenvolvedor frontend</strong> com mais de{" "}
        <strong>15 anos de experiência</strong> no mercado. Meu foco é criar
        interfaces <strong>fluidas e intuitivas</strong>, sempre equilibrando
        performance, acessibilidade e design.
        <div className="container-image">
          <p>
            Além do código, me interesso por{" "}
            <strong>UX e Product Design</strong>, buscando entender como a
            tecnologia pode melhorar a vida das pessoas. No meu tempo livre,
            gosto de ler e cuidar do meu jardim –{" "}
            <i>
              afinal, se no CSS dá para deixar tudo mais colorido, no jardim
              também!
            </i>{" "}
            Curto muito praticar corrida e estou treinando para minha primeira{" "}
            <strong>maratona</strong>, sempre em busca de evolução e novos
            desafios. E, claro, nada supera o tempo de qualidade brincando com
            meu filho.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
              justifyContent: "space-between",
              padding: "10px",
              minWidth: "300px",
              minHeight: "320px",
              background: "white",
              boxShadow: "1px 3px 3px 0 #1a1a1a",
              borderRadius: "3px",
            }}
          >
            <Image
              src="/images/jardim-v1.jpeg"
              alt="Jardim Versão 1"
              width="300"
              height="300"
              objectFit="cover"
            />
            <span
              style={{
                color: "#1a1a1a",
                opacity: "0.3",
                fontSize: "var(--text-xl)",
                fontStyle: "italic",
                height: "50px",
                fontFamily: "cursive",
              }}
            >
              Jardim v1.0.9
            </span>
          </div>
        </div>
      </p>
      <p style={{ marginTop: "30px" }}>
        Se quiser trocar uma ideia, é só me chamar! Você pode me encontrar no
        LinkedIn (
        <a
          style={{
            fontStyle: "italic",
            fontWeight: "bold",
            textDecoration: "underline",
            textUnderlineOffset: "0.3rem",
            textDecorationStyle: "dotted",
          }}
          href="https://www.linkedin.com/in/gilsonterra"
          target="__blank"
        >
          @gilsonterra
        </a>
        ) ou pelo e-mail{" "}
        <a
          style={{
            fontStyle: "italic",
            fontWeight: "bold",
            textDecoration: "underline",
            textUnderlineOffset: "0.3rem",
            textDecorationStyle: "dotted",
          }}
          href="mailto:gilsonterra@gmail.com"
        >
          gilsonterra@gmail.com
        </a>
      </p>
    </div>
  );
}
