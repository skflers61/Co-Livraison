import React, { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";

let autoCompletes = new Array();

const loadScript = (url, callback) => {
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
function handleScriptLoad(updateQuery, autoCompleteRef) {
  var acInputs = document.getElementsByClassName("txtSearch");
  for (var i = 0; i < acInputs.length; i++) {
    autoCompletes[i] = new window.google.maps.places.Autocomplete(acInputs[i], {
      types: ["(cities)"],
      componentRestrictions: { country: "fr" }
    });
    autoCompletes[i].inputId = acInputs[i].id;
    autoCompletes[i].setFields(["address_components", "formatted_address"]);

    // add a listener to handle when the place is selected
    autoCompletes[i].addListener(
      "place_changed",
      handlePlaceSelect(updateQuery, this)
    );
  }
}

async function handlePlaceSelect(updateQuery, event) {
  console.log(event);
  const addressObject = autoCompletes[0].getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
}

function SearchLocationInput(props) {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);
  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyDa7pQIToRYk5hyxa5hBHuSCZRbxSP6yVg&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  return (
    <Form.Control
      ref={autoCompleteRef}
      onChange={(event) => setQuery(event.target.value)}
      placeholder={props.placeholder}
      className={props.className}
      value={query}
    />
  );
}

export default SearchLocationInput;
