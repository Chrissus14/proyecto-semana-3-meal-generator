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
  }

  addRecipe() {
    let { recipesArray } = this.state;
    let renderComp = [];
    const size = recipes.length;
    let randomNumber = Math.round(Math.random() * size);
    recipesArray.push(recipes[randomNumber]);
    if (recipesArray > 0) {
      renderComp = recipesArray.pop();
    }
    this.setState({
      recipesArray: renderComp
    });
    console.log(randomNumber);
    console.log(this.state.recipesArray);
  }
  render() {
    return (
      <>
        <h1 className="font-italic font-weight-bold">¿Que cenamos?</h1>
        <h3 className="font-italic font-weight-bold">
          ¿Cansado de hacer esa misma pregunta? <br /> haga clic para obtener una receta al azar
        </h3>
        <GetRecipeButton event={this.addRecipe} />
        {this.state.recipesArray.length > 0 && <Recipe recipe={this.state.recipesArray} />}
      </>
    );
  }
}

export default RecipesGenerator;
