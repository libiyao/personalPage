import react, {Component} from "react";
import styles from "./Navigation.module.css";
import {Navbar, Nav} from 'react-bootstrap';
function Navigation(){
    return(
            <Navbar bg="light" fixed="top" expand="lg">
            <Navbar.Brand href="#/">Biyao Li</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#/">Home</Nav.Link>
                <Nav.Link href="#/Education">Education</Nav.Link>
                <Nav.Link href="#/Experience">Experience</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    )
}

export default Navigation;