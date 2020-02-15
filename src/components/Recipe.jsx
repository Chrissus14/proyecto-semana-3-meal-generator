import React from 'react';
import Video from './Video';

const Recipe = props => {
  return (
    <>
      <section className="mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <img
                src={props.recipe.mealNameThumb}
                alt="Imagen no encontrada"
                className="card-img-top img-fluid"
                style={{ maxHeight: '350px' }}
              />
            </div>
            <div className="col-md-8">
              <h2>{props.recipe.mealName}</h2>
              <p>{props.recipe.instructions}</p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <p className="h2 mt-4">Category: {props.recipe.mealCategory}</p>
              <h3 className="mt-4 mb-3">Ingredients</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  {props.recipe.ingredient1} - {props.recipe.measure1}
                </li>
                <li className="list-group-item">
                  {props.recipe.ingredient2} - {props.recipe.measure2}
                </li>
                <li className="list-group-item">
                  {props.recipe.ingredient3} - {props.recipe.measure3}
                </li>
                <li className="list-group-item">
                  {props.recipe.ingredient4} - {props.recipe.measure4}
                </li>
                <li className="list-group-item">
                  {props.recipe.ingredient5} - {props.recipe.measure5}
                </li>
                <li className="list-group-item">
                  {props.recipe.ingredient6} - {props.recipe.measure6}
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <Video video={props.recipe.mealVideo} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipe;
