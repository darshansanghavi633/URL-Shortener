import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function URLShortener() {
    return (
        <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">URL Shortener</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/url">Home</Nav.Link>
                        <Nav.Link href="/url/analytics">Analytics</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
