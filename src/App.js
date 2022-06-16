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
     Link
} from "react-router-dom";

class App extends Component {
     constructor(props) {
          super(props);
          this.state = {
               currentPage: "Accueil"
          };
     }

     render() {
          /*
        console.log('renderApp')
        console.log('State '+this.state.currentPage)
        */

          return (
               <Router>
                    <div className="cptApp">
                         <div className="layout">
                              <div className="divMenu">
                                   <Menu />
                              </div>
                              <Routes>
                                   <Route
                                        path="/about"
                                        exact
                                        element={<Apropos />}
                                   />
                                   <Route
                                        path="/suivi"
                                        exact
                                        element={<Content />}
                                   />
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
                              <Footer />
                         </div>

                         <Apropos />
                    </div>
               </Router>
          );
     }
}

export default App;
