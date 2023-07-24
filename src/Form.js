import React, { useState } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log("You entered " + {inputValue});
    
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;