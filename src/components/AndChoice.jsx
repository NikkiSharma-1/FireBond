import React from 'react';
import { useState } from 'react';
import ConstantChoice from './ConstantChoice';
import ArgumentChoice from './ArgumentChoice';
import OrChoice from './OrChoice';

function AndChoice() {
    const [andDropdown1, setAndDropdown1] = useState('select');
    const [andDropdown2, setAndDropdown2] = useState('select');
    const [selectedOption, setSelectedOption] = useState('And');
    

    const handleAndDropdown1Change = (event) => {
        setAndDropdown1(event.target.value);
        setSelectedOption(event.target.value);
      };
    
      const handleAndDropdown2Change = (event) => {
        setAndDropdown2(event.target.value);
        setSelectedOption(event.target.value);
      };
  return (
    <div>
         <div>
          <select id="andDropdown1" value={andDropdown1} onChange={handleAndDropdown1Change}>
            <option value="select" disabled selected>Select...</option>
            <option value="Constant">Constant</option>
            <option value="Argument">Argument</option>
            <option value="And">And</option>
            <option value="Or">Or</option>
          </select>
          <button>X</button>
          </div>
           <div>
          <select id="andDropdown2" value={andDropdown2} onChange={handleAndDropdown2Change}>
          <option value="select" disabled selected>Select...</option>
            <option value="Constant">Constant</option>
            <option value="Argument">Argument</option>
            <option value="And">And</option>
            <option value="Or">Or</option>
          </select>
          <button>X</button>
        </div>
        <button>+ add op</button>

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

        {selectedOption === 'Or' && (
            <div>
         <OrChoice />
        </div>
      )}
    </div>
  )
}

export default AndChoice