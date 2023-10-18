"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalReducer from "@/features/modal/modalSlice";
import navbarReducer from "@/features/navbar/navbarSlice";
import dNavbarReducer from "@/features/dNavbar/dNavbarSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    navbar: navbarReducer,
    dNavbar: dNavbarReducer,
  },
});
