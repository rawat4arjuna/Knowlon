import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./login";
import { ContextOneProvider } from "../Context/AppContext";
import React, { useEffect, useContext } from "react";
import { Paper, ThemeProvider } from "@material-ui/core";
import light from "../Theme/lightTheme";
import dark from "../Theme/darkTheme";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ContextOne } from "../../src/Context/AppContext";
const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));
export default function Main() {
  // const [theme, setTheme] = useState(false);
  // let {state ,dispatch} = useContext(ContextOne);
  let {state} = useContext(ContextOne);
  let appliedTheme;
  useEffect(() => {
    console.log(state);
   
  }, [state]);
  const classes = useStyles();
  appliedTheme = createMuiTheme(state.theme ? light : dark);
  return (
    <ThemeProvider theme={appliedTheme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
