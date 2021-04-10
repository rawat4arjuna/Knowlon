import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./login";
import { ContextOneProvider } from "../Context/AppContext";
export default function Main() {
  return (
    <ContextOneProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </ContextOneProvider>
  );
}
