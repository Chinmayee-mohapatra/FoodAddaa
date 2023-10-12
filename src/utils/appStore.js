import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// configureStore is given by redux-toolkit.
// configureStore will give us the store of our application.
const appStore = configureStore({
  reducer: {
    // this reducer is modifying the appStore i.e. the redux store.
    // this reducer is basically a combination of difference slice of store.
    cart: cartReducer,
  },
});

export default appStore;
