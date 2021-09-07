import {  Navbar, Nav, Container} from 'react-bootstrap';
import React from 'react'

export const NavRB = (props) => {
    const {setSeccion} = props;
 
    return(
        <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link onClick={() => {setSeccion('memes')}}>Memes</Nav.Link>
                    <Nav.Link onClick={() => {setSeccion('login')}}>Login</Nav.Link>
                    <Nav.Link onClick={() => {setSeccion('perfil')}}>Perfil</Nav.Link>
                    <Nav.Link onClick={() => {setSeccion('admin')}}>Subir Nuevo Meme</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
       </Navbar>
    )
}
 
