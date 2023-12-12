import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    userLocation: null || JSON.parse(localStorage.getItem("UserLocation")),
  },
  reducers: {
    getLocation: (state, action) => {
      state.userLocation = action.payload;
      localStorage.setItem("UserLocation", JSON.stringify(state.userLocation));
    },
  },
});

export const { getLocation } = locationSlice.actions;
export default locationSlice.reducer;
