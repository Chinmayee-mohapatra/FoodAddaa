import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import locationReducer from "./locationSlice";

// configureStore is given by redux-toolkit.
// configureStore will give us the store of our application.
const appStore = configureStore({
  reducer: {
    // this reducer is modifying the appStore i.e. the redux store.
    // this reducer is basically a combination of difference slice of store.
    cart: cartReducer,
    user: userReducer,
    location: locationReducer,
  },
});

export default appStore;
