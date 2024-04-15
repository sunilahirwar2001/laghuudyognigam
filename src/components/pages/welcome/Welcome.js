import React from 'react'
import './Welcome.css'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { TfiHome } from "react-icons/tfi";
import { FaRegHeart } from "react-icons/fa";
import mnriga from '../../../assets/images/carousel/MRIGN.jpg'
import heart from '../../../assets/images/carousel/house-heart-icon-vector-home-260nw-1011433762.jpg'
const Welcome = () => {
  return (
  <Container fluid className='whole-section'>
    <Row>
        <Col sm={8}>
        <div className='contains'>
            <div className='both-icon'>
                {/* <ul>
                    <li className='iconstag'><TfiHome/></li>
                    <li className='heart'><FaRegHeart/> </li>
                </ul> */}
                <img src={heart} className='imgselect' />
            </div>
            <div className='hpara'>
                <h3 className='h1heading'>WELCOME TO MADHYA PRADESH LAGHU UDYOG NIGAM</h3> 
            
                          
        <p>Madhya Pradesh Laghu Udyog Nigam (MPLUN) was incorporated in 1961 as a Madhya Pradesh Government Public Undertaking. Since then the Nigam has been making continuous progress and performing according to objectives of the company and as directed by Govt. time to time.</p>
           <p>In 1978 the Nigam was given task of providing marketing assistance to SSI sector through enabling public procurement for the State Government against rate contract of various products. </p>
       <p>Over the last six decades, MPLUN has been promoting the growth of Micro & Small Entreprises in the Madhya Pradesh and carrying out multidimensional activities such as Development, Construction & Maintenance of Industrial Areas, providing outlet to Weavers & Artisans of the State through renowned Mrignayani Emporiums, providing Iron/Steel & Coal to SSI sector and facilitating the testing of products manufactured by SSI sector etc. </p>
       <button type="button" class="btn btn-warning">Warning</button>
       
        </div>

        </div>
        </Col>
        <Col>
        <div className='all-section'>
        <div className='mnrega'>
            <img src ={mnriga}  className='imgmnariga' />
        </div>
        <button className='mptourism'>Mragyami Mp Tourism
        <small>www webmesme.com</small></button>
        </div>
        </Col>
        </Row>
  </Container>
  )
}

export default Welcome
