import React, { useState } from "react";
//import any components needed
import { NumberButton } from './NumberButton'

//Import your array data to from the provided data file
import { numbers } from '../../../data';

export const Numbers = () => {
  // [x] STEP 2 - add the imported data to state
  const [number, setNumber] = useState(numbers);

  return (
    <div className="row">
        {number.map(number => 
        <NumberButton number={number} />
      )}
    </div>
  );
};
