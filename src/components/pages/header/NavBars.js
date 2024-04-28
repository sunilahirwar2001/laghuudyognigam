import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IoMdGlobe } from "react-icons/io";
import logo from '../../../assets/images/logo.png';
import coal from '../../../assets/images/lun_coal.png';
import eprocurement from '../../../assets/images/e-procurement.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom';
import './NavBars.css';
import MyNavBars from './MyNavBars';
const NavBars = () => {
  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark" className='navbar'>
        <Container className='navcontainc-data'>
          <Nav className="ml-auto nav-item ">
            <Nav.Link href="#home" className='bgused'>A-</Nav.Link>
           
            <Nav.Link href="#features" className='bgused'>A</Nav.Link>
            <Nav.Link href="#pricing" className='bgused'>A+</Nav.Link>
            <Nav.Link href="#pricing" className='bgused'> 
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 19.58c-1.6 0-3.11-.62-4.24-1.75A5.95 5.95 0 0 1 6 13.58c0-1.58.62-3.11 1.76-4.24L12 5.1m5.66 2.83L12 2.27L6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31A7.98 7.98 0 0 0 12 21.58c2.05 0 4.1-.78 5.66-2.34c3.12-3.12 3.12-8.19 0-11.31"/></svg>
            </Nav.Link>
            <Nav.Link href="#pricing">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 19.58c-1.6 0-3.11-.62-4.24-1.75A5.95 5.95 0 0 1 6 13.58c0-1.58.62-3.11 1.76-4.24L12 5.1m5.66 2.83L12 2.27L6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31A7.98 7.98 0 0 0 12 21.58c2.05 0 4.1-.78 5.66-2.34c3.12-3.12 3.12-8.19 0-11.31"/></svg>
            </Nav.Link>
          </Nav>
          <Nav className="mr-auto nav-fill">
  <Nav.Link  as={Link} to='/login' >Login</Nav.Link>
  <Nav.Link  as={Link} to='/screeningreader'>Screen Reader</Nav.Link>
  <Nav.Link href="#pricing" >Skip to Main Content</Nav.Link>
  <Nav.Link href="#pricing" >Skip to Nav Content</Nav.Link>
  <Nav.Link href="#pricing" >   <IoMdGlobe/> English</Nav.Link>
</Nav>
     <Form>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              style={{backgroundColor:"white",width:"100%",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px" }}
              placeholder="Search"
              className=" mr-sm-2 input-data"
            />
          </Col>
          <Col xs="auto">
          <button className='buttonpart'>Search</button>
          </Col>
        </Row>
      </Form>
        </Container>
       
      </Navbar>
      
      <h6 className="text-uppercase itdata"></h6>
      <Navbar expand="lg" className="navbar-2">
      <Container fluid className='whole-section-data'>
        <Navbar.Brand href="#home">
            <img  className='logo' src={logo}/ >
        </Navbar.Brand>
        <div className='title'>
       <h2>Madhya Pradesh Laghu Udyog Nigam
</h2>
<p>Madhya Pradesh Govt Undertaking
</p>
</div>
        <Navbar.Brand href="#home" className='epcoa'>
            <img  className='coal' src={coal}/ >
            <img  className='eprocurement' src={eprocurement}/ >
        </Navbar.Brand>  
</Container>
          </Navbar>

   {/*   navbar 3 */}
          <Navbar expand="lg" className="navbar-3"
         >
      <Container fluid className='container-3'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto itemsdatas">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="ABOUT US" id="basic-nav-dropdown">
              <NavDropdown.Item  as={Link} to='/introduction' >INTRODUCTION</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               ORGANISATION STRUCTURE
              </NavDropdown.Item >
              <NavDropdown title="BOARD OF DIRECTOR "   id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"  >GRADIATION LIST</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               POSTING WISE EMPLOYMENT LIST
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">EMPLOYE RELATED FORM DOWNLOAD </NavDropdown.Item> 
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          <NavDropdown title="OUR ACTIVITIES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/tender' >TENDER</Nav.Link>
            <Nav.Link  as={Link} to='/ratelist'>RATE LIST</Nav.Link>

            <NavDropdown title="EVENTS " id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="PROJECTS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/pricvacypolicy' >POLICIES</Nav.Link>
            <Nav.Link as={Link} to='/csr'>CSR Us</Nav.Link>

          <Nav.Link as={Link} to='/contactus' >Contact Us</Nav.Link>
        <Nav.Link   as={Link} to='/feedbackforms'>FEEDBACK</Nav.Link>
      <Nav.Link as={Link} to='/productcategolue'>PRODUCT CATALOGUE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
  )
}

export default NavBars

