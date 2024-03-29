import React, { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeLieuDepart, changeLieuDestination } from "../redux-slices/vue";

let autoCompleteDepart;
let autoCompleteDestination;

let loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;

  //On verifie si la balise scirpt a déjà était chargée
  var scripts = document.getElementsByTagName("script");
  let ScriptExist = 0;
  for (var i = scripts.length; i--; ) {
    if (scripts[i].src === url) {
      ScriptExist = 1;
    }
  }
  //if (ScriptExist === 0) {
  document.getElementsByTagName("head")[0].appendChild(script);
  //}
};

// handle when the script is loaded we will assign autoCompleteRef with google maps place autocomplete
function handleScriptLoad(updateQuery, autoCompleteRef, props, dispatch) {
  if (props.nom == "Depart") {
    autoCompleteDepart = new window.google.maps.places.Autocomplete(
      document.getElementById("formDepartId"),
      {
        types: ["(cities)"],
        componentRestrictions: { country: "fr" }
      }
    );
    autoCompleteDepart.inputRef = autoCompleteRef;
    autoCompleteDepart.setFields(["address_components", "formatted_address"]);

    // add a listener to handle when the place is selected
    google.maps.event.addListener(
      autoCompleteDepart,
      "place_changed",
      function () {
        const addressObject = autoCompleteDepart.getPlace(); // get place from google api
        const query = addressObject.formatted_address;
        updateQuery(query);
        console.log(addressObject);
        dispatch(changeLieuDepart(addressObject.formatted_address));
      }
    );
  } else if (props.nom == "Destination") {
    autoCompleteDestination = new window.google.maps.places.Autocomplete(
      document.getElementById("formDestinationId"),
      {
        types: ["(cities)"],
        componentRestrictions: { country: "fr" }
      }
    );
    autoCompleteDestination.inputRef = autoCompleteRef;
    autoCompleteDestination.setFields([
      "address_components",
      "formatted_address"
    ]);

    // add a listener to handle when the place is selected
    google.maps.event.addListener(
      autoCompleteDestination,
      "place_changed",
      function () {
        const addressObject = autoCompleteDestination.getPlace(); // get place from google api
        const query = addressObject.formatted_address;
        updateQuery(query);
        console.log(addressObject);
        dispatch(changeLieuDestination(addressObject.formatted_address));
      }
    );
  }
}

function SearchLocationInput(props) {
  const [query, setQuery] = useState(props.value);
  const autoCompleteRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyDa7pQIToRYk5hyxa5hBHuSCZRbxSP6yVg&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef, props, dispatch)
    );
  }, []);

  return (
    <Form.Control
      onChange={(event) => setQuery(event.target.value)}
      placeholder={props.placeholder}
      className={props.className}
      value={query}
    />
  );
}

export default SearchLocationInput;
