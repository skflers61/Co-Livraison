import React, { useState, useRef } from "react";
import { useLocation, Navigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";

function MobileFullScreen() {
  const [search, setSearch] = useState("");
  const [PreviousComponent, setPreviousComponent] = useState("");
  const autoCompleteRef = useRef(null);

  let location = useLocation();
  console.log(location.state.PreviousComponent);
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

      <Link to={"/" + location.state.PreviousComponent}>
        <FontAwesomeIcon icon={faXmark} className="faXmark" onClick="" />
      </Link>
    </div>
  );
}

export default MobileFullScreen;
