import React, { useLayoutEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchLocationInput from "./SearchLocationInput";
import MobileFullScreen from "./MobileFullScreen";
import { useMediaQuery } from "react-responsive";
import { Container, Form, Button, Row } from "react-bootstrap";
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Routes,
     Link
} from "react-router-dom";

export default function Content() {
     {
          /* hook d'état permettant de gérer la valeur du input date*/
     }
     const [startDate, setStartDate] = useState(new Date());

     {
          /* hook d'état permettant de gérer la taille de l'écran
          Cette state sera utiliser pour re-render automatiquement le composant dans le cas où la taille de l'écran change.
          Cela permet d'adapter le fonctionnement en fonction des PC, mobile.
          Ex : Un clique sur le input date renvoi vers le composant MobileFullScreen si on est sur mobile.
          Si l'utilisateur, charge la page avec un ecran de taille mobile, mais qu'il agrandi ensuite la taille de l'écran, 
          le clique n' plus pour effet d'appeler MobileFullScreen.
          */
     }
     const [size, setSize] = useState([0, 0]);

     {
          /* Permet d'ajouter une route conditionnel
             Ex : Je veux que le clique sur le inpute date utilise la route qui renvoi vers le composant MobileFullScreen.
             Il faut appeler : <ConditionalLink to="/mobileFullScreen"condition={isMobile}>
             La balise <link> sera ajouter uniquement si on est sur mobile
          */
     }
     const ConditionalLink = ({ children, to, className, condition }) =>
          !!condition && to ? (
               <Link className={className} to={to}>
                    {children}
               </Link>
          ) : (
               <>{children}</>
          );

     {
          /* isMobile = true si la taille de l'écran ne dépasse pas 760px
           */
     }
     const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

     {
          /* hook d'effet qui permet d'écouter l'évenment resize, et de modifier le state setSize s'il y a un resize.
          La modification du state aura pour effet de re-render le composant.
          */
     }
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
               {/* <div className="imgAccueil"></div> */}
               <Container fluid>
                    <Form className="formAccueil">
                         <Row className="justify-content-center px-5 px-lg-0">
                              <ConditionalLink
                                   to="/mobileFullScreen"
                                   className="linkClass linkMobileFullScreen"
                                   condition={isMobile}
                              >
                                   <Form.Group
                                        className="px-0 col-12 col-md-4 col-lg-3 "
                                        controlId="formBasicEmail"
                                   >
                                        <SearchLocationInput
                                             nom="Depart"
                                             onChange={() => null}
                                        />
                                   </Form.Group>
                              </ConditionalLink>
                              <ConditionalLink
                                   to="/mobileFullScreen"
                                   className="linkClass linkMobileFullScreen"
                                   condition={isMobile}
                              >
                                   <Form.Group
                                        className="px-0 col-12 col-md-4 col-lg-3"
                                        controlId="formBasicPassword"
                                   >
                                        <SearchLocationInput
                                             nom="Destination"
                                             onChange={() => null}
                                        />
                                   </Form.Group>
                              </ConditionalLink>
                              <ConditionalLink
                                   to="/mobileFullScreen"
                                   className="linkClass linkMobileFullScreen"
                                   condition={isMobile}
                              >
                                   <Form.Group
                                        className="px-0 col-12 col-md-2 col-lg-2"
                                        controlId="formBasicDate"
                                   >
                                        <DatePicker
                                             className="inputDate"
                                             selected={startDate}
                                             onChange={(date) =>
                                                  setStartDate(date)
                                             }
                                        />
                                   </Form.Group>
                              </ConditionalLink>

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
