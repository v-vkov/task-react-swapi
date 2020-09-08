import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import People from './components/People';
import Person from './components/Person';



export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <People />
        </Route>
        <Route path="/:personId">
          <Person />
        </Route>
      </Switch>
    </Router>
  );
}
