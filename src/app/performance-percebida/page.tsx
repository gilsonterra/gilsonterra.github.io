'use client'

import { useState } from "react";
import Button from "../components/Button/Button";
import DottedShadowText from "../components/DottedShadowText/DottedShadowText";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Spinner from "../components/Spinner/Spinner";

const TIMEOUT = 3000;

type View = 'spinner' | 'progressBar' | 'text';

const PerceivedPerformancePages: React.FC = () => {
  const [view, setView] = useState<View | null>(null);

  const handleViewChange = (view: View) => {
    setView(view);
    setTimeout(() => setView(null), TIMEOUT)
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <div style={{ display: "flex", justifyContent: "center", padding: '1rem 0' }}>
        <DottedShadowText text="Performance Percebida" size="3rem" />
      </div>
      <div>
        {view === null && (
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Button onClick={() => handleViewChange('spinner')}>Spinner</Button>
            <Button onClick={() => handleViewChange('progressBar')}> ProgressBar</Button>
            <Button onClick={() => handleViewChange('text')}>Texto</Button>
          </div>
        )}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
          {view === 'spinner' && (<Spinner size={80} />)}
          {view === 'progressBar' && (<ProgressBar width={100} time="3s" />)}
          {view === 'text' && (<div style={{ fontSize: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '400px', textAlign: 'center' }}>
            Quando você esta lendo, você entra em modo de espera ativa. E não percebe o tempo passar.
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default PerceivedPerformancePages;
