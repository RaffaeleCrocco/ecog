import React from "react";
import Temperature from "../components/Temperature";
import { Container, Row, Col, Alert, Card } from "react-bootstrap";
import Humidity from "../components/Humidity";
import Light from "../components/Light";
import Air from "../components/Air";
import Navigation from "../components/Navigation";
import database from "../data/data.json"
import {RiPlantLine} from "react-icons/ri"
import Documentation from "./Documentation"


const Dashboard = (props) => {

  //obtaining watering data
  var wateringOptions = ""
  for(var option in database[props.plant].watering.month) {
    var period = database[props.plant].watering.month[option].lable
    var times = database[props.plant].watering.month[option].times[0]
    var days =  database[props.plant].watering.month[option].times[1]
    wateringOptions += "In " + period + " you should water the plant " + times + " every " + days + ". "
  }
  

  const data = [
    {
      subject: 'Math',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Chinese',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'English',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Geography',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Physics',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'History',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
  

  return (
    <div>
      <Navigation plant={props.plant} setPlant={props.setPlant}/>
      <Container className="d-flex justify-content-center align-items-center mt-4">
        <div>
          <Row>
            <Col sm="12">
                <Alert variant="success" xs="auto">
                  <Row>
                    <Col xs="auto">
                      <RiPlantLine size="1.5rem" color="green"/>
                    </Col>
                    <Col>
                      <span>
                        You have planted <b>{database[props.plant].name.species}</b> known as {database[props.plant].name.common}, medium lifespan expected is {database[props.plant].stats.lifespan}. <br/>
                        {
                          database[props.plant].stats.seasonal ? 
                          "This plant is seasonal. Best months to plant are: " + database[props.plant].stats.months + "." :
                          "This plant is not seasonal."
                        }
                        <hr/>
                      </span>
                      <span>{wateringOptions}</span>
                    </Col>
                  </Row>
                </Alert>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <Row className="mt-5">
                <Col md="">
                  <Temperature plant={props.plant}/>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col md="">
                  <Humidity plant={props.plant}/> 
                </Col>
              </Row>
            </Col>
            <Col sm="3" className="d-flex mt-5">
              <Card>
                <Card.Body className="mt-4">
                  <Light plant={props.plant}/>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard
