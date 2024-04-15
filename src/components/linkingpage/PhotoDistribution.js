
// import Accordion from 'react-bootstrap/Accordion';
// import { useState } from 'react';
// import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

// function PhotoDistribution() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <Accordion activeKey={openIndex}>
//       <Accordion.Item eventKey="0">
//         <Accordion.Header onClick={() => handleToggle(0)}>
//         Accordion Item #1    {openIndex === 0 ? <CiSquareMinus /> : <CiSquarePlus />}
//         </Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="1">
//         <Accordion.Header onClick={() => handleToggle(1)}>
//           {openIndex === 1 ? <CiSquareMinus /> : <CiSquarePlus />} Accordion Item #2
//         </Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//   );
// }

// export default PhotoDistribution;



// import React, { useState } from 'react';
// import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
// import './PhotoDistribution.css';

// const PhotoDistribution = () => {
//   const [showAccordion1, setShowAccordion1] = useState(true);
//   const [showAccordion2, setShowAccordion2] = useState(false);
//   const [showAccordion3, setShowAccordion3] = useState(false);

//   return (
//     <div classNameNameName="accordion" id="accordionExample">
//       <div classNameNameName="accordion-item">
//         <h2 classNameNameName="accordion-header" id="headingOne">
//         <button classNameNameName="button-1 accordion-button" type="button" onClick={() => setShowAccordion1(!showAccordion1)}>
//   Accordion Item #1
//   {showAccordion1 ? <CiSquareMinus /> : <CiSquarePlus />}
// </button>
//         </h2>
//         <div id="collapseOne" classNameNameName={`accordion-collapse collapse ${showAccordion1 ? 'show' : ''}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//           <div classNameNameName="accordion-body">
//             <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNameNameNamees that we use to style each element. These classNameNameNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//           </div>
//         </div>
//       </div>
//       <div classNameNameName="accordion-item">
//         <h2 classNameNameName="accordion-header" id="headingTwo">
//           <button classNameNameName=" button-2 accordion-button" type="button" onClick={() => setShowAccordion2(!showAccordion2)}>
//             Circular
//             {showAccordion2 ? <CiSquareMinus /> : <CiSquarePlus />}
//           </button>
//         </h2>
//         <div id="collapseTwo" classNameNameName={`accordion-collapse collapse ${showAccordion2 ? 'show' : ''}`} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//           <div classNameNameName="accordion-body">
//             <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNameNameNamees that we use to style each element. These classNameNameNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//           </div>
//         </div>
//       </div>
//       <div classNameNameName="accordion-item">
//         <h2 classNameNameName="accordion-header" id="headingThree">
//           <button classNameNameName="  button-3 accordion-button" type="button" onClick={() => setShowAccordion3(!showAccordion3)}>
//                News
//             {showAccordion3 ? <CiSquareMinus /> : <CiSquarePlus />}
//           </button>
//         </h2>
//         <div id="collapseThree" classNameNameName={`accordion-collapse collapse ${showAccordion3 ? 'show' : ''}`} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//           <div classNameNameName="accordion-body">
//             <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNameNameNamees that we use to style each element. These classNameNameNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PhotoDistribution;

// import React, { useState } from 'react';
// import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import './PhotoDistribution.css';

// const PhotoDistribution = () => {
//   const [accordion1Open, setAccordion1Open] = useState(true);
//   const [accordion2Open, setAccordion2Open] = useState(false);
//   const [accordion3Open, setAccordion3Open] = useState(false);

//   return (

