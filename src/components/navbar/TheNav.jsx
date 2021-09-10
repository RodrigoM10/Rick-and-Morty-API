/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, FloatingLabel } from 'react-bootstrap';
// import React, { useState } from 'react'
import './theNav.css'

export const NavRB = (props) => {

    const changeSpecies = (event) => {
        props.setSpecies(event.target.value);
    };


    // const [input, setInput] = useState({ searchName: '' });
    // console.log("🚀 ~ file: TheNav.jsx ~ line 15 ~ NavRB ~ input", input)


    const handleChange = (event) => {
        // Extraemos y guardamos en variables, el nombre y el valor del input en el que escribió el usuario.
        // const inputHtml = event.target;
        // const name = inputHtml.name;
        // const value = inputHtml.value;
        const { value } = event.target;

        // Declaramos un objeto que contiene una copia de las propiedades del state input,
        // más el dato nuevo ingresado usando el name y value del elemento.
        // const newInput = { ...input, [name]: value };
        // Con ese objeto actualizamos el estado.
        props.setName(value);
    };


    return (
        <Navbar className="navbar sticky-top py-1 px-3" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home" className="my-0 p-0">
                <img className="navbar-logo" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1631039078/rick%20and%20morty/rick-and-morty-31043_zhj8so.png" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" >
                    <Nav.Link onClick={() => props.setSection('characters')}>All characters</Nav.Link>
                    <Nav.Link onClick={() => props.setSection('ricks')} >All Ricks</Nav.Link>
                    <Nav.Link onClick={() => props.setSection('mortys')}>All Mortys</Nav.Link>
                    <Nav.Link onClick={() => props.setSection('interdimensionalTV')}>Interdimensional Cable Stars</Nav.Link>
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
                                <Form.Select onChange={changeSpecies}>
                                    <option value="Human">Human</option>
                                    <option value="Alien">Alien</option>
                                    <option value="Aniamal">Animal</option>
                                    <option value="Aniamal"></option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        name="searchName"
                        onChange={(e) => handleChange(e)}
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

