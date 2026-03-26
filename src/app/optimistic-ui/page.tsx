'use client'
import { useState } from "react";
import TypewriterTitle from "../components/TypewriterTitle/TypewriterTitle";
import OptimisticUiSimulator from "../components/OptimisticUiSimulator/OptimisticUiSimulator";

const OptimisticUiPages: React.FC = () => {
  const [error, setError] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "clamp(2rem, 5vw, 3.125rem)",
        width: "100%",
        padding: "1rem clamp(1rem, 4vw, 2rem) 2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem 0",
          flexWrap: "wrap",
          gap: "clamp(1rem, 3vw, 1.25rem)",
          textAlign: "center",
        }}
      >
        <TypewriterTitle text="Optimistic UI" size="clamp(2rem, 8vw, 3rem)" />
        <label
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <input
            type="checkbox"
            style={{ transform: "scale(1.35)", flexShrink: 0 }}
            checked={error}
            onChange={(e) => setError(e.target.checked)}
          />
          <span>Simular Erro:</span> <b>{error ? "SIM" : "NÃO"}</b>
        </label>
      </div>
      <OptimisticUiSimulator showLoading={true} text="Com spinner" error={error} />
      <OptimisticUiSimulator text="Sem Optimistic UI" error={error} />
      <OptimisticUiSimulator text="Com Optimistic UI" optimistic={true} error={error} />
    </div>
  );
};

export default OptimisticUiPages;
