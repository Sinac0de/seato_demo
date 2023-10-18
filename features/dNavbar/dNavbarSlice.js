"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDNavCollapsed: true,
};

export const dNavbarSlice = createSlice({
  name: "dNavbar",
  initialState,
  reducers: {
    toggleDNavCollapse: (state) => {
      state.isDNavCollapsed = !state.isDNavCollapsed;
    },
    closeDNavBar(state) {
      state.isDNavCollapsed = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleDNavCollapse, closeDNavBar } = dNavbarSlice.actions;

export default dNavbarSlice.reducer;
