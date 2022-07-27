import { configureStore, createSlice } from "@reduxjs/toolkit";

const vueSlice = createSlice({
  name: "vue",
  initialState: {
    tab: [
      { id: 1, text: "Faire les courses", done: false },
      { id: 2, text: "Ménage !", done: true }
    ],
    withHeaderFooter: true,
    MobileFullScreenName: ""
  },

  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        done: false,
        text: action.payload
      };

      state.tab.push(newTask);
    },
    toggleTask: (state, action) => {
      const task = state.tab.find((t) => t.id === action.payload);
      task.done = !task.done;
    },
    deleteTask: (state, action) => {
      state = state.tab.find((t) => t.id !== action.payload);
    },
    toggleWithHeaderFooter: (state, action) => {
      state.withHeaderFooter = !state.withHeaderFooter;
    },
    changeMobileFullScreenName: (state, action) => {
      state.MobileFullScreenName = action.payload;
    }
  }
});

export const store = configureStore({
  reducer: {
    vue: vueSlice.reducer
  }
});
