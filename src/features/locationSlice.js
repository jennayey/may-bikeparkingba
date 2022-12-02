import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    details: {
      id: "pas1",
      name: "Levina PLace",
      address: "Pasig City",
      folding: false,
      covered: false,
      free: true,
      notes: null,
      lat: 14.58202078289433,
      lng: 121.09198182771503,
    },

    view: false,
    // coordinates:  {lat: 15.59787779519911, lng: 121.04553742532553}
  },

  reducers: {
    changeLocation: (state, action) => {
      state.details = action.payload;
    },
    changeView: (state, action) => {
      state.view = action.payload;
    },
  },
});

export const { changeLocation, changeView } = locationSlice.actions;
export default locationSlice.reducer;
