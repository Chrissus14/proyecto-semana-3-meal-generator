import React from 'react';

const Recipe = props => (
  <>
    <section>
      <div className="container-fluid">
        <div className="row">
          <picture className="col-md-6">
            <img src={props.recipe.mealNameThumb} alt="..." className="card-img-top img-fluid" />
          </picture>
          <div className="col-md-6">
            <h2>{props.recipe.mealName}</h2>
            <p>{props.recipe.instructions}</p>
          </div>
        </div>
      </div>
      <p>Category: {props.recipe.mealCategory}</p>
      <p>Area: American</p>
      <p>Targs: Breakfast, desert, sweet, fruity</p>
      <h3>Ingredients</h3>
      <ul>
        <li>
          {props.recipe.ingredient1} - {props.recipe.measure1}
        </li>
        <li>
          {props.recipe.ingredient2} - {props.recipe.measure2}
        </li>
      </ul>
    </section>
  </>
);

export default Recipe;
