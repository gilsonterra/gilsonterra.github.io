import BrokenNeonText from "../components/BrokenNeonText/BrokenNeonText";
import DottedShadowText from "../components/DottedShadowText/DottedShadowText";

const PlaygroundPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <DottedShadowText text="Playground" size="3rem" />
      </div>
      <ul
        style={{
          display: "grid",
          gap: "30px",
          gridTemplateColumns: "1fr",
        }}
      >
        <li>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span>Texto com efeito sombra animada</span>
            <DottedShadowText text="Efeito sombra animada" />
          </div>
        </li>
        <li>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span>Texto &quot;not found&quot;</span>
            <BrokenNeonText />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PlaygroundPage;
