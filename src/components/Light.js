import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from 'recharts';
import { Container, Row, Col, Button } from "react-bootstrap";
import database from '../data/data.json'
import {GoLightBulb} from "react-icons/go" 


const data = [
    { name: "Group A", value: 600 },
    { name: "Group B", value: 50 },
];
  
const COLORS = ['#226914', '#ffffff'];



const Light = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
        setActiveIndex(index);
        },
        [setActiveIndex]
    );


    let ledOn = '0'
    function handleLightChange(){
        fetch('/led', {method: 'PUT', body: '1'})
            .then(response => response.text())
    }

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
                            fill="#68d651"
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
                        <h4> Light</h4>
                        {/* <GoLightBulb/> */}
                        <p>
                            This plant require {database[props.plant].stats.light.time[0]} hours of sunlight exposure.
                            When not possible, try to provide at least {database[props.plant].stats.light.time[1]} hours of
                            artificial light exposure. Current state: <strong>exposed</strong>
                        </p>
                        <Button size="sm" variant="outline-success" onClick={()=>handleLightChange()}>Attivate internal light</Button>
                    </div>
                </Col> 
            </Row>
        </Container>
    );
};

export default Light;