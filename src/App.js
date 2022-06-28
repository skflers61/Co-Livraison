import React, { Component } from "react";

/*
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
*/

import Menu from "./containers/Menu";
import Content from "./containers/Content";
import Footer from "./containers/Footer";
import Apropos from "./containers/Apropos";
import MobileFullScreen from "./containers/MobileFullScreen";
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Routes,
     Link,
     useLocation
} from "react-router-dom";

export default function App() {
     {
          /* Variable qui va nous permettre de savoir si le header et le footer doivent être afficher */
     }
     let withHeaderFooter = 1;

     {
          /* On récupère la route actuelle pour determiner la valeur de withHeaderFooter */
     }
     let location = useLocation();

     switch (location.pathname) {
          case "/mobileFullScreen":
               withHeaderFooter = 0;
               break;
     }

     return (
          <div className="cptApp">
               <div className="layout">
                    {withHeaderFooter == 1 && (
                         <div className="divMenu">
                              <Menu />
                         </div>
                    )}
                    <Routes>
                         <Route path="/about" exact element={<Apropos />} />
                         <Route path="/suivi" exact element={<Content />} />
                         <Route
                              path="/expedition"
                              exact
                              element={<Content />}
                         />
                         <Route
                              path="/mobileFullScreen"
                              element={<MobileFullScreen />}
                         />
                    </Routes>
                    {withHeaderFooter == 1 && <Footer />}
               </div>

               <Apropos />
          </div>
     );
}
