import React, { Component } from "react";

/*
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
*/

import Menu from "./containers/Menu";
import Content from "./containers/Content";
import Portfolio from "./containers/Portfolio";
import Footer from "./containers/Footer";
import Apropos from "./containers/Apropos";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Accueil"
    };
  }

  handleClick(link) {
    console.log("handleClick " + link);
    this.setState({ currentPage: link });
  }

  render() {
    /*
        console.log('renderApp')
        console.log('State '+this.state.currentPage)
        */

    const renderPage = () => {
      if (this.state.currentPage == "Accueil") {
        //console.log('test111111')
        return (
          <div>
            <Content />
          </div>
        );
      } else if (this.state.currentPage == "Portfolio") {
        //console.log('test2222222')
        return (
          <div>
            <Portfolio />
          </div>
        );
      }
    };

    return (
      <div className="cptApp">
        <div className="sidebar">
          <div className="left">
            <a className="mail" href="mailto:magic61prod@hotmail.fr">
              magic61prod@hotmail.fr
            </a>
            <p className="tel">06 83 61 98 96</p>
          </div>
        </div>
        <div className="layout">
          <Menu data={{ handleClick: this.handleClick.bind(this) }} />
          {renderPage()}
          <Footer data={{ handleClick: this.handleClick.bind(this) }} />
        </div>
        <div className="sidebar">
          <div className="right">
            <a
              className="instagram"
              target="_blank"
              href="https://www.instagram.com/magic.production_/"
            >
              Instagram
            </a>
            <a
              className="facebook"
              target="_blank"
              href="https://www.facebook.com/magicproduction61"
            >
              facebook
            </a>
            <a
              className="youtube"
              target="_blank"
              href="https://www.youtube.com/channel/UClG_js59C5B9Ymg90BnicCA"
            >
              youtube
            </a>
          </div>
        </div>
        <Apropos />
      </div>
    );
  }
}

export default App;
