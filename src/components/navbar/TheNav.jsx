import { Nav } from 'react-bootstrap';
import { BiCog } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './theNav.css'

export const NavRB = ({ setName, name, children }) => {

    return (
        <nav className="navbar sticky-top py-1 px-3 " bg="dark" variant="dark" expand="lg">
            {/* <Navbar.Brand href="#home" className="my-0 p-0">
                <img className="navbar-logo" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1631039078/rick%20and%20morty/rick-and-morty-31043_zhj8so.png" />
            </Navbar.Brand> */}
                <Nav >
                    {children}
{/* 
                    <Nav.Link activeClassName="text-white" ><BiCog /> Settings</Nav.Link>
                    <Nav.Link activeClassName="text-white" icon={<FaRegHeart />}> <FaRegHeart /> Favourite</Nav.Link> */}
                </Nav>
        </nav>
    )
}

