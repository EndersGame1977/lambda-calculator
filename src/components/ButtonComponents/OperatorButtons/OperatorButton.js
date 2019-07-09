import React from "react";

export const OperatorButton = (props) => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <a class="btn-floating btn-large waves-effect waves-light blue lighten-3"><i class="material-icons">{props.operator.char}</i></a>
    </div>
  );
};
