import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  root: theme.palette.griditems,
}));
export default function GridItem(props) {
    const classes = useStyles();
  return (
        <Grid item className={classes.root} 
        xs={props.xs} sm={props.sm} md={props.md}
         lg={props.lg} xl={props.xl}>
            {props.children}
        </Grid>
  );
}
