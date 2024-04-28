import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../../assets/images/MPLUN.jpg';
import { Link } from 'react-router-dom';
import './Introduction.css';
const Introduction = () => {
  return (

     <>
     <Container fluid className='franchbg'>
      <Row>
        <Col>
        <div className='heading-section'>
           <h4> introduction</h4>
           <div className='sub-section d-flex justify-content-end"'>
        <h6>Home</h6>/
        <h6>Intoduction</h6>
           </div>
        </div></Col>
      </Row>
    </Container>
     
     
    <Container className='second-part'>
      <Row className='intro-part'>
        <Col>
        <div className='intro-class'>
            <h3>INTRODUCTION</h3>
            <hr className='lineborder'/>
            <div className='psectiondata'>
                <p>Madhya Pradesh Laghu Udyog Nigam (MPLUN) was incorporated in 1961 as a Madhya Pradesh Government Public Undertaking. Since then the Nigam has been making continuous progress and performing according to objectives of the company and as directed by Govt. time to time.</p>

                <p>In 1978 the Nigam was given task of providing marketing assistance to SSI sector through enabling public procurement for the State Government against rate contract of various products. </p>

                <p>Over the last six decades, MPLUN has been promoting the growth of Micro, Small & Entrepreneur in the Madhya Pradesh and carrying out multidimensional activities such as Development, Construction & Maintenance of Industrial Areas, providing outlet to Weavers & Artisans of the State through renowned Mrignayani Emporiums, providing Iron/Steel & Coal to SSI sector and facilitating the testing of products manufactured by SSI sector etc.</p>
                <p>Today, it is a Rs. 1,000 crore company of more than 250 committed and dedicated workforces comprising of a team of professionals from the areas of management, finance, engineering, textiles, pharmaceuticals, technical, electronics and computers.</p>
                <div>
                    <img src ={img1}  className='margranayani' alt='margranayani'/>
                </div>
                <h5>Vision</h5>
                <p>To promote and accelerate the growth of the Micro & Small Industries including weavers & artisans through various growths inputs and provide quality conscious vendors to Govt. Departments to ensure efficient procurement of products.</p>
                <h5>Mission</h5>
                <p>To act as an ideal marketing and public procurement organization committed to the promotion of quality goods and services at reasonable prices and developing, promoting & sustaining Small Scale Industries of the State.</p>
                <p>To set up and expand advanced quality control facilities.</p>
                <p>To be in sync with the latest technological achievement and incorporating them appropriately.</p>
                <p>To act as a facilitator for development of weavers and artisans of the State.
To act as an agency for providing raw materials to SSIs.</p> 
<h5>Objective</h5>
<p>To provide raw material to the SSIs of MP so as to help them to develop their products for competitive markets.</p>
<p>To develop MPLUN as a marketing and procurement organization and introduce e-governance for the same.</p>
  
  <p>To make available high-quality technical services to SSIs.
To promote and provide national and international market access to SSIs / tiny industries of the State.</p>
<p>To build quality infrastructure for Govt. / Semi Govt. Departments / Bodies.
</p>
            </div>
            </div> 
        </Col>
      </Row>
    </Container>
    </>
  )
}
export default Introduction