//     <Container fluid>
//     <Row>
//  <Col md={3}> 
 
 
//     <div>

   
//     <div className="accordion" id="accordionExample">
//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button className="accordion-button button-1"    style={{ backgroundColor: "rgb(68, 47, 94)", color: "white"}}   type="button" onClick={() => setAccordion1Open(!accordion1Open)}>
//           Latest Updates 
//             {accordion1Open ? <CiSquareMinus /> : <CiSquarePlus />}
//           </button>
//         </h2>
//         <div className={`accordion-collapse collapse ${accordion1Open ? 'show' : ''}`} id="collapseOne" data-bs-parent="#accordionExample">
//           <div className="accordion-body">
//             Rate List Of Stationary And Office Use Item Tender No. 22001-S
//             25-Sep-2023
//           </div>
//         </div>
//       </div>
//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button className="accordion-button button-2" style={{ backgroundColor: "rgb(143, 0, 19)", color: "white"}} type="button" onClick={() => setAccordion2Open(!accordion2Open)}>
//            Circular
//             {accordion2Open ? <CiSquareMinus /> : <CiSquarePlus />}
//           </button>
//         </h2>
//         <div className={`accordion-collapse collapse ${accordion2Open ? 'show' : ''}`} id="collapseTwo" data-bs-parent="#accordionExample">
//           <div className="accordion-body">
//             Tender Notice Number 14-A /2021-2022 Publish Date 08/10/2021
//             11-Oct-2021
//           </div>
//         </div>
//       </div>
//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button className="accordion-button button-3" style={{ backgroundColor: "rgb(116, 166, 50)", color: "white"}} type="button" onClick={() => setAccordion3Open(!accordion3Open)}>
//            News
//             {accordion3Open ? <CiSquareMinus /> : <CiSquarePlus />}
//           </button>
//         </h2>
//         <div className={`accordion-collapse collapse ${accordion3Open ? 'show' : ''}`} id="collapseThree" data-bs-parent="#accordionExample">
//           <div className="accordion-body">
//             List of Agreemented Units (FSA) 2020-22 in BDC (Coal Business), M.P. Laghu Udhog Nigam
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </Col>
  
//         <Col  md={3}>
//         <div className='box1'>

//         </div>
//         </Col>
//         <Col  md={3}>
//         <div className='box2'>

//         </div>
//         </Col>
//         <Col  md={3}>
//         <div className='box3'>

//         </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default PhotoDistribution;

// import React, { useState } from 'react';
// import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import './PhotoDistribution.css';
// import img1 from '../../assets/images/offices/16072019122835005.jpg'
// import img2 from '../../assets/images/offices/IITF_2022.jpeg'
// import img3 from '../../assets/images/offices/IITF_2022_culture_programme.jpeg'
// import img4 from '../../assets/images/offices/WhatsApp_Image_2022-11-14_at_13_54_39.jpeg'
// import img5 from '../../assets/images/offices/WhatsApp_Image_2022-11-14_at_13_54_40(1).jpeg'
// import img6 from '../../assets/images/offices/WhatsApp_Image_2022-11-14_at_13_54_40.jpeg'

// import { IoIosAdd } from "react-icons/io";

// const PhotoDistribution = () => {
//   const [accordion1Open, setAccordion1Open] = useState(true);
//   const [accordion2Open, setAccordion2Open] = useState(false);
//   const [accordion3Open, setAccordion3Open] = useState(false);


//   const [enlargedImage, setEnlargedImage] = useState(null);

//   const handleImageClick = () => {
//     // Logic to toggle the visibility of the enlarged image
//     setEnlargedImage(prevState => !prevState);
//   };

