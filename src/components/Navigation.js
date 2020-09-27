import React, { Component } from 'react';
import { Menu } from 'antd';

import PropTypes from 'prop-types';

class Navigation extends Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  render() {
    const { SubMenu } = Menu;
    const { current } = this.state;
    return(
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <SubMenu key="CamRecipes" title="Cam's Recipes">
          <Menu.Item key="camburger">Camburger</Menu.Item>
        </SubMenu>
        <SubMenu key="TomRecipes" title="Tom's Recipes">
          <Menu.Item key="tombalaya">Tombalaya</Menu.Item>
        </SubMenu>
        <SubMenu key="RachelRecipes" title="Rachel's Recipes">
          <Menu.Item key="openfacedsammy">Open Faced Sandwich</Menu.Item>
        </SubMenu>
        <SubMenu key="EliseRecipes" title="Elise's Recipes">
          <Menu.Item key="ramen">Special Ramen</Menu.Item>
        </SubMenu>
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