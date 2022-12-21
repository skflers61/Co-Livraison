import React, { useLayoutEffect, useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchLocationInput from "./SearchLocationInput";
import MobileFullScreen from "./MobileFullScreen";
import { useMediaQuery } from "react-responsive";
import { Container, Form, Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMobileFullScreenName,
  toggleWithHeaderFooter
} from "../redux-slices/vue";
import { Field, reduxForm } from "redux-form";

let ContactForm = (props) => {
  const { handleSubmit } = props;
  /* hook d'état permettant de gérer la valeur du input date*/
  const [startDate, setStartDate] = useState(new Date());

  /* hook d'état qui contient l'id du champ input autocomplete qui vient d'être cliqué */
  const [autocompletCity, setAutocompletCity] = useState("");

  /* hook d'état permettant de gérer la taille de l'écran
        Cette state sera utiliser pour re-render automatiquement le composant dans le cas où la taille de l'écran change.
        Cela permet d'adapter le fonctionnement en fonction des PC, mobile.
        Ex : Un clique sur le input date renvoi vers le composant MobileFullScreen si on est sur mobile.
        Si l'utilisateur, charge la page avec un ecran de taille mobile, mais qu'il agrandi ensuite la taille de l'écran, 
        le clique n' plus pour effet d'appeler MobileFullScreen.
        */
  const [size, setSize] = useState([0, 0]);

  //On récupère nos données Redux
  const tasks = useSelector((state) => state.vue);

  //On créé un raccourci pour la fonction dispatch
  const dispatch = useDispatch();

  /* Fonction appelée quand l'utilisateur clique sur un champ de recherche.
   */
  const handleHeaderfooterChange = (name, id) => {
    console.log(name);

    //On verifie si on est en mode mobile ou pc
    if (!!isMobile) {
      //on est sur mobile, on met à jour les données redux
      dispatch(toggleWithHeaderFooter());
      dispatch(changeMobileFullScreenName(name));
    } else {
      //on est sur pc, on met à jour le state autocompletCity
      handleAutocompleteClick(name, id);
    }
  };

  /* Fonction qui permet de mettre à jour le state autocompletCity lors du clique sur un input autocomplete */
  const handleAutocompleteClick = (name, id) => {
    console.log("testtttttttt");

    /* on met à jour le state afin de rerender les composants autocompletes.
    Le but étant de mettre uniquement le input qui vient d'être cliqué en autocomplete (composant SearchLocationInput) 
    L'élément cliqué devient un SearchLocationInput et l'autre un input normal.
    J'ai dû faire ce fonctionnement car je n'arrivais pas à mettre 2 SearchLocationInput dans la même page.
    Google afficher un seul des deux input en autocomplete.
    */
    setAutocompletCity(id);
  };

  /* Permet de redonner le focus à l'élément cliqué.

  Contexte : je viens de cliqué sur un input, elle se transforme en autocomplete google,
  mais l'utilisateur est obligé de recliquer sur le input car le focus et perdu.
  Avec ce useEffect, plus besoin de recliquer sur le input.
  */
  useEffect(() => {
    if (autocompletCity !== "") {
      document.getElementById(autocompletCity).focus();
    }
  });

  /* isMobile = true si la taille de l'écran ne dépasse pas 760px
   */
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  /* hook d'effet qui permet d'écouter l'évenment resize, et de modifier le state setSize s'il y a un resize.
        La modification du state aura pour effet de re-render le composant.
  */
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="cptContent">
      {tasks.withHeaderFooter === false ? <MobileFullScreen /> : null}

      <Container
        fluid
        className={tasks.withHeaderFooter === false ? "DpNone" : ""}
      >
        {/*<div className="imgAccueil"></div>*/}
        <Form onSubmit={handleSubmit} className="formAccueil">
          <Row className="justify-content-center px-5 px-lg-0">
            <Form.Group
              className="px-0 col-12 col-md-4 col-lg-3 "
              controlId="formDepartId"
              onClick={() => {
                handleHeaderfooterChange("Départ", "formDepartId");
              }}
            >
              {
                /* Si autocompletCity est différent de null, cela veut dire que l'utilisateur à cliqué sur un input autocomplete.
                Le but étant de mettre uniquement le input qui vient d'être cliqué en autocomplete (composant SearchLocationInput) 
                L'élément cliqué devient un SearchLocationInput et l'autre un input normal.
                */

                autocompletCity === "formDepartId" ? (
                  <SearchLocationInput
                    nom="Depart"
                    onChange={() => null}
                    placeholder={tasks.MobileFullScreenName}
                    className="txtSearch"
                    value={tasks.LieuDepart}
                  />
                ) : (
                  <Form.Control
                    nom="Depart"
                    placeholder={tasks.MobileFullScreenName}
                    className="txtSearch"
                    value={tasks.LieuDepart}
                  />
                )
              }
            </Form.Group>
            <Form.Group
              className="px-0 col-12 col-md-4 col-lg-3"
              controlId="formDestinationId"
              onClick={() => {
                handleHeaderfooterChange("Destination", "formDestinationId");
              }}
            >
              {
                /* Si autocompletCity est différent de null, cela veut dire que l'utilisateur à cliqué sur un input autocomplete.
                Le but étant de mettre uniquement le input qui vient d'être cliqué en autocomplete (composant SearchLocationInput) 
                L'élément cliqué devient un SearchLocationInput et l'autre un input normal.
                */

                autocompletCity === "formDestinationId" ? (
                  <SearchLocationInput
                    nom="Destination"
                    onChange={() => null}
                    placeholder={tasks.MobileFullScreenName}
                    className="txtSearch"
                    value={tasks.LieuDestination}
                  />
                ) : (
                  <Form.Control
                    nom="Destination"
                    placeholder={tasks.MobileFullScreenName}
                    className="txtSearch"
                    value={tasks.LieuDestination}
                  />
                )
              }
            </Form.Group>
            <Form.Group
              className="px-0 col-12 col-md-2 col-lg-2"
              controlId="formBasicDate"
            >
              <DatePicker
                className="inputDate"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="submitBtn col-12 col-md-2 col-lg-2"
            >
              Rechercher
            </Button>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

ContactForm = reduxForm({
  // a unique name for the form
  form: "contact"
})(ContactForm);

export default ContactForm;
