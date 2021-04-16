import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./signinSlice";
import {
  Btn,
  Input,
  Papers,
  Containers,
  GridConatiner,
  GridItem,
} from "../../Component/component";
import { makeStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
  cardTitle: theme.palette.loginText
}));
export default function Signin() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const classes = useStyles();
   return (
    <Containers>
      <Papers><GridItem xs={12}>
        <GridConatiner spacing={4}>
        <GridItem xs={12}>
            <Typography variant="h4" className={classes.cardTitle}>LOGIN </Typography>
          </GridItem>
          <GridItem xs={12}>
            <Input  type="email" placeholder="Email"  />
          </GridItem>
          <GridItem xs={12}>
            <Input  type ="password" placeholder="Password" />
          </GridItem>
          <GridItem xs={12}>
            <Btn name={"Continue"} />
            </GridItem>
        </GridConatiner>
        </GridItem>
      </Papers>
    </Containers>
  // <Container component="main" maxWidth="xs">
  //     <CssBaseline />
  //     <div className={classes.paper}>
  //       <Avatar className={classes.avatar}>
  //         <LockOutlinedIcon />
  //       </Avatar>
  //       <Typography component="h1" variant="h5">
  //         Sign in
  //       </Typography>
  //       <form className={classes.form} noValidate>
  //         <TextField
  //           variant="outlined"
  //           margin="normal"
  //           required
  //           fullWidth
  //           id="email"
  //           label="Email Address"
  //           name="email"
  //           autoComplete="email"
  //           autoFocus
  //         />
  //         <TextField
  //           variant="outlined"
  //           margin="normal"
  //           required
  //           fullWidth
  //           name="password"
  //           label="Password"
  //           type="password"
  //           id="password"
  //           autoComplete="current-password"
  //         />
  //         <FormControlLabel
  //           control={<Checkbox value="remember" color="primary" />}
  //           label="Remember me"
  //         />
  //         <Button
  //           type="submit"
  //           fullWidth
  //           variant="contained"
  //           color="primary"
  //           className={classes.submit}
  //         >
  //           Sign In
  //         </Button>
  //         <Grid container>
  //           <Grid item xs>
  //             <Link href="#" variant="body2">
  //               Forgot password?
  //             </Link>
  //           </Grid>
  //           <Grid item>
  //             <Link href="#" variant="body2">
  //               {"Don't have an account? Sign Up"}
  //             </Link>
  //           </Grid>
  //         </Grid>
  //       </form>
  //     </div>
  //     <Box mt={8}>
  //       {/* <Copyright /> */}
  //     </Box>
  //   </Container>
  )
}
