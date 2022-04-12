import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./container/Header";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row></Row>
        <Row></Row>
        <Row>
          <Col></Col>
          <Col>
            <div className="App">
              <h1>Hello, React!</h1>
              <Header />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
