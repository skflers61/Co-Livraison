import { configureStore, createSlice } from "@reduxjs/toolkit";

export const HeaderFooterSlice = createSlice({
  name: "HeaderFooter",
  initialState: [
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage !", done: true }
  ],

  reducers: {
    toggleHeaderFooterView: (state, action) => {
      const task = state.find((t) => t.id === action.payload);
      task.done = !task.done;
    }
  }
});
