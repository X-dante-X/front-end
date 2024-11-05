import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
//import { BrowserRouter as Link } from 'react-router-dom';

function Header({ items }) {
  return (
    <header className='fixed-top container-fluid ustify-content-between align-items-center text-center'>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          MyApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {items.map((item) => (
              <Nav.Link key={item.id} href={item.path}>
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
