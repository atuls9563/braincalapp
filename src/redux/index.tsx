import { combineReducers } from "redux";
import common from "./common";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({ common });
const middleware = [thunk];
const store = configureStore({ reducer: reducers, middleware });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
