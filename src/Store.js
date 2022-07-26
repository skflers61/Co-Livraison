import { configureStore } from "@reduxjs/toolkit";
import { HeaderFooterSlice } from "./slices/HeaderFooterSlice";

export const Store = configureStore({
  reducer: {
    HeaderFooter: HeaderFooterSlice.reducer
  }
});
