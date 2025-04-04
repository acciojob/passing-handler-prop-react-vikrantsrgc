import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background } = config;

  return (
    <button 
      className="colour-selector-button" // Updated to use a proper class name
      onClick={() => selectNextBackground({ background })} // Simplified object shorthand
    >
      Selection
    </button>
  );
};

export default ColourSelector;
