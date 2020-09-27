import React, { Component } from 'react';
import Recipe from './components/Recipe';
import Navigation from './components/Navigation';
import RecipeCard from './components/Card';
import './App.css';

import { Row, Col } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.selectNewRecipe = this.selectNewRecipe.bind(this);
    this.state = {
      recipes: [
        {
          title: 'Camburger',
          ingredients: [
            'Cam',
            'Burger'
          ],
          steps: [
            'In a large bowl combine the Cam and burger',
            'Enjoy!'
          ],
          id: 'camburger',
          chef: 'Cam',
          description: 'A peachy and flavourful vegan cheeseburger topped with fruity surprises.'
        },
        {
          title: 'Tombalaya',
          ingredients: [
            'Tom',
            'Balaya'
          ],
          steps: [
            'In a large bowl combine the Tom and balaya',
            'Enjoy!'
          ],
          id: 'tombalaya',
          chef: 'Tom',
          description: 'A peachy and flavourful vegan cheeseburger topped with fruity surprises.'
        },
      ],
      
      selectedRecipe: null
    }
  }

  selectNewRecipe(recipeId) {
    if(recipeId) {
      this.setState({
        ...this.state,
        selectedRecipe: recipeId
      });
    }
  }

  render(){
    let recipeToSelect;
    if(this.state.selectedRecipe) { 
      const filteredRecipes = this.state.recipes.filter((recipe) => recipe.id === this.state.selectedRecipe);  
      if(filteredRecipes.length > 0) { 
        recipeToSelect = filteredRecipes[0];
      }
  }
  return (
    <div className="App">
      <Navigation
        recipes={this.state.recipes}
        activeRecipe={this.state.selectedRecipe}
        recipeToSelect={this.selectNewRecipe}
      />
      <h1>Cook yourself delicious food, it's not that fucking hard!</h1>
      <Row>
        <Col xs={24} lg={12} style={ {'text-align': '-webkit-center', 'margin-top': '60px'} }>
          <RecipeCard
            title={this.state.recipes[0].title}
            description={this.state.recipes[0].description}
            instructions={this.state.recipes[0].ingredients[0]}
            steps={this.state.recipes[0].steps[0]}
          />
        </Col>
        <Col xs={24} lg={12} style={ {'text-align': '-webkit-center', 'margin-top': '60px'} }>
          <RecipeCard
            title={this.state.recipes[1].title}
            description={this.state.recipes[1].description}
            instructions={this.state.recipes[1].ingredients[0]}
            steps={this.state.recipes[1].steps[0]}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={24} lg={12} style={ {'text-align': '-webkit-center', 'margin-top': '60px'} }>
          <RecipeCard
            title={this.state.recipes[0].title}
            description={this.state.recipes[0].description}
          />
        </Col>
        <Col xs={24} lg={12} style={ {'text-align': '-webkit-center', 'margin-top': '60px'} }>
          <RecipeCard
            title={this.state.recipes[1].title}
            description={this.state.recipes[1].description}
          />
        </Col>
      </Row>
    </div>
  );
  }
  componentDidMount() {
    const recipeToShow = this.state.recipes[0].id || null;
    this.setState({
      ...this.state,
      selectedRecipe: recipeToShow
    });
  }
}

export default App;