import React from 'react';
import { useState } from 'react';

function OrChoice() {
    const [orDropdown, setOrDropdown] = useState('select');

    
    const handleOrDropdownChange = (event) => {
        setOrDropdown(event.target.value);
      };

      return(
        <div>
           <div>
          <select id="orDropdown" value={orDropdown} onChange={handleOrDropdownChange}>
          <option value="select" disabled selected>Select...</option>
            <option value="Constant">Constant</option>
            <option value="Argument">Argument</option>
            <option value="And">And</option>
            <option value="Or">Or</option>
          </select>
          <button>X</button>
        </div>
        <button>+ add op</button> 
        </div>
      );
}

export default OrChoice