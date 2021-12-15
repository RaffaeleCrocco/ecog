import React from 'react';

import '../style/Documentation.scss'                     //style
import { Container, Table, Alert } from 'react-bootstrap';      //component
import Navigation from '../components/Navigation.js'
const Documentation = () => {
    return (
        <div>
            <Navigation/>
            <Container>
                <h1 className="doc-paragraph" variant="primary"># Microcontroller server API Documentation</h1>
                <p>
                    The device takes data from all the sensor and though the <span className="code-like">ESP8622</span> host this data in the following paths.
                </p>
                <Table className="doc-table" striped bordered hover responsive size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Specific name</th>
                        <th>Method</th>
                        <th>Path</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan="2">Internal light</td>
                        <td rowSpan="2">/</td>
                        <td className="code-like">GET</td>
                        <td className="code-like">/led</td>
                        <td className="code-like">Boolean</td>
                        <td>Getting the current state of the internal light.</td>
                    </tr>
                    <tr>
                        <td className="code-like">PUT</td>
                        <td className="code-like">/led</td>
                        <td className="code-like">Boolean</td>
                        <td>Setting the state of the internal light.</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">Air temperature and humidity</td>
                        <td rowSpan="2">DHT11</td>
                        <td className="code-like">GET</td>
                        <td className="code-like">/airtemp</td>
                        <td className="code-like">float</td>
                        <td>Current air temperature of the device.</td>
                    </tr>
                    <tr>
                        <td className="code-like">GET</td>
                        <td className="code-like">/airhum</td>
                        <td className="code-like">Int</td>
                        <td>Current air humidity of the device.</td>
                    </tr>
                    <tr>
                        <td>Terrain humidity</td>
                        <td>/</td>
                        <td className="code-like">GET</td>
                        <td className="code-like">/terrhum</td>
                        <td className="code-like">float</td>
                        <td>Raw number rapresenting the terrain humidy (still not converted).</td>
                    </tr>
                    <tr>
                        <td>Terrain temperature</td>
                        <td>DS18B20</td>
                        <td className="code-like">GET</td>
                        <td className="code-like">/terrtemp</td>
                        <td className="code-like">float</td>
                        <td>Raw number rapresenting the terrain temperature (still not converted).</td>
                    </tr>
                    <tr>
                        <td>Light sensor</td>
                        <td>/</td>
                        <td className="code-like">GET</td>
                        <td className="code-like">/light</td>
                        <td className="code-like">/</td>
                        <td>/</td>
                    </tr>
                </tbody>
                </Table>
                <br/>
            </Container>
            <Container>
                <h1 className="doc-paragraph" variant="primary"># Plant json API Documentation</h1>
                <p>
                    The Dashboard part of the project takes this data to make more accurate graphs. <br/>
                    This table show the fields used for every plant in the database. 
                </p>
                <Alert variant="success">
                    Plants data are stored in a .json file you can access form <Alert.Link  href="https://raw.githubusercontent.com/RaffaeleCrocco/ecog-app/main/src/data/data.json" target="_blank">here</Alert.Link>.
                </Alert>
                <Table className="doc-table" striped bordered hover responsive size="sm">
                <thead>
                    <tr>
                        <th>Level 1 name</th>
                        <th>Level 2 name</th>
                        <th>Level 3 name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan="2" className="code-like">name</td>
                        <td className="code-like">common</td>
                        <td className="code-like">/</td>
                        <td>String</td>
                        <td>Plant common name</td>
                    </tr>
                    <tr>
                        <td className="code-like">species</td>
                        <td className="code-like">/</td>
                        <td>String</td>
                        <td>Plant scientific name</td>
                    </tr>
                    <tr>
                        <td rowSpan="7" className="code-like">stats</td>
                        <td className="code-like">lifespan</td>
                        <td className="code-like">/</td>
                        <td>String</td>
                        <td>How much time a plant can live.</td>
                    </tr>
                    <tr>
                        <td className="code-like">seasonal</td>
                        <td className="code-like">/</td>
                        <td>Boolean</td>
                        <td>Indicate if the plant is seasonal.</td>
                    </tr>
                    <tr>
                        <td className="code-like">month</td>
                        <td className="code-like">/</td>
                        <td>Array of strings</td>
                        <td>Indicate the month in which a plant can live during the year.</td>
                    </tr>
                    <tr>
                        <td className="code-like">temperature</td>
                        <td className="code-like">/</td>
                        <td>Array of floats</td>
                        <td>Indicate the ideal temperature of a plant environment. <br/> Structured with minimum, maximum and ideal temperature [min, max, ideal].</td>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="code-like">humidity</td>
                        <td className="code-like">terrain</td>
                        <td>Array of integers</td>
                        <td>With minimum, maximum and ideal humidity in percentage [min, max, ideal].</td>
                    </tr>
                    <tr>
                        <td className="code-like">air</td>
                        <td>Array of integers</td>
                        <td>With minimum, maximum and ideal humidity in percentage [min, max, ideal].</td>
                    </tr>
                    <tr>
                        <td className="code-like">light</td>
                        <td className="code-like">time</td>
                        <td>Array of integers</td>
                        <td>Two integers representing the natural (first integer) and artificial (second integer) <br/> amount of hours in which the plant needs to stay exposed to light.</td>
                    </tr>
                    <tr>
                        <td className="code-like">substances</td>
                        <td className="code-like">air</td>
                        <td className="code-like">/</td>
                        <td>String list</td>
                        <td>List of substances in air envoirment and relative ppm</td>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="code-like">watering</td>
                        <td rowSpan="2" className="code-like">month</td>
                        <td className="code-like">label</td>
                        <td>String</td>
                        <td>String with months list</td>
                    </tr>
                    <tr>
                        <td className="code-like">month</td>
                        <td>String</td>
                        <td>Array of two integers: how many times (fist integer) in how many days (second integer).</td>
                    </tr>
                </tbody>
                </Table>
                <br/><br/><br/>
            </Container>
        </div>
    );
};

export default Documentation;