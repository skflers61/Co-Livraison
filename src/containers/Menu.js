import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Menu(props) {
  /*
    console.log('renderMenu')            
    console.log(this.props)    
    */

  return (
    <div className="cptMenu">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">CoLivraison</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          {/*
            <Button variant="outline-success">
              <FontAwesomeIcon icon={faUser} />
            </Button>
            */}
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Accueil</Nav.Link>
              <Nav.Link href="#action2">Suivi</Nav.Link>
              <Nav.Link href="#action2">Expedition</Nav.Link>
              <Nav.Link href="#action2">À propos</Nav.Link>
              {/*
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
              */}
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Rechercher"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
        <div className="ups-headerWrap"></div>
      </Navbar>
    </div>
  );
}
