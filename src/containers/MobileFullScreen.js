import React, { useState, useRef } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Form, Row } from "react-bootstrap";

function MobileFullScreen() {
  const [search, setSearch] = useState("");
  const autoCompleteRef = useRef(null);

  console.log("rrrrr");
  let location = useLocation();
  if (!location.state) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="cptMobileFullScreen">
      <FontAwesomeIcon icon={faChevronRight} className="faChevronRight" />

      <input
        ref={autoCompleteRef}
        onChange={(event) => setSearch(event.target.value)}
        type={location.state.name}
        placeholder={location.state.name}
        className="txtSearch"
        value={search}
      />
    </div>
  );
}

export default MobileFullScreen;
