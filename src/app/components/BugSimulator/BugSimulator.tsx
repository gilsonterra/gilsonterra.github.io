import React, { useState } from "react";
import Button from "../Button/Button";

type BugSimulatorProps = {
  text: string;
};

const BugSimulator = ({ text }: BugSimulatorProps) => {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error("Simulação de erro!");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid var(--border-strong)",
        background: "var(--background-elevated)",
        padding: "20px",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-md)",
      }}
    >
      <div style={{ fontSize: "1.5rem", textAlign: "center", color: "var(--foreground)" }}>
        {text}
      </div>
      <Button onClick={() => setCrash(true)}>Forçar erro</Button>
    </div>
  );
};

export default BugSimulator;
