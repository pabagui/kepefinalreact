import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
//import NavDropdown from 'react-bootstrap/NavDropdown'



export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/'>
                    K'epe Bags
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/category/Mochilas">Mochilas</Link>
                        <Link to="/category/Totebags">Totebags</Link>
                        <Link to="/category/Accesorios">Accesorios</Link>
                    </Nav>                  
                </Navbar.Collapse>
                <Link to='/cart'>
                    <CartWidget/>
                </Link>               
            </Container>
        </Navbar>
    )
}
