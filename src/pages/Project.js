import React from 'react';
import Navigation from '../components/Navigation.js'
import { Container, Alert, Row, Col } from 'react-bootstrap';      //component
import pot from "../models/pot1.gif"
import pcb from "../models/pcb.png"

const Project = () => {
    return (
        <>
            <Navigation/>

            <Container style={{paddingTop:"10px"}}>
                <Row>
                    <Col>
                        <img src={pcb} />
                        
                    </Col>
                    <Col>
                        <h1 className="doc-paragraph" variant="primary"># Model for the PCB circuit</h1>
                        <p>
                            <span className="code-like">PCB</span> with <span className="code-like">ESP8622</span> will be mounted in the bottom part of this pot stand, while 
                            the actual pot with the plant will be on top. In the final prototype we use glass to close the sensors controlled enviroment. 
                        </p>
                        <Alert variant="success">
                            The .json model for the PCB can be downloaded from <Alert.Link href="../models/PCB.json" target="_blank" download>here</Alert.Link>.
                        </Alert>
                    </Col>
                </Row>
            </Container>

            <Container style={{paddingTop:"10px"}}>
                <Row>
                    <Col>
                        <img src={pot} />
                        
                    </Col>
                    <Col>
                        <h1 className="doc-paragraph" variant="primary"># 3D Model for the pot stand</h1>
                        <p>
                            <span className="code-like">PCB</span> with <span className="code-like">ESP8622</span> will be mounted in the bottom part of this pot stand, while 
                            the actual pot with the plant will be on top. In the final prototype we use glass to close the sensors controlled enviroment. 
                        </p>
                        <Alert variant="success">
                            The .3mf model of this pot stand can be downloaded from <Alert.Link href="../models/3D-model.3mf" target="_blank" download>here</Alert.Link>.
                        </Alert>
                    </Col>
                </Row>
            </Container>
            
        </>
    );
};

export default Project;