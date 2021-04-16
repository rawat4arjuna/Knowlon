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
import { makeStyles } from "@material-ui/core/styles";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  cardTitle: {
    color: theme.palette.primary.main,
  },
}));
export default function Signin() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Containers>
      <Papers>
        <GridItem xs={12}>
          <GridConatiner spacing={4}>
            <GridItem xs={12}>
              <Typography variant="h4" className={classes.cardTitle}>
                LOGIN{" "}
              </Typography>
            </GridItem>
            <GridItem xs={12}>
              <Input type="email" placeholder="Email" />
            </GridItem>
            <GridItem xs={12}>
              <Input type="password" placeholder="Password" />
            </GridItem>
            <GridItem xs={12}>
              <Btn name={"Continue"} />
            </GridItem>
          </GridConatiner>
        </GridItem>
        <Grid container style={{ marginTop: "10px" }}>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Papers>
    </Containers>
  );
}
