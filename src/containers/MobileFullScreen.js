import React, { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";

function MobileFullScreen() {
  console.log("rrrrr");
  let location = useLocation();
  if (!location.state) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="cptMobileFullScreen">
      <h1>{location.state.name}</h1>
    </div>
  );
}

export default MobileFullScreen;
