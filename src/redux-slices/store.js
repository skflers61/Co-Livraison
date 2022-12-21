import { configureStore } from "@reduxjs/toolkit";
import { rechercheSlice } from "./recherche";
import { vueSlice } from "./vue";
import { reducer as formReducer } from "redux-form";

export const store = configureStore({
  reducer: {
    recherche: rechercheSlice.reducer,
    vue: vueSlice.reducer,
    form: formReducer
  }
});
