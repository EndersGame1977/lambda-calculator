import React, { useState } from "react";

//import any components needed
import { SpecialButton } from './SpecialButton'

//Import your array data to from the provided data file
import { specials } from '../../../data'

export const Specials = () => {
  // [x] STEP 2 - add the imported data to state
  const [special, setSpecial] = useState(specials);

  return (
    <div className="row">
        {special.map(special => 
        <SpecialButton special={special} />
      )}
    </div>
  );
};
