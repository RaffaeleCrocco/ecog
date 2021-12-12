import React, { useCallback, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import database from '../data/data.json'
//import {GoLightBulb} from "react-icons/go" 
import Led from "./Led";




const Light = (props) => {


    return (
        <Container>
            <Row>
                <Col md="4" className="d-flex justify-content-end align-items-center" xs="auto">
                    <Card>
                        <Card.Header>Light state</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                System is currently: <strong>exposed.</strong> Toggle internal light in case of underexposure.
                            </Card.Text>
                        </Card.Body>
                    </Card>     
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <div>
                        <h4> Light</h4>
                        {/* <GoLightBulb/> */}
                        <p>
                            This plant require {database[props.plant].stats.light.time[0]} hours of sunlight exposure.<br/>
                            When not possible, provide at least {database[props.plant].stats.light.time[1]} hours of
                            artificial light exposure. 
                        </p>
                        <Led/>
                    </div>
                </Col> 
            </Row>
        </Container>
    );
};

export default Light;