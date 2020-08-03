import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import ClimbPage from '../components/ClimbPage';
import ClimbHome from '../components/ClimbHome';
import { createBrowserHistory } from "history";
let data = require('../data/data.json');

const AppRouter = () => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route path="/" exact={true}>
        <ClimbHome data={data}/>
      </Route>
      <Route path="/:idName" exact={true}>
        <ClimbPage data={data}/>
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
