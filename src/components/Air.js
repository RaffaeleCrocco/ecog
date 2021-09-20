import React, { PureComponent } from 'react';
import { Col, Row } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {FiWind} from 'react-icons/fi'

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
];

const Air = () => {
    return (  
        <Row>
            <Col className="d-flex justify-content-center align-items-center">
                    <div>
                        <h3><FiWind/> Air quality</h3>
                        <ul>
                            <li>CO2 quantity in the air: 7 </li>
                            <li>Azote quantity in the air: 7 </li>
                            <li>PPM quantity in the air: 7 </li>
                        </ul>
                    </div>
            </Col> 
            <Col>
                <LineChart
                width={900}
                height={150}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#2bff00" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#1eb500" />
                </LineChart>
            </Col>
        </Row>
            
    );
};

export default Air;