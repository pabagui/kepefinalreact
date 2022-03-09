import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to='/'>
                        K'epe Bags
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/category/Mochilas">Mochilas</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/category/Totebags">Totebags</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/category/Accesorios">Accesorios</Link>
                        </Nav.Link>
                    </Nav>                  
                </Navbar.Collapse>
                <Link to='/cart'>
                    <CartWidget/>
                </Link>               
            </Container>
        </Navbar>
    )
}
