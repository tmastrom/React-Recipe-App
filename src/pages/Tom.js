import React, { Component } from 'react';
import RecipeCard from '../components/Card';
import './Home.css';
import { Link } from 'react-router-dom';

import { Row, Col } from 'antd';

class Tom extends Component {
  constructor(props) {
    super(props);
    this.selectNewRecipe = this.selectNewRecipe.bind(this);
    this.state = {
      recipes: [
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
            description: 'A vegan masterpiece containing all of the softest veggies around.'
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

export default Tom;