//   return (
//     <Container fluid>
//       <Row>
//         <Col md={3}>
//           <div className="accordion h-100" id="accordionExample">
//             <div className="accordion-item">
//               <h2 className="accordion-header">
//                 <button className="accordion-button button-1" style={{ backgroundColor: "rgb(68, 47, 94)", color: "white" }} type="button" onClick={() => setAccordion1Open(!accordion1Open)}>
//                   Latest Updates
//                   {accordion1Open ? <CiSquareMinus /> : <CiSquarePlus />}
//                 </button>
//               </h2>
//               <div className={`accordion-collapse collapse ${accordion1Open ? 'show' : ''}`} id="collapseOne" data-bs-parent="#accordionExample">
//                 <div className="accordion-body">
//                   Rate List Of Stationary And Office Use Item Tender No. 22001-S
//                   25-Sep-2023
//                 </div>
//               </div>
//             </div>
//             <div className="accordion-item">
//               <h2 className="accordion-header">
//                 <button className="accordion-button button-2" style={{ backgroundColor: "rgb(143, 0, 19)", color: "white" }} type="button" onClick={() => setAccordion2Open(!accordion2Open)}>
//                   Circular
//                   {accordion2Open ? <CiSquareMinus /> : <CiSquarePlus />}
//                 </button>
//               </h2>
//               <div className={`accordion-collapse collapse ${accordion2Open ? 'show' : ''}`} id="collapseTwo" data-bs-parent="#accordionExample">
//                 <div className="accordion-body">
//                   Tender Notice Number 14-A /2021-2022 Publish Date 08/10/2021
//                   11-Oct-2021
//                 </div>
//               </div>
//             </div>
//             <div className="accordion-item">
//               <h2 className="accordion-header">
//                 <button className="accordion-button button-3" style={{ backgroundColor: "rgb(116, 166, 50)", color: "white" }} type="button" onClick={() => setAccordion3Open(!accordion3Open)}>
//                   News
//                   {accordion3Open ? <CiSquareMinus /> : <CiSquarePlus />}
//                 </button>
//               </h2>
//               <div className={`accordion-collapse collapse ${accordion3Open ? 'show' : ''}`} id="collapseThree" data-bs-parent="#accordionExample">
//                 <div className="accordion-body">
//                   List of Agreemented Units (FSA) 2020-22 in BDC (Coal Business), M.P. Laghu Udhog Nigam
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Col>

//         <Col md={3}>
//           <div className='box1'>
//             <div>
//               <img src={img1} className='imgselection' />
//             </div>
//        <IoIosAdd className='iconadd'/>
//           </div>
//         </Col>
//         {/* <Col md={3}>
//       {enlargedImage && (
//         <div className='enlarged-image-container' onClick={handleImageClick}>
//           <img src={img1} className='enlarged-image' alt='Enlarged' style={{height:"300px",width:"300px"}}   />
//         </div>
//       )}

//       <div className='box1'>
//         <div>
//           <img src={img1} className='imgselection' alt='Thumbnail' />
//         </div>
//         <IoIosAdd className='iconadd' onClick={handleImageClick} />
//       </div>
//     </Col> */}


// <Col md={3}>
//           <div className='box2'>
//           <div>
//               <img src={img2} className='imgselection' />
//             </div>
//          <CiSquarePlus/>
//           </div>
//         </Col>
//         <Col md={3}>
//           <div className='box3'>
//           <div>
//               <img src={img3} className='imgselection' />
//             </div>
//          <CiSquarePlus/>
//           </div>
//         </Col>

//         <Col md={3}>
//           <div className='box4'>
//           <div>
//               <img src={img4} className='imgselection' />
//             </div>
//          <CiSquarePlus/>
//           </div>
//         </Col>
//         <Col md={3}>
//           <div className='box5'> 
//           <div>
//               <img src={img5} className='imgselection' />
//             </div>
//           <CiSquarePlus/>
//           </div>
//         </Col>
//         <Col md={3}>
//           <div className='box6'>
//           <div>
//               <img src={img6} className='imgselection' />
//             </div>
//          <CiSquarePlus/>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default PhotoDistribution;






import React, { useState } from 'react';
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { Container, Row, Col } from 'react-bootstrap';
import './PhotoDistribution.css';
import img1 from '../../assets/images/offices/16072019122835005.jpg';
import img2 from '../../assets/images/offices/IITF_2022.jpeg';
import img3 from '../../assets/images/offices/IITF_2022_culture_programme.jpeg';
import img4 from '../../assets/images/offices/WhatsApp_Image_2022-11-14_at_13_54_39.jpeg';
import img5 from '../../assets/images/offices/WhatsApp_Image_2022-11-14_at_13_54_40(1).jpeg';
import img6 from '../../assets/images/offices/WhatsApp_Image_2022-11-14_at_13_54_40.jpeg';
import { IoIosAdd } from "react-icons/io";

