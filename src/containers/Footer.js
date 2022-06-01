import React from "react";

export default function Footer(props) {
  return (
    <div className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xs-12">
            {/*
            <div className="first">
              <h4>test </h4>
              <p> © 2020 - Tous droits réservés</p>
            </div>
            */}
          </div>

          <div className="col-md-4 col-xs-12">
            <div className="second">
              <h6>© 2019 All rights reserved</h6>
              {/*
              <ul>
                <li>
                  <a onClick={() => props.data.handleClick("Accueil")}>
                    Accueil
                  </a>
                </li>
                <li>
                  <a onClick={() => props.data.handleClick("Àpropos")}>
                    À propos
                  </a>
                </li>
                <li>
                  <a onClick={() => props.data.handleClick("Portfolio")}>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a onClick={() => props.data.handleClick("Contact")}>
                    Contact
                  </a>
                </li>
              </ul>
              */}
            </div>
          </div>

          <div className="col-md-4 col-xs-12">
            {/*
            <div className="third">
              <h4> Contact</h4>
              <ul>
                <li>Magic Production </li>
                <li></li>

                <li>
                  <i className="far fa-envelope"></i> magic61prod@hotmail.fr
                </li>
                <li>
                  <i className="far fa-envelope"></i> 06 83 61 98 96
                </li>
              </ul>
            </div>
            */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="line"></div>
            <div className="second2">
              <a href="https://codepen.io/AndreeaBunget" target="_blank">
                {" "}
                <i className="fab fa-codepen fa-2x margin"></i>
              </a>
              <a href="https://github.com/WebDeveloperCodeRep" target="_blank">
                {" "}
                <i className="fab fa-github fa-2x margin"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/andreea-mihaela-bunget-a4248812b/"
                target="_blank"
              >
                {" "}
                <i className="fab fa-linkedin fa-2x margin"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCX674BUbomzBCakbb75lhfA?view_as=subscriber"
                target="_blank"
              >
                <i className="fab fa-youtube fa-2x margin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
