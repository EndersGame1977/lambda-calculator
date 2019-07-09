import React from "react";

export const NumberButton = (props) => {
  return (
    
      <div className="col s4">
        <a class="btn-floating btn-large waves-effect waves-light blue "><i class="material-icons">{props.number}</i></a>
      </div>
   
  );
};
