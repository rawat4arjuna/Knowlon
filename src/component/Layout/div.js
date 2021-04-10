import React from 'react'
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: theme.palette.root,
}));
export default function Div(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {props.children}
        </div>
    )
}
