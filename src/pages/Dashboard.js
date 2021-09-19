import React from "react";
import Temperature from "../components/Temperature";
import { Container, Row, Col } from "react-bootstrap";
import Humidity from "../components/Humidity";
import Light from "../components/Light";
import Air from "../components/Air";
import Navigation from "../components/Navigation";


const Dashboard = () => {
  return (
    <div>
      <Navigation/>
      <Container className="d-flex justify-content-center align-items-center mt-3">
      <div>
        <Row>
          <Col className="d-flex justify-content-center align-items-around" xs="6">
            <div>
              <Temperature/>
              <Light/>
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Humidity/>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <Air/>
          </Col>
        </Row>        
      </div>
    </Container>
    </div>
    
  );
}

export default Dashboard
