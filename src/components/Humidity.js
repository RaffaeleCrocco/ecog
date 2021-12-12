import React from 'react';
import { Col, Row, ProgressBar } from 'react-bootstrap';
import database from '../data/data.json'
import fakeSensor from '../data/fake-sensors-data.json' 

  

const Humidity = (props) => {

    const idealTerrain = database[props.plant].stats.humidity.terrain[2]
    const idealAir = database[props.plant].stats.humidity.air[2]

    var currentTerrain = fakeSensor.humidity.terrain
    var currentAir = fakeSensor.humidity.air

    const terHumBar = <ProgressBar variant="secondary" now={currentTerrain} label={`${currentTerrain}%`} />;
    const airHumBar = <ProgressBar variant="secondary" now={currentAir} label={`${currentAir}%`} />;




    return (
        <div>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <div>
                        <h4>Humidity</h4>
                        {/* <IoWaterOutline/> */}
                        <p className='mt-4'>
                            The ideal <i> air humidity </i> seems to be {idealAir}%, the current one is: <strong>{currentAir}%</strong>.
                            <Row>
                                <Col sm="3" className="d-flex justify-content-end">Current:</Col>
                                <Col className="mt-1">{airHumBar}</Col>
                            </Row>
                            <Row>
                                <Col sm="3" className="d-flex justify-content-end">Best one:</Col>
                                <Col><ProgressBar className='mt-1' variant="success" now={idealAir} label={`${idealAir}%`} /></Col>
                            </Row>
                        </p>
                        <p className='mt-4'>
                            The ideal <i> terrain humidity </i> is {idealTerrain}%, the current one is: <strong>{currentTerrain}%</strong>.
                            <Row>
                                <Col sm="3" className="d-flex justify-content-end">Current:</Col>
                                <Col className="mt-1">{terHumBar}</Col>
                            </Row>
                            <Row>
                                <Col sm="3" className="d-flex justify-content-end">Best one:</Col>
                                <Col><ProgressBar className='mt-1' variant="success" now={idealTerrain} label={`${idealTerrain}%`} /></Col>
                            </Row>
                        </p>                        
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Humidity;