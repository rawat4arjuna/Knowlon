// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './redux/Reducer/rootReducer';
// export default function configureStore(initialState={}) {
//  return createStore(
//    rootReducer,
//    initialState,
//    applyMiddleware(thunk)
//  );
// }
import { configureStore } from "@reduxjs/toolkit";
import  counterReducer from './Page/Signin/signinSlice'
export default configureStore({
  reducer: {
    counter : counterReducer
  },
});
