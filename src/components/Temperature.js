import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from 'recharts';
import { Container, Row, Col } from "react-bootstrap";
import database from '../data/data.json'


const data = [
    { name: "Group A", value: 900 },
    { name: "Group B", value: 100 },
  ];
  
const COLORS = ['#1d9605', '#ffffff'];



const Temperature = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
        setActiveIndex(index);
        },
        [setActiveIndex]
    );



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
                        <h2>Temperature</h2>
                        <ul>
                            <li>Minimum consented temperature: 20° </li>
                            <li>Maximum consented temperature: 25° </li>
                            <li>Ideal temperature for the plant: <strong>22.5°</strong></li>
                            <li>Current temperature in the system: <strong>23°</strong></li>
                        </ul>
                    </div>
                </Col> 
            </Row>
        </Container>
    );
};

export default Temperature;