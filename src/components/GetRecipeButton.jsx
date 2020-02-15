import React from 'react';

const GetRecipeButton = props => (
  <button className="text-uppercase btn btn-outline-dark" onClick={props.event}>
    Obtener Receta
  </button>
);

export default GetRecipeButton;
