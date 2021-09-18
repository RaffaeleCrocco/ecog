import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from 'recharts';
import { Container, Row, Col, Button } from "react-bootstrap";


const data = [
    { name: "Group A", value: 600 },
    { name: "Group B", value: 50 },
  ];
  
const COLORS = ['#68d651', '#ffffff'];



const Light = () => {

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
                        <h2>Light</h2>
                        <ul>
                            <li>Required sunlight exposure: 7h</li>
                            <li>Suggest artificial light exposure: 12h </li>
                            <li>Current state: <strong>exposed</strong></li>
                            
                        </ul>
                        <Button size="sm" variant="outline-success">Attivate internal light</Button>
                    </div>
                </Col> 
            </Row>
        </Container>
    );
};

export default Light;