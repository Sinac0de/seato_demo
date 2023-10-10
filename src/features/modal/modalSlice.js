import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModalOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleModalOpen } = modalSlice.actions;

export default modalSlice.reducer;
