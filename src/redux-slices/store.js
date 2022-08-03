import { configureStore } from "@reduxjs/toolkit";
import { rechercheSlice } from "./recherche";
import { vueSlice } from "./vue";

export const store = configureStore({
  reducer: {
    recherche: rechercheSlice.reducer,
    vue: vueSlice.reducer
  }
});
