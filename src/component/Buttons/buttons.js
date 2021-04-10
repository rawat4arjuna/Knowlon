import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: theme.palette.primaryBtn,
}));
export default function Btn(props) {
  const classes = useStyles();
  return (
    <Button
      className={classes.root}
      onClick={() => {
        props.onClick();
      }}
    >
      {props.name}
    </Button>
  );
}
