/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';

import history from './utils/history';

import './assets/tailwind.css';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById('root'));
