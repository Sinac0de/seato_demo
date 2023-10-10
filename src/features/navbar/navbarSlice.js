import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavCollapse: true,
};

export const modalSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleNavCollapse: (state) => {
      state.isNavCollapse = !state.isNavCollapse;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleNavCollapse } = modalSlice.actions;

export default modalSlice.reducer;
