import React, { useState } from 'react';

export default function Estado() {
  const [aumentar, setAumentar] = useState(0);

  const handleAumentar = () => {
    setAumentar(aumentar + 1);
  };

  const handleDiminuir = () => {
    setAumentar(aumentar - 1);
  };

  return (
    <>
      <h1>Votos: {aumentar}</h1>
      <button onClick={handleAumentar}>Aumentar</button>
      <button onClick={handleDiminuir}>Diminuir</button>
    </>
  );
}
