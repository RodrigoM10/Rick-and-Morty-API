import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown, FloatingLabel } from 'react-bootstrap';
import React, { useState } from 'react'
import './theNav.css'

export const NavRB = (props) => {
    const { name, setName } = props;


    return (
        <Navbar className="navbar sticky-top py-1 px-3" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home" className="my-0 p-0">
                <img className="navbar-logo" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1631039078/rick%20and%20morty/rick-and-morty-31043_zhj8so.png" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" >
                    <Nav.Link onClick={() => setName('rick')}>All characters</Nav.Link>
                    <Nav.Link>All Ricks</Nav.Link>
                    <Nav.Link>All Mortys</Nav.Link>
                    <Nav.Link>Interdimensional Cable Stars</Nav.Link>
                    <NavDropdown title="Filter" id="collasible-nav-dropdown">
                        <Form>
                            {['radio'].map((type) => (
                                <div key={`default-${type}`} className="mx-1 mb-3">
                                    <Form.Check
                                        type={type}
                                        id={`${type}`}
                                        label={`Alive`}
                                    />
                                    <Form.Check
                                        type={type}
                                        label={`Dead`}
                                        id={`${type}`}
                                    />
                                    <Form.Check
                                        type={type}
                                        label={`unknown`}
                                        id={`${type}`}
                                    />
                                </div>
                            ))}
                            <FloatingLabel controlId="floatingSelect" label="Specie">
                                <Form.Select>
                                    <option>Human</option>
                                    <option>Alien</option>
                                    <option>Other</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

