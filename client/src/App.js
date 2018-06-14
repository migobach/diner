import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import NoMatch from './components/NoMatch'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Menus from './components/Menus'
import Dishes from './components/Dishes'


const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/menus" component={Menus} />
      <Route exact path="/menus/:id" component={Dishes} />



      <Route component={NoMatch} />
    </Switch>
  </Fragment>
)

export default App;
