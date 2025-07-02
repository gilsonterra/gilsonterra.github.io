import React, { useState } from 'react';
import Button from '../Button/Button';

type BugSimulatorProps = {
  text: string;
};

const BugSimulator = ({ text }: BugSimulatorProps) => {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error('Simulação de erro!');
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid #9B4DCA',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{ fontSize: '1.5rem', textAlign: 'center' }}>{text}</div>
      <Button onClick={() => setCrash(true)}>Forçar erro</Button>
    </div >
  );
};

export default BugSimulator;
