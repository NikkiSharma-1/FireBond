import React from 'react';
import { useState } from 'react';
import ConstantChoice from './ConstantChoice';
import ArgumentChoice from './ArgumentChoice';
import OrChoice from './OrChoice';
import AndChoice from './AndChoice';


function AddOp() {
        const [selectedOption, setSelectedOption] = useState('select');
        
        const handleChange = (event) => {
          setSelectedOption(event.target.value);
        };

        return (
          <div>
            <select id="dropdown" value={selectedOption} onChange={handleChange}>
              <option value="select" disabled selected>Select...</option>
              <option value="Constant">Constant</option>
              <option value="Argument">Argument</option>
              <option value="And">And</option>
              <option value="Or">Or</option>
            </select>
            <button>X</button>
      
            {selectedOption === 'Constant' && (
              <div>
                <ConstantChoice />
              </div>
            )}

          {selectedOption === 'Argument' && (
            <div>
             <ArgumentChoice />
              </div>
        )}

      {selectedOption === 'And' && (
        <div>
        <AndChoice />
        </div>
      )}

        {selectedOption === 'Or' && (
            <div>
         <OrChoice />
        </div>
      )}
        </div>
        )
      };

export default AddOp