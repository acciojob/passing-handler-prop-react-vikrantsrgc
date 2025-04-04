import React, { useState } from 'react';
import ColourSelector from './ColourSelector';

const Selection = () => {
  const [background, setBackground] = useState('white'); // Default background color

  const selectNextBackground = (newConfig) => {
    setBackground(newConfig.background); // Update the background color
  };

  const config = { background: 'blue' }; // Example configuration

  return (
    <div style={{ backgroundColor: background, height: '100vh', padding: '20px' }}>
      <h1>Background Selector</h1>
      <ColourSelector config={config} selectNextBackground={selectNextBackground} />
    </div>
  );
};

export default Selection;

