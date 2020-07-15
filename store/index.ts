import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/rootSaga";
import { MakeStore, createWrapper } from "next-redux-wrapper";

const makeStore: MakeStore<object> = (initialState: object) => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer, 
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export const store = makeStore({});
// export an assembled wrapper
export const wrapper = createWrapper<object>(makeStore, {debug: true});