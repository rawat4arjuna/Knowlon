import React, { useContext } from "react";
import { ContextOne } from "../Context/AppContext";
import Appbar from "../Component/appBar";
import { changeTheme } from "../Context/userAction";
import { Paper } from "@material-ui/core";
export default function Login() {
  let { state, dispatch } = useContext(ContextOne);
  React.useEffect(() => {
    console.log("ppppp,", state);
  }, [state]);
  const changetheme = () => {
      if(state.theme)
      {
        changeTheme({ theme: false }, dispatch);
      }
      else{
        changeTheme({ theme: true }, dispatch);
      }
   
  };
  return (
    <>
      <Appbar />
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
