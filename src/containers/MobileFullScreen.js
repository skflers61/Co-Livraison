import React, { useState, useRef } from "react";
import { useLocation, Navigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";

function MobileFullScreen(name) {
  const [search, setSearch] = useState("");
  const [PreviousComponent, setPreviousComponent] = useState("");
  const autoCompleteRef = useRef(null);

  return (
    <div className="cptMobileFullScreen">
      <FontAwesomeIcon icon={faChevronRight} className="faChevronRight" />

      <input
        ref={autoCompleteRef}
        onChange={(event) => setSearch(event.target.value)}
        type={name}
        placeholder={name}
        className="txtSearch"
        value={search}
      />

      <FontAwesomeIcon icon={faXmark} className="faXmark" onClick="" />
    </div>
  );
}

export default MobileFullScreen;
