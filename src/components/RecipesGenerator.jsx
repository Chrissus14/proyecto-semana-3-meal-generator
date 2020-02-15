import React, { Component } from 'react';
import GetRecipeButton from './GetRecipeButton';
import recipes from '../recipesData';
import Recipe from './Recipe';

class RecipesGenerator extends Component {
  constructor() {
    super();
    this.state = {
      randomRecipe: {},
      lastItem: []
    };
    this.addRecipe = this.addRecipe.bind(this);
    //this.lastRecipe = this.lastRecipe.bind(this);
  }

  addRecipe() {
    // tamaño total de los datos
    const size = recipes.length - 1;

    // numero aleatorio entre 0 y size
    let randomNumber = Math.round(Math.random() * size);

    // obtiene un elemento aleatorio de los datos
    let data = recipes[randomNumber];

    //let { randomRecipe } = this.state;
    let { lastItem } = this.state;
    lastItem.push(data);

    // añade al arreglo del estado una receta aleatoria
    //randomRecipe.push(data);

    // obtiene el ultimo elemento agregado al estado
    //const lastItem = [randomRecipe.pop()];

    // actualiza el estado
    this.setState({
      randomRecipe: { ...data },
      lastItem: lastItem
    });
    console.log(this.state.randomRecipe);
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
        {this.state.lastItem.length > 0 && <Recipe recipe={this.state.randomRecipe} />}
      </>
    );
  }
}

export default RecipesGenerator;
