import React, { Component, useState } from "react";

/*
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
*/

import Menu from "./containers/Menu";
import Content from "./containers/Content";
import Footer from "./containers/Footer";
import Apropos from "./containers/Apropos";
import MobileFullScreen from "./containers/MobileFullScreen";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  {
    /* On récupère la route actuelle pour determiner la valeur de withHeaderFooter */
  }
  let location = useLocation();

  const tasks = useSelector((state) => state.vue);

  return (
    <div className="cptApp">
      <div className="layout">
        {tasks.withHeaderFooter === true && (
          <div className="divMenu">
            <Menu />
          </div>
        )}
        <Routes>
          <Route path="/" exact element={<Content />} />
          <Route path="/about" exact element={<Apropos />} />
          <Route path="/suivi" exact element={<Content />} />
          <Route path="/expedition" exact element={<Content />} />
          <Route path="/mobileFullScreen" element={<MobileFullScreen />} />
        </Routes>
        {tasks.withHeaderFooter === true && <Footer />}
      </div>

      <Apropos />
    </div>
  );
}
