import React from 'react';

import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from '../media/logo.svg'
import data from '../data/data.json'
import Select from 'react-select'

const Navigation = (props) => {

    //obtaining the list of the avaiable plants
    const options = []
    for(var plant in data) {
        options.push(
            {
                value: data[plant].name.common,
                label: data[plant].name.common
            }
        )
    }

    //handle change of state selecting a new plant
    const handlePlantChange = e => {
        props.setPlant(e.value);
    }
     

    return (
        <div>
            <Navbar bg="transparent" expand="lg">
                <Container>
                    <Link to="/">
                        <Navbar.Brand href="#home">
                            <img src={logo} alt="logo" style={{width:'80px',paddingTop:'20px'}}/>
                            <span style={{paddingLeft:'20px'}}>eco-g prototyping {props.plant}</span>
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link style={{width: '200px', marginTop:'-6px'}}>
                                <Select
                                    placeholder="Select Option"
                                    value={options.find(obj => obj.value === props.plant)}
                                    options={options} 
                                    onChange={handlePlantChange} 
                                />
                            </Nav.Link>
                            <Link to="/documentation">
                                <Nav.Link href="#home">Nerdy stuff</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;