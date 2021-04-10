import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./Page/main";
import { ContextOneProvider } from "./Context/AppContext";
function App() {
  return (
    <Provider store={store}>
      <ContextOneProvider>
        <Main />
      </ContextOneProvider>
    </Provider>
  );
}

export default App;
