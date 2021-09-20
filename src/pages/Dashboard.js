import React from "react";
import Temperature from "../components/Temperature";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Humidity from "../components/Humidity";
import Light from "../components/Light";
import Air from "../components/Air";
import Navigation from "../components/Navigation";
import database from "../data/data.json"
import {RiPlantLine} from "react-icons/ri"
import {CgColorBucket} from "react-icons/cg"

const Dashboard = (props) => {

  //obtaining watering data
  /* var wateringOptions = ""
  for(var option in database[props.plant].watering.months) {
    console.log(option.lable)
  } */

  return (
    <div>
      <Navigation plant={props.plant} setPlant={props.setPlant}/>
      <Container className="d-flex justify-content-center align-items-center mt-3">
        <div>
          <Alert variant="success">
            <Row>
              <Col xs="auto" className="border-left">
                <RiPlantLine size="1.5rem" color="green"/>
              </Col>
              <Col>
                <span>
                  You have planted {database[props.plant].name.species} known as {database[props.plant].name.common}, medium lifespan expected is {database[props.plant].stats.lifespan}. <br/>
                  {
                    database[props.plant].stats.seasonal ? 
                    "This plant is seasonal. Best month to plant are: " + database[props.plant].stats.months + "." :
                    "This plant is not seasonal."
                  }
                </span>
              </Col>
            </Row>
          </Alert>
          <Row className="mt-5">
            <Col className="d-flex justify-content-center align-items-around" xs="6">
              <div>
                <Temperature plant={props.plant}/>
                <Light plant={props.plant} className="mt-2"/>
              </div>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <Humidity plant={props.plant}/>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center align-items-center mb-4 mt-3">
              <Air plant={props.plant}/>
            </Col>
          </Row>       
          <Alert variant="primary" className="mb-5">
            <Row>
              <Col xs="auto" className="border-left">
                <CgColorBucket size="1.5rem" color="blue"/>
              </Col>
              <Col>
                <span>
                  From what we known of {database[props.plant].name.common}
                </span>
              </Col>
            </Row>
          </Alert>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard
