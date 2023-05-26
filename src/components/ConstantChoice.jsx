import React from 'react';
import { useState } from 'react';

function ConstantChoice() {
    const [constantValue, setConstantValue] = useState('True'); 

    const handleConstantChange = (event) => {
        setConstantValue(event.target.value);
      };
  return (
    <div>
        <select id="constantDropdown" value={constantValue} onChange={handleConstantChange}>
                  <option value="True">True</option>
                  <option value="False">False</option>
                </select>
    </div>
  )
}

export default ConstantChoice