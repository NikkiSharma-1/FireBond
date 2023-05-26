import React from 'react';
import { useState } from 'react';

function AddArgument() {
    const [showForm, setShowForm] = useState(false);
    const [inputValue, setInputValue] = useState('');
  
    const handleButtonClick = () => {
      setShowForm(true);
    };
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform any necessary form submission logic here
      console.log('Submitted value:', inputValue);
      // Reset form
      setInputValue('');
      setShowForm(false);
    };
  
    return (
      <div>
        <div>
        <input type='text' />
        <select>
            <option>true</option>
            <option>false</option>
        </select>
        </div>
        
        {showForm && (
          <form onSubmit={handleSubmit}>
            <div>
            <input
              type="text"
              id="inputField"
              value={inputValue}
              onChange={handleInputChange}
            />
            <select>
            <option>true</option>
            <option>false</option>
        </select></div>
          </form>
        )}
        <div>
        <button onClick={handleButtonClick}>+ add arg</button>
        </div>
      </div>
    );
  };

export default AddArgument