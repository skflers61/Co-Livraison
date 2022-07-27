import React, { useState, useRef } from "react";
import { useLocation, Navigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

export default function MobileFullScreen(name) {
  const [search, setSearch] = useState("");
  const [PreviousComponent, setPreviousComponent] = useState("");
  const autoCompleteRef = useRef(null);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.vue);
  const handleClose = () => {
    dispatch({
      type: "vue/toggleWithHeaderFooter"
    });
  };

  return (
    <div className="cptMobileFullScreen">
      <FontAwesomeIcon icon={faChevronRight} className="faChevronRight" />

      <input
        ref={autoCompleteRef}
        onChange={(event) => setSearch(event.target.value)}
        type="text"
        placeholder={tasks.MobileFullScreenName}
        className="txtSearch"
        value={search}
      />

      <FontAwesomeIcon
        icon={faXmark}
        className="faXmark"
        onClick={handleClose}
      />
    </div>
  );
}
