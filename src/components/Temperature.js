import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from 'recharts';
import { Container, Row, Col, Popover, OverlayTrigger } from "react-bootstrap";
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
    var scarto = (current < ideal) ? ideal - current : current - ideal


    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Graph purpose</Popover.Header>
            <Popover.Body>
                The purpose of the graph is to show the waste between the current and the ideal situation:
                the system is <strong>{scarto}°C</strong> distant form the best temperature.
            </Popover.Body>
        </Popover>
    );

    
    const data = [
        { name: "Group A", value: current },
        { name: "Group B", value: scarto },
    ];

    const COLORS = ['#1d9605', '#ffffff'];

    return (
        <Container>
            <Row>
                <OverlayTrigger placement="right" overlay={popover}>
                    <Col className="d-flex justify-content-end align-items-center" xs="auto">
                        <PieChart width={180} height={180} onMouseEnter={onPieEnter}>
                            <Pie
                                data={data}
                                cx={90}
                                cy={90}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={0}
                                dataKey="value"
                            >
                                {
                                data.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))
                                }
                            </Pie>
                        </PieChart>
                    </Col>
                </OverlayTrigger>
                <Col className="d-flex justify-content-center align-items-center">
                    <div>
                        <h4>Temperature</h4>
                        {/* <AiOutlineFire/>   */}
                        <p> 
                            Plants temperature should remain between {database[props.plant].stats.temperature[0]}°C 
                            and {database[props.plant].stats.temperature[1]}°C. Indeed the best temperature is <strong>{database[props.plant].stats.temperature[2]}°C</strong>.
                        </p>
                        <ul>
                            <li>Current temperature: <strong>{current}°</strong>.</li>
                        </ul>
                    </div>
                </Col> 
            </Row>
        </Container>
    );
};

export default Temperature;