
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: theme.palette.inputbox
}));

export default function Input(props) {
  const classes = useStyles();
  return (
      <TextField
      className={classes.root}
      id="outlined-basic" 
      label={props.label}
       placeholder={props.placeholder}
       type={props.type}
       variant="outlined"
       color="primary"
       required
       fullWidth
       />
  );
}
