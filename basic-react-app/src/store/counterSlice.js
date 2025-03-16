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
      console.log(action); // {type: 'counterSlice/decrement', payload: undefined}
      state.value--;
    },
    add: (state, action) => {
      console.log("add action : ");
      console.log(action); // {type: 'counterSlice/add', payload: '99'}
      state.value += Number(action.payload);
    },
    subtract: (state, action) => {
      console.log("subtract action : ");
      console.log(action); // {type: 'counterSlice/subtract', payload: '66'}
      state.value -= Number(action.payload);
    },
  },
});

export const counterActions = counterSlice.actions;

export const counterReducer = counterSlice.reducer;

export default counterSlice;
