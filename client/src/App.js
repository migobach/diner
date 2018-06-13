import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import NoMatch from './components/NoMatch'
import Home from './components/Home'
import './App.css';

const App = () => (
  <Fragment>
    <Switch>
      <Route exact Path="/" component={Home} />



      <Route component={NoMatch} />
    </Switch>
  </Fragment>
)

export default App;
