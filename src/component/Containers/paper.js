import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    margin:'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth:400,
    padding:theme.spacing(2)
  }
  ,
}));

export default function Papers(props) {
  const classes = useStyles();

  return <Paper className={classes.root} style={{padding:10}}>
      {props.children}
  </Paper>;
}
