import React, { Component } from 'react';
import RecipeCard from '../components/Card';
import './Home.css';
import { Link } from 'react-router-dom';

import { Row, Col } from 'antd';

class Elise extends Component {
  constructor(props) {
    super(props);
    this.selectNewRecipe = this.selectNewRecipe.bind(this);
    this.state = {
      recipes: [
        {
            title: 'Casserole Surprise',
            ingredients: [
              'Casserole',
              'Surprise'
            ],
            steps: [
              'Throw every last veggie from your fridge into a casserole',
              'Cook 250g of pasta until al dente.',
              'Put casserole in oven for 30 mins'
            ],
            id: 'casserole-surprise',
            chef: 'Elise',
            description: 'A flavourful casserole with a kick!'
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
      <Row>
        <Col xs={24} lg={12} style={ {'text-align': '-webkit-center', 'margin-top': '60px'} }>
          <RecipeCard
            title={this.state.recipes[0].title}
            description={this.state.recipes[0].description}
            instructions={this.state.recipes[0].ingredients}
            steps={this.state.recipes[0].steps}
          />
        </Col>
      </Row>
      <Link to='/'>
          <h3>Home</h3>
      </Link>
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

export default Elise;