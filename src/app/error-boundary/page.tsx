'use client'

import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import BugSimulator from "../components/BugSimulator/BugSimulator";
import { ErrorBoundary } from "../components/ErrorBoundary/ErrorBoundary";
import TypewriterTitle from "../components/TypewriterTitle/TypewriterTitle";

const ErrorBoundaryPages: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <div style={{ display: "flex", justifyContent: "center", padding: '1rem 0' }}>
        <TypewriterTitle text="Error Boundary" size="3rem" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        <div>
          <BugSimulator text="Componente funcionando direto na página!" />
        </div>

        <div>
          <ErrorBoundary fallback={
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '1.5rem', color: 'red' }}>
              <ExclamationTriangleIcon height={50} /> Oops! Ocorreu um erro.
            </div>
          }>
            <BugSimulator text="Componente funcionando dentro de um Error Boundary" />
          </ErrorBoundary>
        </div>
      </div>
    </div >
  );
};

export default ErrorBoundaryPages;
