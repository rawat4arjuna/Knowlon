import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: theme.palette.loginpaper,
}));

export default function Papers(props) {
  const classes = useStyles();

  return <Paper>
      {props.children}
  </Paper>;
}
