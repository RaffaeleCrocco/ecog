import React, { useEffect, useState } from 'react';
import { Col, Row, ProgressBar, Container, Card } from 'react-bootstrap';
import database from '../data/data.json'

  

const Humidity = (props) => {

    const idealTerrain = database[props.plant].stats.humidity.terrain[2]
    const idealAir = database[props.plant].stats.humidity.air[2]
    

    const [airHum, setAirHum] = useState(0)
    useEffect(()=> {
        fetch('/airhum')
        .then(req => req.text())
        .then(text => {
            if (text === "nan") throw new TypeError("Attendo umidità")
            else if (text === `Proxy error: Could not proxy request /airhum from localhost:3000 to http://192.168.1.6/ (EHOSTUNREACH).`) throw new TypeError("Nessun dispositivo connesso")
            else return text
        })
        .then(setAirHum)
        .catch(error => {
            setAirHum(0)
            props.setDevice(false)
            console.log(error);
        })
    })

    const [terrHum, setTerrHum] = useState(0)
    useEffect(()=> {
        fetch('/terrhum')
        .then(req => req.text())
        .then(text => {
            if (text === `Proxy error: Could not proxy request /terrhum from localhost:3000 to http://192.168.1.6/ (EHOSTUNREACH).`) throw new TypeError("Nessun dispositivo connesso")
            else return text
        })
        .then(setTerrHum)
        .catch(error => {
            setTerrHum(0)
            props.setDevice(false)
            console.log(error);
        })
    })

    const airHumBar = <ProgressBar variant="secondary" now={airHum} label={`${airHum}%`} />;
    const terrHumBar = <ProgressBar variant="secondary" now={terrHum} label={`${terrHum}%`} />;

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h4>Humidity</h4>
                        <p>
                            Don’t stand house plants near radiators and other heat sources. Not only will any leaves that touch a heater get scorched, but humidity will also be at its lowest. If you have underfloor heating, raise large plants off the ground and onto a small table or plant stand. Don’t place plants near doorways or corridors, as draughts lower humidity.
                        </p>
                    </Col>
                </Row>
                <Row> 
                    <Col className="d-flex align-items-center">
                        <Card className="me-3 mt-2 pe-3">
                            <Card.Body>
                                <Card.Text>
                                        Ideal <i> air humidity </i> is {idealAir}%, current one is <strong>{airHum}%</strong>.
                                        <Row>
                                            <Col sm="4" className="d-flex justify-content-end">Current:</Col>
                                            <Col className="mt-1">{airHumBar}</Col>
                                        </Row>
                                        <Row>
                                            <Col sm="4" className="d-flex justify-content-end">Best one:</Col>
                                            <Col><ProgressBar className='mt-1' variant="success" now={idealAir} label={`${idealAir}%`} /></Col>
                                        </Row>  
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mt-2 pe-3">
                            <Card.Body>
                                <Card.Text>
                                        Ideal <i> terrain humidity </i> is {idealTerrain}%, current one is <strong>{terrHum}%</strong>.
                                        <Row>
                                            <Col sm="4" className="d-flex justify-content-end">Current:</Col>
                                            <Col className="mt-1">{terrHumBar}</Col>
                                        </Row>
                                        <Row>
                                            <Col sm="4" className="d-flex justify-content-end">Best one:</Col>
                                            <Col><ProgressBar className='mt-1' variant="success" now={idealTerrain} label={`${idealTerrain}%`} /></Col>
                                        </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>                                         
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Humidity;