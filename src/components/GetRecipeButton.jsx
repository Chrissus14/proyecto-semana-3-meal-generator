import React from 'react';

const GetRecipeButton = props => (
  <button className="text-uppercase btn btn-outline-dark" onClick={props.event}>
    {props.name}
  </button>
);

export default GetRecipeButton;
