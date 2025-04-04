import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
  const [background, setBackground] = useState('white'); // Default background color

  const updateSelectionStyle = (newBackground) => {
    setBackground(newBackground.background); // Update the background color
  };

  return (
    <div
      style={{
        backgroundColor: background,
        height: '100px',
        width: '100px',
        margin: '10px',
        display: 'inline-block',
        border: '1px solid black',
      }}
      data-testid={background} // Add data-testid for testing
      onClick={() => applyColor(updateSelectionStyle)} // Trigger applyColor on click
    >
      Selection Box
    </div>
  );
};

export default Selection;

