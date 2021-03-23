import './App.css';
import { Provider } from 'react-redux'
import configureStore from './store';
import Main from './Page/main'
function App() {
  return (
   <Provider store={configureStore()}>
     <Main/>
   </Provider>
  );
}

export default App;
