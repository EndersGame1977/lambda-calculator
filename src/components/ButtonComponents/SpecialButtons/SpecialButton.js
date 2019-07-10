import React from "react";

export const SpecialButton = (props) => {
  return (
    <div className="col s4">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <a class="btn-floating btn-large waves-effect waves-light blue lighten-2"><i class="material-icons">{props.special}</i></a>
    </div>
  );
};
