"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  modalType: null, // Add a field to store the modal type
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalType = action.payload; // Set the modal type from the action payload
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      state.modalType = action.payload; // Set the modal type from the action payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
