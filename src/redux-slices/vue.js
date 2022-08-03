import { configureStore, createSlice } from "@reduxjs/toolkit";

export const vueSlice = createSlice({
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
      return state;
    },
    toggleWithHeaderFooter: (state, action) => {
      state.withHeaderFooter = !state.withHeaderFooter;
      return state;
    },
    changeMobileFullScreenName: (state, action) => {
      state.MobileFullScreenName = action.payload;
      return state;
    }
  }
});

/* action creator redux

Les "actions creator" sont des fonctions qui aident à créer des objets action
ex : pour appeler un reducer redux, normalement on écrit : 
disptach({
  type:"vue/changeMobileFullScreenName",
  payload: 'monName'
})

Pour éviter d'écrire cela à chaque appel du reducer, Redux a mis à disposition les "action creator"
1) on exporte ces actions creator comme ceci:
export const {
  toggleWithHeaderFooter,
  changeMobileFullScreenName
} = vueSlice.actions;

2) l'utilisation dans dispatch devient plus simple : 
dispatch(changeMobileFullScreenName('monName'));

*/
export const {
  toggleWithHeaderFooter,
  changeMobileFullScreenName
} = vueSlice.actions;
