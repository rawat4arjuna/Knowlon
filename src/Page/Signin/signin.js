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
import { Button } from "@material-ui/core";
export default function Signin() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Containers>
      <Papers>
        <GridConatiner spacing={3}>
          <GridItem xs={12} sm={12}>
            <Input />
          </GridItem>
          <GridItem xs={12} sm={12}>
            <Input />
          </GridItem>
          <GridItem xs={12} sm={12}>
            <Btn name={"my"} />
          </GridItem>
        </GridConatiner>
      </Papers>
    </Containers>
  );
}
