import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

// create a store creator
const makeStore = (initialState: object) => {
  return createStore(
      rootReducer, 
      initialState,
      composeWithDevTools()
    );
};

export default makeStore;