import React, { useCallback, useEffect, useState } from "react";
import { Container, Row, Col, Popover, Card } from "react-bootstrap";
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
    const ideal = database[props.plant].stats.temperature[2]
    const [airTemp, setAirTemp] = useState(0);  

    useEffect(()=> {
        fetch('/airtemp')
        .then(req => req.text())
        .then(text => {
            if (text !== "nan") return text
        })
        .then(setAirTemp)
    })
    

   
    

    return (
        <Container>
            <Row>
                <Col md="4" className="d-flex justify-content-end align-items-center" xs="auto">
                    <Card>
                        <Card.Header>Temperature waste</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Air temperature is <strong>{(airTemp-ideal).toFixed(2)}°C</strong> distant form the best one.
                            </Card.Text>
                        </Card.Body>
                    </Card>     
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <div>
                        <h4>Temperature</h4>
                        {/* <AiOutlineFire/>   */}
                        <p> 
                            Plants temperature should remain between {database[props.plant].stats.temperature[0]}°C 
                            and {database[props.plant].stats.temperature[1]}°C. Indeed the best temperature is {database[props.plant].stats.temperature[2]}°C.
                        </p>
                        <ul>
                            <li>Current temperature: <strong>{airTemp}°</strong>.</li>
                        </ul>
                    </div>
                </Col> 
            </Row>
        </Container>
    );
};

export default Temperature;