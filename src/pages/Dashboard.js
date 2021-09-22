import React from "react";
import Temperature from "../components/Temperature";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Humidity from "../components/Humidity";
import Light from "../components/Light";
import Air from "../components/Air";
import Navigation from "../components/Navigation";
import database from "../data/data.json"
import {RiPlantLine} from "react-icons/ri"


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
      <Container className="d-flex justify-content-center align-items-center mt-3">
        <div>
          <Row>
            <Col>
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
                          "This plant is seasonal. Best month to plant are: " + database[props.plant].stats.months + "." :
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
          <Row className="mt-3">
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
        </div>
      </Container>
    </div>
  );
}

export default Dashboard
