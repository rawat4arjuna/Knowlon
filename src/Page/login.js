import React, { useContext } from "react";
import { ContextOne } from "../Context/AppContext";
import Appbar from "../component/appBar";
import { changeTheme } from "../Context/userAction";
export default function Login() {
  let { state, dispatch } = useContext(ContextOne);
  React.useEffect(() => {
    console.log("ppppp,", state);
  }, [state]);
  const changetheme = () => {
    changeTheme({ theme: "dark" }, dispatch);
  };
  return (
    <>
      <Appbar />
      ho
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
