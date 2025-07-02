'use client'

import { useState } from "react";
import Button from "../components/Button/Button";
import DottedShadowText from "../components/DottedShadowText/DottedShadowText";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Spinner from "../components/Spinner/Spinner";

const DEFAULT_TIMEOUT = 3000;

type View = 'spinner' | 'progressBar' | 'text';

const PerceivedPerformancePages: React.FC = () => {
  const [view, setView] = useState<View | null>(null);
  const [delay, setDelay] = useState(DEFAULT_TIMEOUT);

  const handleViewChange = (view: View) => {
    setView(view);
    setTimeout(() => setView(null), delay)
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: 'wrap', gap: '20px', padding: '1rem 0' }}>
        <DottedShadowText text="Performance Percebida" size="3rem" />
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <input
            type="range"
            id="inputRange"
            name="inputRange"
            min="1000"
            max="10000"
            value={delay}
            onChange={(e) => setDelay(Number(e.target.value))}
            step="1000" />
        </div>
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
          {view === 'progressBar' && (<ProgressBar width={100} time={`${delay}ms`} />)}
          {view === 'text' && (<div style={{ fontSize: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '400px', textAlign: 'center' }}>
            Quando você esta lendo, você entra em modo de espera ativa. E não percebe o tempo passar.
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default PerceivedPerformancePages;
