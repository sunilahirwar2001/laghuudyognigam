// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import { Container, Row, Col } from 'react-bootstrap';
// import img1 from '../../assets/images/carousel/banner1.jpg'
// import img2 from '../../assets/images/carousel/banner2.jpg'
// import img3 from '../../assets/images/carousel/CIVIL_NEW1.jpg'
// import img4 from '../../assets/images/carousel/MRIGN_BANNER_new021.jpg'
// import img5 from '../../assets/images/carousel/MRIGN_BANNER_new11.jpg'
// import './OwlCarousel.css';
// const OwlCarousel = () => {
//   return (
//     <Container fluid>
//       <Row>
//         <Col>
//           <Carousel data-bs-theme="dark mx-auto" className='carsoul'>
//             <Carousel.Item>
//               <img src={img1} className="d-block w-100" style={{ height: '70vh' }} />
//               <Carousel.Caption>
//                 <h3>Third slide label</h3>
//                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img src={img2} className="d-block w-100" />
//               <Carousel.Caption>
//                 <h3>Second slide label</h3>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img src={img3} className="d-block w-100" />
//               <Carousel.Caption>
//                 <h3>Third slide label</h3>
//                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img src={img4} className="d-block w-100" />
//               <Carousel.Caption>
//                 <h3>Third slide label</h3>
//                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img src={img5} className="d-block w-100" />
//               <Carousel.Caption>
//                 <h3>Third slide label</h3>
//                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>
//         </Col>
//       </Row>
//     </Container>
//   )
// }
// export default OwlCarousel;




















// import React from "react"
// import Carousel from 'react-bootstrap/Carousel';
// import { Container } from "react-bootstrap";

// import img1 from '../../assets/images/carousel/banner1.jpg'
// import img2 from '../../assets/images/carousel/banner2.jpg'
// import img3 from '../../assets/images/carousel/CIVIL_NEW1.jpg'
// import img4 from '../../assets/images/carousel/MRIGN_BANNER_new021.jpg'
// import img5 from '../../assets/images/carousel/MRIGN_BANNER_new11.jpg'
// const OwlCarousel = () => (
//   <Container fluid >
//       <Carousel
//         showArrows="true"
//         controls="true"
//         justify-self="end"
//         align-self="center"
//         control-prev-icon-color="invert(100%)"
//         control-next-icon-color="invert(100%)"
//         >
//                 <Carousel.Item>
//                   <img className="d-block w-100" src={img1} alt="Portfolio" />
//                   <Carousel.Caption>
//                     <h3 style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}>
//                       Clients</h3>
//                     <p style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}> Manage all your investments.</p>  
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src={img2}
//                     alt="Third slide"
//                   />
//                   <Carousel.Caption>
//                   <h3 style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}>
//                       Assets</h3>
//                   <p style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}> Follow the performance of your asset.</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src={img3}
//                     alt="Third slide"
//                   />
//                   <Carousel.Caption>
//                   <h3 style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}>
//                       CRM Leads</h3>
//                   <p style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}> Search for your advisor, globally.</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src={img4}
//                     alt="Fourth slide"
//                   />
//                   <Carousel.Caption>
//                   <h3 style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}>
//                       CRM Process</h3>
//                   <p style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}> All the information you can you need about the advisor.</p>    
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src={img5}
//                     alt="Fitht slide"
//                   />
//                   <Carousel.Caption>
//                   <h3 style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}>
//                       Private Chat</h3>
//                   <p style={{type:'text/css', background:'rgba(33, 33, 33, 0.7)'}}> All the information you can you need about the advisor.</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//       </Carousel>
//   </Container>
// )

// export default OwlCarousel









// import React, { useRef, useEffect } from "react";
// import Carousel from 'react-bootstrap/Carousel';
// import { Container } from "react-bootstrap";

// import img1 from '../../assets/images/carousel/banner1.jpg'
// import img2 from '../../assets/images/carousel/banner2.jpg'
// import img3 from '../../assets/images/carousel/CIVIL_NEW1.jpg'
// import img4 from '../../assets/images/carousel/MRIGN_BANNER_new021.jpg'
// import img5 from '../../assets/images/carousel/MRIGN_BANNER_new11.jpg'
// import './OwlCarousel.css'
// const OwlCarousel = () => {
//   const parallaxRef = useRef();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (parallaxRef.current) {
//         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         const parallaxOffset = -(scrollTop / 2);
//         parallaxRef.current.style.backgroundPositionY = `${parallaxOffset}px`;
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <Container fluid>
//       <div ref={parallaxRef} style={{ overflow: 'hidden' }}>
//         <Carousel
//           showArrows={true}
//           controls={true}
//           justify-self="end"
//           align-self="center"
//           control-prev-icon-color="invert(100%)"
//           control-next-icon-color="invert(100%)"
//           interval={null}
//         >
//           <Carousel.Item>
//             <img className="d-block w-100" src={img1} alt="Portfolio" />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={img2}
//               alt="Third slide"
//             />
          
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={img3}
//               alt="Third slide"
//             />
         
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={img4}
//               alt="Fourth slide"
//             />
          
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={img5}
//               alt="Fifth slide"
//             />
//           </Carousel.Item>
//         </Carousel>
//       </div>
//     </Container>
//   );
// }
// export default OwlCarousel;










import React, { useRef, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Container } from "react-bootstrap";

import img1 from '../../assets/images/carousel/banner1.jpg'
import img2 from '../../assets/images/carousel/banner2.jpg'
import img3 from '../../assets/images/carousel/CIVIL_NEW1.jpg'
import img4 from '../../assets/images/carousel/MRIGN_BANNER_new021.jpg'
import img5 from '../../assets/images/carousel/MRIGN_BANNER_new11.jpg'
import './OwlCarousel.css'
const OwlCarousel = () => {
  const parallaxRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const parallaxOffset = -(scrollTop / 2);
        parallaxRef.current.style.backgroundPositionY = `${parallaxOffset}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container fluid>
      <div ref={parallaxRef} style={{ overflow: 'hidden' }}>
        <Carousel
          showArrows={true}
          controls={true}
          justify-self="end"
          align-self="center"
          control-prev-icon-color="invert(100%)"
          control-next-icon-color="invert(100%)"
          interval={null}
          className="custom-carousel"
        >
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="Portfolio" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Third slide"
            />
          
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />
         
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img4}
              alt="Fourth slide"
            />
          
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img5}
              alt="Fifth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
}
export default OwlCarousel;
