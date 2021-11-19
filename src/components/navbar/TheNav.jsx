import { Nav } from 'react-bootstrap';
import './theNav.css'

export const NavRB = ({ children }) => {

    return (
        <nav className="navbar sticky-top py-1 px-3 " bg="dark" variant="dark" expand="lg">
                <Nav >
                    {children}
                </Nav>
        </nav>
    )
}

