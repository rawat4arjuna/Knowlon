import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './login'
export default function Main() {
  return (
   <Router>
      <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
   </Router>
  );
}
