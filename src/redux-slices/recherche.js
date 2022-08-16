import { configureStore, createSlice } from "@reduxjs/toolkit";

export const rechercheSlice = createSlice({
  name: "recherche",
  initialState: {
    ListeTrajets: [
      {
        id: 1,
        depart: "Flers",
        destination: "Caen",
        date: "08/08/2022",
        heureDepart: "10h30",
        heureArrive: "11h30",
        duree: "1h00",
        prix: "10",
        conducteur: "Victor"
      },
      {
        id: 2,
        depart: "Argentan",
        destination: "Caen",
        date: "08/08/2022",
        heureDepart: "10h00",
        heureArrive: "10h40",
        duree: "40min",
        prix: "5",
        conducteur: "Julien"
      },
      {
        id: 3,
        depart: "Rennes",
        destination: "Caen",
        date: "08/08/2022",
        heureDepart: "10h00",
        heureArrive: "12h00",
        duree: "2h00",
        prix: "20",
        conducteur: "Baptiste"
      },
      {
        id: 4,
        depart: "Flers",
        destination: "Paris",
        date: "08/08/2022",
        heureDepart: "10h00",
        heureArrive: "13h00",
        duree: "3h00",
        prix: "50",
        conducteur: "Arnaud"
      },
      {
        id: 5,
        depart: "Caen",
        destination: "Paris",
        date: "08/08/2022",
        heureDepart: "10h00",
        heureArrive: "12h00",
        duree: "2h00",
        prix: "20",
        conducteur: "Victor"
      },
      {
        id: 6,
        depart: "Paris",
        destination: "Dreux",
        date: "08/08/2022",
        heureDepart: "10h00",
        heureArrive: "11h00",
        duree: "1h00",
        prix: "15",
        conducteur: "Maxime"
      }
    ]
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
    getTrajet: (state, action) => {
      return state.tab.find((t) => t.id === action.payload);
    },
    getAllTrajet: (state, action) => {
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
  type:"recherche/changeMobileFullScreenName",
  payload: 'monName'
})

Pour éviter d'écrire cela à chaque appel du reducer, Redux a mis à disposition les "action creator"
1) on exporte ces actions creator comme ceci:
export const {
  toggleWithHeaderFooter,
  changeMobileFullScreenName
} = rechercheSlice.actions;

2) l'utilisation dans dispatch devient plus simple : 
dispatch(changeMobileFullScreenName('monName'));

*/
export const { getTrajet, getAllTrajet } = rechercheSlice.actions;
