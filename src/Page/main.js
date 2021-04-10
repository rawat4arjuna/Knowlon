import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import { ThemeProvider } from "@material-ui/core";
import light from "../Theme/lightTheme";
import dark from "../Theme/darkTheme";
import { createMuiTheme } from "@material-ui/core/styles";
import { ContextOne } from "../../src/Context/AppContext";
import {Homepage,Signup,Signin} from "./pages"
export default function Main() {
  let { state } = useContext(ContextOne);
  let appliedTheme = createMuiTheme(state.theme ? light : dark);
  return (
    <ThemeProvider theme={appliedTheme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Signin}/>
          <Route exact path="/home" component={Signin}/>
          <Route exact path="/signup" component={Signin}/>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
