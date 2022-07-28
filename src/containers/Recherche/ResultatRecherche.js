import React from "react";
import TriRecherche from "./TriRecherche";
import HeureDepartRecherche from "./HeureDepartRecherche";
import TrajetsListe from "./TrajetsListe";

export default function ResultatRecherche(name) {
  return (
    <div className="cptResultatRecherche">
      <TriRecherche />
      <HeureDepartRecherche />
      <TrajetsListe />
    </div>
  );
}
