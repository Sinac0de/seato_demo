"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavCollapsed: true,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleNavCollapse: (state) => {
      state.isNavCollapsed = !state.isNavCollapsed;
    },
    closeNavBar(state) {
      state.isNavCollapsed = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleNavCollapse, closeNavBar } = navbarSlice.actions;

export default navbarSlice.reducer;
