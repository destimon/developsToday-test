import React, {Component} from "react";
import { createStore } from "redux";
import rootReducer from './reducers/index';
import { State } from "./types";

// create a store creator
const makeStore = (initialState: object) => {
  return createStore(rootReducer, initialState);
};

export default makeStore;