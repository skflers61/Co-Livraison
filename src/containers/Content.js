import React, { useLayoutEffect, useState } from "react";
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

export default function Content() {
  /* hook d'état permettant de gérer la valeur du input date*/
  const [startDate, setStartDate] = useState(new Date());

  /* hook d'état permettant de gérer la taille de l'écran
        Cette state sera utiliser pour re-render automatiquement le composant dans le cas où la taille de l'écran change.
        Cela permet d'adapter le fonctionnement en fonction des PC, mobile.
        Ex : Un clique sur le input date renvoi vers le composant MobileFullScreen si on est sur mobile.
        Si l'utilisateur, charge la page avec un ecran de taille mobile, mais qu'il agrandi ensuite la taille de l'écran, 
        le clique n' plus pour effet d'appeler MobileFullScreen.
        */
  const [size, setSize] = useState([0, 0]);

  const tasks = useSelector((state) => state.vue);
  const dispatch = useDispatch();

  const handleHeaderfooterChange = (name) => {
    console.log(name);
    if (!!isMobile) {
      dispatch(toggleWithHeaderFooter());
      dispatch(changeMobileFullScreenName(name));
    }
  };

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
        <Form className="formAccueil">
          <Row className="justify-content-center px-5 px-lg-0">
            <Form.Group
              className="px-0 col-12 col-md-4 col-lg-3 "
              controlId="formBasicEmail"
              onClick={() => {
                handleHeaderfooterChange("Départ");
              }}
            >
              <SearchLocationInput nom="Depart" onChange={() => null} />
            </Form.Group>
            <Form.Group
              className="px-0 col-12 col-md-4 col-lg-3"
              controlId="formBasicPassword"
              onClick={() => {
                handleHeaderfooterChange("Destination");
              }}
            >
              <SearchLocationInput nom="Destination" onChange={() => null} />
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
}
