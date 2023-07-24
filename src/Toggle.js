import React, { useState } from 'react';

const Toggle = () => {
  const [isOff, setIsoff] = useState(false);

  const handleToggle = () => {
    setIsoff(!isOff);
  };

  return (
    <div>
      <button onClick={handleToggle}>
      <span>click</span>  
      </button>
      <h1>{isOff ? 'OFF' : 'ON'}</h1>
    </div>
  );
};

export default Toggle;