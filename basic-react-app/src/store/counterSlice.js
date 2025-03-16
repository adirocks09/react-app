import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      console.log("increment action : ");
      state.value++;
    },
    decrement: (state, action) => {
      // action is optional here since there is no payload (undefined)
      console.log("decrement action : ");
      console.log(action);
      state.value--;
    },
    add: (state, action) => {
      console.log("add action : ");
      console.log(action);
      state.value += Number(action.payload);
    },
    subtract: (state, action) => {
      console.log("subtract action : ");
      console.log(action);
      state.value -= Number(action.payload);
    },
  },
});

export const counterActions = counterSlice.actions;

export const counterReducer = counterSlice.reducer;

export default counterSlice;
