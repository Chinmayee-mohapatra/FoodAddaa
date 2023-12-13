import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    userLocation: JSON.parse(localStorage.getItem("UserLocation")) || {
      city: "Hyderabad",
      lat: 28.7040592,
      lng: 77.10249019999999,
      address: "Hyderabad, Telangana, India",
    },
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
