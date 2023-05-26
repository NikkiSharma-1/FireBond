import React from 'react';
import { useState } from 'react';

function ArgumentChoice() {
    const [argumentValue, setArgumentValue] = useState('MyArg');

    const handleArgumentChange = (event) => {
        setArgumentValue(event.target.value);
      };
  return (
    <div>
         <select id="argumentDropdown" value={argumentValue} onChange={handleArgumentChange}>
                <option value="MyArg">MyArg</option>
                <option value="X">X</option>
              </select>
    </div>
  )
}

export default ArgumentChoice