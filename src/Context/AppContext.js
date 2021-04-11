import * as React from "react";

let ContextOne = React.createContext();

let initialState = {
  theme: true,
};

let reducer = (state, action) => {
  switch (action.type) {
    case "change":
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return { ...state };
  }
};

function ContextOneProvider(props) {
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };
  return (
    <ContextOne.Provider value={value}>{props.children}</ContextOne.Provider>
  );
}

let ContextOneConsumer = ContextOne.Consumer;
export { ContextOne, ContextOneProvider, ContextOneConsumer };
