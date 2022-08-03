import React from "react";
import Trajet from "./Trajet";

export default function TrajetsListe() {
  const Trajets = [1, 3, 4];

  return (
    <div className="cptTrajetsListe">
      {Trajets.map((item, index) => (
        <Trajet id={item} key={index} />
      ))}
    </div>
  );
}
