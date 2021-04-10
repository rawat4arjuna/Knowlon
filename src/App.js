import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store";
import Main from "./Page/main";
import { ContextOneProvider } from "./Context/AppContext";
function App() {
  return (
    <Provider store={configureStore()}>
      <ContextOneProvider>
        <Main />
      </ContextOneProvider>
    </Provider>
  );
}

export default App;
