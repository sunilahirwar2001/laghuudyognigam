import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavBars = () => {
  return (
    <Navbar expand="lg" className="navbar-3">
      <Container fluid className='container-3'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto itemsdatas">
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <NavDropdown title="ABOUT US" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/introduction'>INTRODUCTION</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">ORGANISATION STRUCTURE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">BOARD OF DIRECTOR</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="OUR ACTIVITIES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/tender'>TENDER</Nav.Link>
            <Nav.Link as={Link} to='/ratelist'>RATE LIST</Nav.Link>
            <NavDropdown title="EVENTS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="PROJECTS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/pricvacypolicy'>POLICIES</Nav.Link>
            <Nav.Link as={Link} to='/csr'>CSR Us</Nav.Link>
            <Nav.Link as={Link} to='/contactus'>Contact Us</Nav.Link>
            <Nav.Link as={Link} to='/feedbackforms'>FEEDBACK</Nav.Link>
            <Nav.Link as={Link} to='/productcategolue'>PRODUCT CATALOGUE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBars;
