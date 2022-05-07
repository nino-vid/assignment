import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers";

const rootReducer = combineReducers({ userReducer });

export const Store = configureStore(
  { reducer: rootReducer },
  applyMiddleware(thunk)
);
// , applyMiddleware(thunk)});
