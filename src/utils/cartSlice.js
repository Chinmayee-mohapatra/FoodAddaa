import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // these are reducer functionsand thse will map to an action.
    addItem: (state, action) => {
      // mutating the state over here.
      // Redux Toolkit uses immer BTS.
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      // its not mutating the state, its only adding a reference to it.
      //state = ["Chinmayee"];

      /**
       * inside the reducer function directly consoling the state wont work.
       * We need to use current(state) to get the data on console window.
       * console.log(current(state));
       * current is imported from @reduxjs/toolkit.
       */

      state.items.length = 0; // empty array: []
      /**
       * state here is a local variable. It will have a value of the original state. So we need to change the original state.
       * original state = {items: ["pizza"]}
       * clearCart: (state, action) => {
       *    console.log(current(state));
       *    state = [];
       *    console.log(current(state)); -> this modifies the local variable inside this callback function.
       * However, the orignal state is not updated.
       * }
       *
       * RTK -> either mutate the existing state or return a new state.
       * So, we can even use "return {items:[]};".
       */
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
