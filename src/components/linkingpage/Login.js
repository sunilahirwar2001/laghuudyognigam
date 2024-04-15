// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import './Login.css';
// import logo from '../../assets/images/logo.png'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { FaLock } from "react-icons/fa6";
// import { FaRegUser } from "react-icons/fa";

// const Login = () => {
//   return (
//     <Container fluid className='col-datas'>
//     <Row className='row-datas' >
//       <Col>
//     <div  className='loginform'>
//         <img src={logo} />
//     </div>
//     <div className='all-forms'>

//       <Form className='form-data'>
//         <h6>LOGIN TO YOUR ACCOUNT</h6>
//       <Form.Group className="mb-3" controlId="username">
//         <Form.Label>Username</Form.Label>
//         <Form.Control type="username" placeholder="Enter username" />
//         <FaRegUser/> <FaRegUser/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
       
//         <Form.Control type="password" placeholder="Password"  /> <FaLock/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
       
//         <Form.Control type="text" placeholder="Enrer security code"  /> 
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Login
//       </Button>
//       <h5>Forgot your password ?</h5>
//       <p>
// no worries,click here to reset your password.</p>
//     </Form>
//     </div>
//       </Col>
//     </Row>
//   </Container>
   
//   )
// }

// export default Login












import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
import logo from '../../assets/images/logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLock, FaRegUser } from "react-icons/fa";

const Login = () => {
  return (
    <Container fluid className='col-datas'>
      <Row className="justify-content-center">
        <Col md={6}>
          <div className='loginform'>
            <img src={logo} alt="Logo" />
          </div>
          <div className='all-forms'>

            <Form className='form-data'>
              <h6 className='account'>LOGIN TO YOUR ACCOUNT</h6>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <div className="input-with-icon">
                  <Form.Control type="username" placeholder="Enter username" />
                  <FaRegUser className="input-icon" />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className="input-with-icon">
                  <Form.Control type="password" placeholder="Password" />
                  <FaLock className="input-icon" />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicSecurityCode">
                <Form.Label>Security Code</Form.Label>
                <Form.Control type="text" placeholder="Enter security code" />
              </Form.Group >
              <button type="submit" className='loginbutton'>
                Login
              </button>
              <h5>Forgot your password ?</h5>
              <p>No worries, click here to reset your password.</p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;