import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import desktop from '../../assets/images/categolueimg/493-4933810_desktop-computer-hd-png-download(1).png'
import  ac from '../../assets/images/categolueimg/ac(1).jpg'
import cooler from '../../assets/images/categolueimg/cooler.jpg'
import fan from '../../assets/images/categolueimg/fan.jpg'
import gi2 from '../../assets/images/categolueimg/gi_2.jpg'
import laptop from '../../assets/images/categolueimg/laptop(1).jpg'
import mobile from '../../assets/images/categolueimg/mobile(1).jpg'
import tablet from '../../assets/images/categolueimg/tablet.jpg'
import chair from '../../assets/images/categolueimg/कुर्सी 02.jpg'
import sofa from '../../assets/images/categolueimg/सोफा 01(1).jpg'
import './ProductCategolue.css';
function ProductCategolue() {
  return (
    <>
   <Container fluid className='franchbg'>
      <Row>
        <Col>
        <div className='heading-section'>
           <h4> Categoluge</h4>
           <div className='sub-section'>
        <h6>Home</h6>/
        <h6>Categolue</h6>
           </div>
        </div></Col>
      </Row>
    </Container>

    <Container fluid className='second-behaoiur'>
      <Row className='intro-part'>
        <Col>
        <div className='intro-class'>
            <h3>INTRODUCTION</h3>
            <hr className='lineborder'/>
            <div className='psectiondata'>
        <div >
        <img src={chair}  className='chair' />
        </div>
        <div>
        <img src={desktop}  className='chair'/>
        </div>

        <div>
        <img src={ac}  className='chair'/>
        </div>
        <div>
        <img src={cooler}  className='chair'/>
        </div>
        <div>
        <img src={fan}  className='chair'/>
        </div>
        <div>
        <img src={gi2}  className='chair'/>
        </div>
        <div>
        <img src={mobile}  className='chair'/>
        </div>
        <div>
        <img src={tablet}  className='chair'/>
        </div>
        <div>
        <img src={laptop}  className='chair'/>
        </div>
        <div>
        <img src={sofa}  className='chair'/>
        </div>

        
</div>
        </div>
        </Col>
     
      </Row>
    
    </Container>
    </>
  );
}

export default ProductCategolue;






// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import desktop from '../../assets/images/categolueimg/493-4933810_desktop-computer-hd-png-download(1).png'
// import ac from '../../assets/images/categolueimg/ac(1).jpg'
// import cooler from '../../assets/images/categolueimg/cooler.jpg'
// import fan from '../../assets/images/categolueimg/fan.jpg'
// import gi2 from '../../assets/images/categolueimg/gi_2.jpg'
// import laptop from '../../assets/images/categolueimg/laptop(1).jpg'
// import mobile from '../../assets/images/categolueimg/mobile(1).jpg'
// import tablet from '../../assets/images/categolueimg/tablet.jpg'
// import Office from '../../assets/images/categolueimg/ऑफिस टेबल01(1).jpg'
// import chair from '../../assets/images/categolueimg/कुर्सी 02.jpg'
// import sofa from '../../assets/images/categolueimg/सोफा 01(1).jpg'
// import './ProductCategolue.css';

// function ProductCategolue() {
//   return (
//     <Container>
//       <h5 className="text-center mb-4">PRODUCT CATALOGUE</h5>
//       <Row>
//         <Col md={4} className="text-center">
//           <img src={desktop} alt="Desktop" className="product-image" />
//         </Col>
//         <Col md={4} className="text-center">
//           <img src={ac} alt="AC" className="product-image" />
//         </Col>
//         <Col md={4} className="text-center">
//           <img src={cooler} alt="Cooler" className="product-image" />
//         </Col>
//       </Row>
//       <Row>
//         <Col md={4} className="text-center">
//           <img src={fan} alt="Fan" className="product-image" />
//         </Col>
//         <Col md={4} className="text-center">
//           <img src={gi2} alt="GI2" className="product-image" />
//         </Col>
//         <Col md={4} className="text-center">
//           <img src={laptop} alt="Laptop" className="product-image" />
//         </Col>
//       </Row>
//       <Row>
//         <Col md={4} className="text-center">
//           <img src={mobile} alt="Mobile" className="product-image" />
//         </Col>
//         <Col md={4} className="text-center">
//           <img src={tablet} alt="Tablet" className="product-image" />
//         </Col>
//         <Col md={4} className="text-center">
//           <img src={Office} alt="Office" className="product-image" />
//         </Col>
//       </Row>
//       <Row>
//         <Col md={4} className="text-center">
//           <img src={chair} alt="Chair" className="product-image" />
//         </Col>
//         <Col md={4} className="text-center">
//           <img src={sofa} alt="Sofa" className="product-image" />
//         </Col>
//       </Row>
//     </Container>
//   );
// }
// export default ProductCategolue;
