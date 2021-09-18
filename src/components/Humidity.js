import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Air humidity',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Terrain humidity',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    }
  ];
  

const Humidity = () => {
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
                        <h2>Humidity</h2>
                        <ul>
                            <li>Ideal air humidity: <strong>22.5%</strong>, the current one is: <strong>23%</strong></li>
                            <li>Ideal terrain humidity: <strong>22.5%</strong>, the current one is: <strong>23%</strong></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Humidity;