const PhotoDistribution = () => {
  const [accordion1Open, setAccordion1Open] = useState(true);
  const [accordion2Open, setAccordion2Open] = useState(false);
  const [accordion3Open, setAccordion3Open] = useState(false);

  return (
    <Container fluid className='itemsdata'>
      <Row>
        <Col md={3}>
          <div className="accordion h-100" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button button-1" style={{ backgroundColor: "rgb(68, 47, 94)", color: "white" }} type="button" onClick={() => setAccordion1Open(!accordion1Open)}>
                  Latest Updates
                  {accordion1Open ? <CiSquareMinus /> : <CiSquarePlus />}
                </button>
              </h2>
              <div className={`accordion-collapse collapse ${accordion1Open ? 'show' : ''}`} id="collapseOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Rate List Of Stationary And Office Use Item Tender No. 22001-S
                  25-Sep-2023
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button button-2" style={{ backgroundColor: "rgb(143, 0, 19)", color: "white" }} type="button" onClick={() => setAccordion2Open(!accordion2Open)}>
                  Circular
                  {accordion2Open ? <CiSquareMinus /> : <CiSquarePlus />}
                </button>
              </h2>
              <div className={`accordion-collapse collapse ${accordion2Open ? 'show' : ''}`} id="collapseTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Tender Notice Number 14-A /2021-2022 Publish Date 08/10/2021
                  11-Oct-2021
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button button-3" style={{ backgroundColor: "rgb(116, 166, 50)", color: "white" }} type="button" onClick={() => setAccordion3Open(!accordion3Open)}>
                  News
                  {accordion3Open ? <CiSquareMinus /> : <CiSquarePlus />}
                </button>
              </h2>
              <div className={`accordion-collapse collapse ${accordion3Open ? 'show' : ''}`} id="collapseThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  List of Agreemented Units (FSA) 2020-22 in BDC (Coal Business), M.P. Laghu Udhog Nigam
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={9}  className='rowninedata'>
          <Row>
            <Col md={4}>
              <div className='box1'>
                <div>
             
                  <img src={img1} className='imgselection' />
                 
                </div>
                <IoIosAdd className='iconadd' />
                <h6 className='price'>Price Distribution</h6>
              </div>
            </Col>
            <Col md={4}>
              <div className='box2'>
                <div>
                  <img src={img2} className='imgselection' />
                </div>
                <CiSquarePlus  className='iconadd'/>
                <h6 className='price'>IITF 2022</h6>
              </div>
            </Col>
            <Col md={4}>
              <div className='box3'>
                <div>
                  <img src={img3} className='imgselection' />
                </div>
                <CiSquarePlus  className='iconadd'/>
                <h6 className='price'>IITF 2022</h6>

              </div>
            </Col>
            <Col md={4}>
              <div className='box4'>
                <div>
                  <img src={img4} className='imgselection' />
                </div>
                <CiSquarePlus  className='iconadd'/>
                <h6 className='price'>IITF 2022</h6>

              </div>
            </Col>
            <Col md={4}>
              <div className='box5'>
                <div>
                  <img src={img5} className='imgselection' />
                </div>
                <CiSquarePlus className='iconadd' />
                <h6 className='price'>IITF 2022</h6>

              </div>
            </Col>
            <Col md={4}>
              <div className='box6'>
                <div>
                  <img src={img6} className='imgselection' />
                </div>
                <CiSquarePlus className='iconadd' />
                <h6 className='price'>IITF 2022</h6>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default PhotoDistribution;
