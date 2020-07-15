import React, {Component} from "react";
import { createStore } from "redux";
import indexReducer from './reducers/index';
import { State } from "./types";

// create a store creator
const makeStore = (initialState: State) => {
  return createStore(indexReducer, initialState);
};

export default makeStore;