import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:200,
    background: theme.palette.color,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Appbar() {
  const classes = useStyles({color:'blue'});

  return (
    <div className={classes.root}>
      <AppBar position="static">
      </AppBar>
    </div>
  );
}
