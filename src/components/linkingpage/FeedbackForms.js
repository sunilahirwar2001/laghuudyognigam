import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { IoMdPaperPlane } from "react-icons/io";

import './FeedbackForms.css';
function FeedbackForms() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
    securityCode: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      mobile: '',
      subject: '',
      message: '',
      securityCode: ''
    });
  };

  return (
    <>
       <Container fluid className='franchbg'>
      <Row>
        <Col>
        <div className='heading-section'>
           <h4> Feedbackform</h4>
           <div className='sub-section'>
        <h6>Home</h6>/
        <h6>Feedback form</h6>
           </div>
        </div></Col>
      </Row>
    </Container>
    <Container fluid className='feedback-data'>
      <h2 className='sub-title'>Feedback Form</h2>
      <Form onSubmit={handleSubmit} className='feedback'>
        <Row className='intro-part'>
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formMobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="tel" placeholder="Enter your mobile number" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" name="message" value={formData.message} onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Group controlId="formSecurityCode" >
              <Form.Label>Security Code</Form.Label>
              <Form.Control type="text" placeholder="Enter security code" name="securityCode" value={formData.securityCode} onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <div className='' style={{textAlign:"center",justifyContent:"center",display:"flex"
}}>
      
      <button className='feedbutton mb-3'><IoMdPaperPlane />Submit</button>
      {/* <Button className='feedbutton mb-3'><IoMdPaperPlane />  Submit</Button> */}
      </div>
    </Container>
    </>
  );
}
export default FeedbackForms;
