import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';

class Navigation extends Component {
  state = {
    current: 'home',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    return(
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        {/* <Link to='/cam'> */}
          <Menu.Item key="CamRecipes">
            <Link to='/cam'>Cam's Recipes</Link>
          </Menu.Item>
        {/* </Link> */}
        {/* <Link to='/tom'> */}
          <Menu.Item key="TomRecipes">
            <Link to='/tom'>Tom's Recipes</Link>
          </Menu.Item>
        {/* </Link> */}
        {/* <Link to='/rachel'> */}
          <Menu.Item key="RachelRecipes">
            <Link to='/rachel'>Rachel's Recipes</Link>
          </Menu.Item>
        {/* </Link> */}
        {/* <Link to='/elise'> */}
          <Menu.Item key="EliseRecipes">
            <Link to='/elise'>Elise's Recipes</Link>
          </Menu.Item>
        {/* </Link> */}
      </Menu>
    );
  }
}

Navigation.propTypes = {
    activeRecipe: PropTypes.string.isRequired,
    recipes: PropTypes.array.isRequired,
    recipeToSelect: PropTypes.func.isRequired
};

export default Navigation;