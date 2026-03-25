'use client'
import { useState } from "react";
import TypewriterTitle from "../components/TypewriterTitle/TypewriterTitle";
import OptimisticUiSimulator from "../components/OptimisticUiSimulator/OptimisticUiSimulator";

const OptimisticUiPages: React.FC = () => {
  const [error, setError] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <div style={{ display: "flex", justifyContent: "center", padding: '1rem 0', flexWrap: 'wrap', gap: '20px' }}>
        <TypewriterTitle text="Optimistic UI" size="3rem" />
        <label style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input type="checkbox" style={{ transform: 'scale(1.5)' }} checked={error} onChange={(e) => setError(e.target.checked)} />
          <span>Simular Erro:</span> <b>{error ? 'SIM' : 'NÃO'}</b>
        </label>
      </div>
      <OptimisticUiSimulator showLoading={true} text="Com spinner" error={error} />
      <OptimisticUiSimulator text="Sem Optimistic UI" error={error} />
      <OptimisticUiSimulator text="Com Optimistic UI" optimistic={true} error={error} />
    </div>
  );
};

export default OptimisticUiPages;
