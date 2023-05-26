import React from 'react'
import AddArgument from './AddArgument'
import AddOp from './AddOp';

function ShowData() {
  return (
    <div>
        <div>
        <AddArgument />
        </div>
        <div>
         <AddOp />
        </div>
        <div>
            <h2>result : undefined</h2>
        </div>
    </div>
  )
}

export default ShowData