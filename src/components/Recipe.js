import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Recipe extends Component {
    render() {
    const ingredients = this.props.ingredients.map((ingredient) => <p>{ingredient}</p>);
    const steps = this.props.steps.map((step) => <p>{step}</p>);
    return(
        <div className="Recipe">
          <h2 className="Recipe__title">{this.props.title}</h2>
          <h3 className="Recipe__sub-title">Ingredients</h3>
            {ingredients}
          <h3 className="Recipe__sub-title">Steps</h3>
          {steps}
        </div>
    )
    }
}

Recipe.propTypes = {
    ingredients: PropTypes.array.isRequired,
    steps: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default Recipe;