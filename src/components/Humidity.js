import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import database from '../data/data.json'
import fakeSensor from '../data/fake-sensors-data.json' 
import {IoWaterOutline} from 'react-icons/io5'


  

const Humidity = (props) => {

    const idealTerrain = database[props.plant].stats.humidity.terrain[2]
    const idealAir = database[props.plant].stats.humidity.air[2]

    var currentTerrain = fakeSensor.humidity.terrain
    var currentAir = fakeSensor.humidity.air

    const data = [
        {
          name: 'Air humidity',
          uv: idealAir,
          pv: currentAir,
          //amt: 2400,
        },
        {
          name: 'Terrain humidity',
          uv: idealTerrain,
          pv: currentTerrain,
          //amt: 2210,
        }
    ];

    return (
        <div>
            <Row>
                <Col>
                    <BarChart
                    width={400}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        {/* <Legend /> */}
                        <Bar dataKey="pv" fill="#5fad50" />
                        <Bar dataKey="uv" fill="#226914" />
                    </BarChart>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <div>
                        <h4>Humidity</h4>
                        {/* <IoWaterOutline/> */}
                        <p>
                            The ideal <i> air humidity </i> seems to be {idealAir}%, the current one is: <strong>{currentAir}%</strong>. <br/>
                            The ideal <i> terrain humidity </i> is {idealTerrain}%, the current one is: <strong>{currentTerrain}%</strong>.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Humidity;