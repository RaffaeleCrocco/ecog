import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from 'recharts';
import { Container, Row, Col } from "react-bootstrap";
import database from '../data/data.json'
import fakeSensor from '../data/fake-sensors-data.json'
import {AiOutlineFire} from "react-icons/ai" 
  


const Temperature = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
        setActiveIndex(index);
        },
        [setActiveIndex]
    );

    var current = fakeSensor.temperature
    const ideal = database[props.plant].stats.temperature[2]

    console.log(current)
    console.log(ideal)

    var scarto = (current < ideal) ? ideal - current : current - ideal

    console.log(scarto)
    
    const data = [
        { name: "Group A", value: current },
        { name: "Group B", value: scarto },
    ];

    const COLORS = ['#1d9605', '#ffffff'];

    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-end align-items-center" xs="auto">
                    <PieChart width={180} height={180} onMouseEnter={onPieEnter}>
                        <Pie
                            data={data}
                            cx={90}
                            cy={90}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {
                            data.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))
                            }
                        </Pie>
                    </PieChart>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <div>
                        <h3><AiOutlineFire/>  Temperature</h3>
                        <ul>
                            <li>Minimum consented temperature: {database[props.plant].stats.temperature[0]}° </li>
                            <li>Maximum consented temperature: {database[props.plant].stats.temperature[1]}° </li>
                            <li>Ideal temperature for the plant: <strong>{database[props.plant].stats.temperature[2]}°</strong></li>
                            <li>Current temperature: <strong>{current}°</strong></li>
                        </ul>
                    </div>
                </Col> 
            </Row>
        </Container>
    );
};

export default Temperature;