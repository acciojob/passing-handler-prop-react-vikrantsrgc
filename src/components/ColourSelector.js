import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, key } = config;

  return (
    <button
      className="colour-selector-button"
      data-testid={key} // Add data-testid for testing
      onClick={() => selectNextBackground({ background })}
    >
      {config.label}
    </button>
  );
};

export default ColourSelector;
