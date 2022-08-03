import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./redux-slices/store";
import { Provider } from "react-redux";

import TrajetsListe from "./containers/Recherche/TrajetsListe";

const container = document.getElementById("contenu");
const root = createRoot(container);

// Le provider permet de se connecter à l'état global gérer par Redux
root.render(
  <Provider store={store}>
    <Router>
      <TrajetsListe />
    </Router>
  </Provider>
);
