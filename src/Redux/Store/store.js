import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "src/features/modal/modalSlice";
import navbarReducer from "src/features/navbar/navbarSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    navbar: navbarReducer,
  },
});
