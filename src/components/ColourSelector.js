import React from 'react';

const ColourSelector = ({ config, selectNextBackground }) => {
  const handleClick = () => {
    selectNextBackground({ background: config.background });
  };

  return (
    <button className={config.classname} data-testid={config.key} onClick={handleClick}>
      {config.label}
    </button>
  );
};


export default ColourSelector;
