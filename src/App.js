import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Cam from './pages/Cam';
import Rachel from './pages/Rachel';
import Tom from './pages/Tom';
import Elise from './pages/Elise';
import FourOhFour from './pages/404';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <Router>
        <div>
          <Navigation
            recipes={this.state.recipes}
            activeRecipe={this.state.selectedRecipe}
            recipeToSelect={this.selectNewRecipe}
          />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cam" component={Cam}/>
            <Route path="/rachel" component={Rachel}/>
            <Route path="/tom" component={Tom}/>
            <Route path="/elise" component={Elise}/>
            <Route default component={FourOhFour}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;