/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavLinkWrapper from '../utils/NavLinkWrapper';

import './Header.scss';

function Header() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="logo__link">
                            Azeno
                        </Link>
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        <NavLinkWrapper to="/train">Train</NavLinkWrapper>
                        <NavLinkWrapper to="/profile">Profile</NavLinkWrapper>
                        <NavLinkWrapper to="/login">Login</NavLinkWrapper>
                        <NavLinkWrapper to="/register">Register</NavLinkWrapper>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
