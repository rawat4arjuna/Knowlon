import React, { useContext } from "react";
import { ContextOne } from "../Context/AppContext";
import Appbar from "../component/appBar";
import { changeTheme } from "../Context/userAction";
import { Paper } from "@material-ui/core";
export default function Login() {
  let { state, dispatch } = useContext(ContextOne);
  React.useEffect(() => {
    console.log("ppppp,", state);
  }, [state]);
  const changetheme = () => {
    changeTheme({ theme: false }, dispatch);
  };
  return (
    <>
      <Appbar />
      ho
      <Paper>
          hoho
      </Paper>
      <button
        onClick={() => {
          changetheme();
        }}
      >
          click
      </button>
    </>
  );
}
