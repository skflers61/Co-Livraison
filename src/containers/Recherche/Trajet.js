import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrajet, getAllTrajet } from "../../redux-slices/recherche";

export default function Trajet(props) {
  const [depart, setDepart] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(new Date());
  const [prix, setPrix] = useState(new Date());
  const [Conducteur, setConducteur] = useState(new Date());

  console.log("id : " + props.id);
  const monTrajet = useSelector((state) =>
    state.recherche.ListeTrajets.find((t) => t.id === props.id)
  );

  console.log(monTrajet);
  return (
    <div className="cptTrajet">
      <div className="infosTrajet">
        <div className="infosTrajetLigne1">
          <div className="heureDepart">{monTrajet.heureDepart}</div>
          <div className="depart">{monTrajet.depart}</div>
          <div className="prix">{monTrajet.prix} €</div>
        </div>
        <div className="infosTrajetLigne2">
          <div className="heureArrive">{monTrajet.heureArrive}</div>
          <div className="destination">{monTrajet.destination}</div>
        </div>
        <div className="infosTrajetLigne3">
          <div className="dureeTxt">Durée :</div>
          <div className="duree">{monTrajet.duree}</div>
        </div>
      </div>
      <div className="conducteur">{monTrajet.conducteur}</div>
    </div>
  );
}
