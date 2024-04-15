import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PrivacyPolicy.css';
const PricvacyPolicy = () => {
  return (
    <>
     <Container fluid className='franchbg'>
      <Row>
        <Col>
        <div className='heading-section'>
           <h4> POLICY</h4>
           <div className='sub-section'>
        <h6>Home</h6>/
        <h6>POLICY</h6>
           </div>
        </div></Col>
      </Row>
    </Container>
     
    

    <Container fluid>
    <Row className='policy-row'>
      <Col>
      <div className='policy'>
        <h1>POLICIES</h1>
        <p> MP MSME Development Policy 2019</p>
        <p>MP MSME Promotion Scheme 2019</p>
        <p> MP Startup Policy 2019
</p>
<p> Policy Procedure for Coal allotment/distribution 07/04/2008</p>
   <p>Policy Procedure for Coal allotment/distribution 07/10/2017</p>
    <p>MP Incubation Startup Policy 2016</p>
        </div></Col>
    </Row>
  </Container>
  </>
  )
}
export default PricvacyPolicy
