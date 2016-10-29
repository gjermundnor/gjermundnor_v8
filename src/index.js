import React from 'react';
import { render } from 'react-dom';

// Import components
import Global from './components/Global';
import Home from './components/Home';
import Skills from './components/Skills';

// Import routers
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

// Import CSS
require("./global.scss");

const router = (
    <Router history={browserHistory}>
      <Route path="/" component={Global}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="skills" component={Skills}></Route>
      </Route>
    </Router>
);

render(
  router,
  document.getElementById('app')
);
