import { Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './theNav.css'

export const NavRB = ({ setName, name, children}) => {

    return (
        <Navbar className="navbar sticky-top py-1 px-3 " bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home" className="my-0 p-0">
                <img className="navbar-logo" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1631039078/rick%20and%20morty/rick-and-morty-31043_zhj8so.png" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" >
                    <Nav.Link as={NavLink} to="/" exact activeClassName="text-white" >All characters</Nav.Link>
                    <Nav.Link as={NavLink} to="/ricks" exact activeClassName="text-white" >All Ricks</Nav.Link>
                    <Nav.Link as={NavLink} to="/mortys" exact activeClassName="text-white" >All Mortys</Nav.Link>
                    <Nav.Link as={NavLink} to="/interdimensionalTV"  exact activeClassName="text-white">Interdimensional Cable Stars</Nav.Link>
                    {/* select / filter  */}
                    {children}
                </Nav>
            
            </Navbar.Collapse>
        </Navbar>
    )
}

