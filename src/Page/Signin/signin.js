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
import { Button, Typography } from "@material-ui/core";
export default function Signin() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Containers>
      <Papers><GridItem xs={12}>
        <GridConatiner spacing={4}>
        <GridItem xs={12}>
            <Typography>Login </Typography>
          </GridItem>
          <GridItem xs={12}>
            <Input  type="email" placeholder="Email"  />
          </GridItem>
          <GridItem xs={12}>
            <Input  type ="password" placeholder="Password" />
          </GridItem>
          <GridItem xs={12}>
            <Btn name={"my"} />
            </GridItem>
        </GridConatiner>
        </GridItem>
      </Papers>
    </Containers>
  );
}
