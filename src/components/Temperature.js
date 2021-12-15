import React, { useCallback, useEffect, useState } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import database from '../data/data.json'
  


const Temperature = (props) => {

    //for graph and graph animation
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
        setActiveIndex(index);
        },
        [setActiveIndex]
    );

    
    //getting the ideal value of temperature
    const ideal = database[props.plant].stats.temperature[2];

    const [airTemp, setAirTemp] = useState(0);  
    useEffect(()=> {
        fetch('/airtemp')
        .then(req => req.text())
        .then(text => {
            if (text === "nan") throw new TypeError("attendo temperatura")
            else return text
        })
        .then(setAirTemp)
        .catch(error => {
            throw(error);
        })
    })

    const [terrTemp, setTerrTemp] = useState(0)
    useEffect(()=> {
        fetch('/terrtemp')
        .then(req => req.text())
        .then(setTerrTemp)
    })
    

    return (
        <Container>
            <Row>
                <Col>
                    <h4>Temperature</h4>
                    <p className='mt-1'>
                        You will find most house plants grow at their best between temperatures of 15 - 24°. <br/>
                        Plants that grow well within this range are well suited for homes and offices. <br/>
                        For this specific plant temperature should remain between {database[props.plant].stats.temperature[0]}°C and {database[props.plant].stats.temperature[1]}°C, indeed <strong>the best temperature is {database[props.plant].stats.temperature[2]}°C</strong>. 
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex align-items-center">
                    <Card className="me-3 mt-2 pe-4">
                        <Card.Body>
                            <Card.Text>
                                Current air temperature: <Badge bg="success">{airTemp}°</Badge> <br/>
                                Difference between current and best one: <strong>{(airTemp-ideal).toFixed(2)}°C</strong>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mt-2 pe-4">
                        <Card.Body>
                            <Card.Text>
                                Current terrain temperature: <Badge bg="success">{terrTemp}°</Badge> <br/>
                                Difference between current and best one: <strong>{(terrTemp-ideal).toFixed(2)}°C</strong>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Temperature;