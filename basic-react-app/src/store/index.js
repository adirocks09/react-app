import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import { counterReducer } from "./counterSlice";

/*
const reducerFunctions = {
  counterStore: counterSlice.reducer,
};
*/

const reducerFunctions = {
  counterStore: counterReducer,
};

const appStore = configureStore({ reducer: reducerFunctions });

export default appStore;
