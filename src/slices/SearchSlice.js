import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, name: "iPhone10" },
    { id: 2, name: "iPadPro" },
    { id: 3, name: "iWatch" }
  ]
};
let nextId = 4;
export const searchSlice = createSlice({
  name: "search",
  initialState,

  reducers: {
    addItemToSearch: (state, action) => {
      console.log("in");
      state.items = [...state.items, { id: nextId, name: action.payload.name }];
      nextId += 1;
    },
    removeItemFromSearch: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    }
  }
});

export const { addItemToSearch, removeItemFromSearch } = searchSlice.actions;

export const selectItems = (state) => state.search.items;

export default searchSlice.reducer;
