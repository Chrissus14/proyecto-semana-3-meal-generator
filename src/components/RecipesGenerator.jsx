import React, { Component } from 'react';
import GetRecipeButton from './GetRecipeButton';
import recipes from '../recipesData';
import Recipe from './Recipe';

class RecipesGenerator extends Component {
  constructor() {
    super();
    this.state = {
      recipesArray: []
    };
    this.addRecipe = this.addRecipe.bind(this);
    this.lastRecipe = this.lastRecipe.bind(this);
  }

  addRecipe() {
    // tamaño total de los datos
    const size = recipes.length - 1;

    // numero aleatorio entre 0 y size
    let randomNumber = Math.round(Math.random() * size);

    // obtiene un elemento aleatorio de los datos
    let data = recipes[randomNumber];

    let { recipesArray } = this.state;

    // añade al arreglo del estado una receta aleatoria
    recipesArray.push(data);

    // obtiene el ultimo elemento agregado al estado
    const lastItem = [recipesArray.pop()];

    // actualiza el estado
    this.setState({
      recipesArray: lastItem
    });
  }

  render() {
    return (
      <>
        <h1 className="font-italic font-weight-bold">¿Que cenamos?</h1>
        <h3 className="font-italic font-weight-bold">
          ¿Cansado de hacer esa misma pregunta? <br /> haga clic para obtener una receta al azar
        </h3>
        <GetRecipeButton event={this.addRecipe} name={'obtener receta'} />
        {/* <GetRecipeButton event={this.lastRecipe} name={'receta anterior'} /> */}
        {this.state.recipesArray.length > 0 && <Recipe recipe={this.state.recipesArray[0]} />}
      </>
    );
  }
}

export default RecipesGenerator;
