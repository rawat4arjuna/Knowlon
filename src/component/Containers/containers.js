import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from "@material-ui/styles";
import Container from '@material-ui/core/Container';
import background from '../../Img/background.svg'
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
      <Container  component="main" maxWidth="xs" className={classes.container}  style={{minHeight:'100vh',minWidth:'100vw',backgroundImage:`url(${background})` ,backgroundPosition:'center'}}>
        {props.children}
      </Container>
    </React.Fragment>
  );
}
