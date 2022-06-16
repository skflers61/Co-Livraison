import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchLocationInput from "./SearchLocationInput";
import MobileFullScreen from "./MobileFullScreen";
import { Container, Form, Button, Row } from "react-bootstrap";
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Routes,
     Link
} from "react-router-dom";

export default function Content() {
     const [startDate, setStartDate] = useState(new Date());

     return (
          <div className="cptContent">
               {/* <div className="imgAccueil"></div> */}
               <Container fluid>
                    <Form className="formAccueil">
                         <Row className="justify-content-center px-5 px-lg-0">
                              <Form.Group
                                   className="px-0 col-12 col-md-4 col-lg-3 "
                                   controlId="formBasicEmail"
                              >
                                   <SearchLocationInput
                                        nom="Depart"
                                        onChange={() => null}
                                   />
                              </Form.Group>
                              <Form.Group
                                   className="px-0 col-12 col-md-4 col-lg-3"
                                   controlId="formBasicPassword"
                              >
                                   <SearchLocationInput
                                        nom="Destination"
                                        onChange={() => null}
                                   />
                              </Form.Group>
                              <Link to="/mobileFullScreen">
                                   <Form.Group
                                        className="px-0 col-12 col-md-2 col-lg-2"
                                        controlId="formBasicDate"
                                   >
                                        <DatePicker
                                             className="inputDate"
                                             selected={startDate}
                                             onChange={(date) =>
                                                  setStartDate(date)
                                             }
                                        />
                                   </Form.Group>
                              </Link>

                              <Button
                                   variant="primary"
                                   type="submit"
                                   className="submitBtn col-12 col-md-2 col-lg-2"
                              >
                                   Rechercher
                              </Button>
                         </Row>
                    </Form>
               </Container>
          </div>
     );
}
