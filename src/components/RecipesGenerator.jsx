import React, { Component } from 'react';
import GetRecipeButton from './GetRecipeButton';
import recipes from '../recipesData';
import Recipe from './Recipe';

class RecipesGenerator extends Component {
  constructor() {
    super();
    this.state = {
      randomRecipe: {},
      recipesArray: []
    };
    this.addRecipe = this.addRecipe.bind(this);
    this.lastRecipe = this.lastRecipe.bind(this);
  }

  // Agrega un receta aleatoria
  addRecipe() {
    // tamaño total de los datos
    const size = recipes.length - 1;

    // numero aleatorio entre 0 y size
    let randomNumber = Math.round(Math.random() * size);

    // obtiene un elemento aleatorio de los datos
    let data = recipes[randomNumber];

    //let { randomRecipe } = this.state;
    let { recipesArray } = this.state;
    recipesArray.push(data);

    // actualiza el estado
    this.setState({
      randomRecipe: { ...data },
      recipesArray: [...recipesArray]
    });
    console.log(this.state.randomRecipe);
  }

  // regresa a la receta anterior
  lastRecipe() {
    let { recipesArray } = this.state;
    let last = recipesArray.pop();
    this.setState({
      randomRecipe: last
    });
    // console.log(this.state.randomRecipe);
  }

  render() {
    return (
      <>
        <h1 className="font-italic font-weight-bold">¿Que cenamos?</h1>
        <h3 className="font-italic font-weight-bold">
          ¿Cansado de hacer esa misma pregunta? <br /> haga clic para obtener una receta al azar
        </h3>
        <div className="d-flex">
          <GetRecipeButton event={this.addRecipe} name={'obtener receta'} />
          <GetRecipeButton event={this.lastRecipe} name={'receta anterior'} />
        </div>
        {this.state.recipesArray.length > 0 && <Recipe recipe={this.state.randomRecipe} />}
      </>
    );
  }
}

export default RecipesGenerator;
