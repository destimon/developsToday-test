import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const makeStore = (initialState: object) => {
  return createStore(
      rootReducer, 
      initialState,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    );
};

sagaMiddleware.run();

export default makeStore;