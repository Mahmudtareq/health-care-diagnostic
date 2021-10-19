
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="p-3" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="text-primary" href="#home">
                        SAFE HOSPITAL
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                        <Nav.Link as={Link} to="/doctor">Doctor</Nav.Link>
                        {user.email ?
                            <button onClick={logOut} className="btn btn-info">Logout</button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                        <Navbar.Text>
                            <span className="fs-5 text-info">
                                Signed in as :
                            </span>
                            <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;