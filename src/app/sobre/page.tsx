import PolaroidPhoto from "../components/PolaroidPhoto/PolaroidPhoto";
import "./styles.css";

export default function About() {
  return (
    <div className="about-page">
      <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
        Olá! Meu nome é <strong>Gilson Terra</strong> e sou <strong>desenvolvedor frontend</strong> com mais de <strong>15 anos de experiência</strong> no mercado. Meu foco é criar interfaces <strong>fluidas e intuitivas</strong>, sempre equilibrando performance, acessibilidade e design.
      </p>

      <div className="container-image">
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
          Além do código, me interesso por <strong>UX e Product Design</strong>, buscando entender como a tecnologia pode melhorar a vida das pessoas. No meu tempo livre, gosto de ler e cuidar do meu jardim <i>afinal, se no CSS dá para deixar tudo mais colorido, no jardim também!</i> Curto muito praticar corrida e estou treinando para minha primeira <strong>maratona</strong>, sempre em busca de evolução e novos desafios. E, claro, nada supera o tempo de qualidade brincando com meu filho.
        </p>
        <PolaroidPhoto
          src="/images/jardim-v1.jpeg"
          alt="Jardim Versão 1"
          caption="Jardim v1.0.9"
        />
      </div>

      <p style={{ marginTop: "22px", color: "var(--text-secondary)", lineHeight: 1.85 }}>
        Se quiser trocar uma ideia, é só me chamar! Você pode me encontrar no LinkedIn (
        <a
          style={{
            fontStyle: "italic",
            fontWeight: "700",
            textDecoration: "underline",
            textUnderlineOffset: "0.3rem",
            textDecorationStyle: "dotted",
          }}
          href="https://www.linkedin.com/in/gilsonterra"
          target="__blank"
        >
          @gilsonterra
        </a>
        ) ou pelo e-mail <a
          style={{
            fontStyle: "italic",
            fontWeight: "700",
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
