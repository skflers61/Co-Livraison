import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Col,
  Row
} from "react-bootstrap";

export default function Content() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="cptContent">
      <div className="imgAccueil"></div>
      <Container fluid>
        <Form className="ml-10 ">
          <Row className="justify-content-center">
            <Form.Group
              className="px-0 col-12 col-md-4 col-lg-3 "
              controlId="formBasicEmail"
            >
              <Form.Control type="Depart" placeholder="Départ" />
            </Form.Group>
            <Form.Group
              className="px-0 col-12 col-md-4 col-lg-3"
              controlId="formBasicPassword"
            >
              <Form.Control type="Destination" placeholder="Destination" />
            </Form.Group>
            <Form.Group
              className="px-0 col-12 col-md-4 col-lg-3"
              controlId="formBasicDate"
            >
              <DatePicker
                className="px-0 col-12 col-md-4 col-lg-6 inputDate"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="col-4 col-md-2 col-lg-1"
            >
              Submit
            </Button>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
