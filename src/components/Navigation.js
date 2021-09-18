import React from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to="/">
                        <Navbar.Brand href="#home">Eco-g prototype</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/documentation">
                            <Nav.Link href="#home">Nerd stuff</Nav.Link>
                        </Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;