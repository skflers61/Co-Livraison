import React, { Component } from "react";

/*
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
*/

import Menu from "./containers/Menu";
import Content from "./containers/Content";
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
      } 
    };

    return (
      <div className="cptApp">
        <div className="layout">
          <div className="divMenu">
            <Menu data={{ handleClick: this.handleClick.bind(this) }} />
          </div>
          {renderPage()}
          <Footer data={{ handleClick: this.handleClick.bind(this) }} />
        </div>

        <Apropos />
      </div>
    );
  }
}

export default App;
