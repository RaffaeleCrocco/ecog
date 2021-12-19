import React, { useEffect, useState }from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import database from '../data/data.json'
//import {GoLightBulb} from "react-icons/go" 
import Led from "./Led";




const Light = (props) => {

    const [isExposed, setIsExposed] = useState(0)
    useEffect(()=> {
        fetch('/light')
        .then(req => req.text())
        .then(setIsExposed)
    })


    return (
        <Container>
            <Row>
                <Col >
                    <h4>Light </h4>
                    <p className='mt-3'>
                        This plant require {database[props.plant].stats.light.time[0]} hours of sunlight exposure. 
                        When not possible, provide at least {database[props.plant].stats.light.time[1]} hours of
                        artificial light exposure. System is currently: <strong>{isExposed ? "exposed" : "not exposed"}</strong>.
                    </p>
                    <Led/>
                </Col> 
            </Row>
        </Container>
    );
};

export default Light;