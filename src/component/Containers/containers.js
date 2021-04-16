import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from "@material-ui/styles";
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
    container: {
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    }
,
    
  }));
export default function Containers(props) {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container  component="main" maxWidth="xs" className={classes.container}  style={{minHeight:'100vh'}}>
        {props.children}
      </Container>
    </React.Fragment>
  );
}
