// import React from 'react'
// import './Footer.css';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import { FaRegHeart } from "react-icons/fa";
// import { TbSquareArrowRightFilled } from "react-icons/tb";
// const Footer = () => {
//   return (
//         <div className='coldata'>
    
//       <div>
//         <ul>
//             <li> <TbSquareArrowRightFilled/> oodhmptjhtr</li>
//             <li> abcd</li>
//             <li> abcd</li>  <li> abcd</li>  <li> abcd</li>  <li> abcd</li>
//         </ul>
//       </div>
//       <div>
//         <ul>
//             <li> <TbSquareArrowRightFilled/> oodhmptjhtr</li>
//             <li>   <TbSquareArrowRightFilled/> abcd</li>
//             <li>  abcd</li>  <li> abcd</li>  <li> abcd</li>  <li> abcd</li>
//         </ul>
//       </div>
//       <div>
//         <ul>
//             <li> <TbSquareArrowRightFilled/> oodhmptjhtr</li>
//             <li> 
//                 <a href='home'></a> abcd</li>
//             <li> abcd</li>  <li> abcd</li>  <li> abcd</li>  <li> abcd</li>
//         </ul>
//       </div>
        
//       </div>
//   )
// }

// export default Footer



import React from "react";
import { TbSquareArrowRightFilled } from "react-icons/tb";
import { IoMdCalendar } from "react-icons/io";
import { Link } from "react-router-dom";
import  './Footer.css';
const Footer = () => (
  <footer className="page-footer font-small pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <h5 className="text-uppercase itdata">Important Links</h5>   

        <div className="col-md-3 mb-md-0 mb-3">
          
          <ul className="list-unstyled">
          <Link to='/photodistribution'> <li><a ><TbSquareArrowRightFilled/> Photo gallery</a></li></Link>  
            <li><a href="#!"><TbSquareArrowRightFilled/> Real estate information of Nigam</a></li>
            <li><a href="#!"><TbSquareArrowRightFilled/> Opening</a></li>
            <li><a href="#!"><TbSquareArrowRightFilled/> Site Map</a></li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <ul className="list-unstyled">
            <li><a href="#!"><TbSquareArrowRightFilled/> Right To Information</a></li>
            <li><a href="#!"><TbSquareArrowRightFilled/> Downloads</a></li>
            <li><a href="#!"><TbSquareArrowRightFilled/> Privacy Policy</a></li>
            <li><a href="#!"><TbSquareArrowRightFilled/> Application for Lab Test</a></li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <ul className="list-unstyled">
            <li><a href="#!"><TbSquareArrowRightFilled/> MPLUN branches map</a></li>
            <li><a href="#!"><TbSquareArrowRightFilled/> Act & Rules</a></li>
            <li><a href="#!"><TbSquareArrowRightFilled/> Disclaimer</a></li>
          </ul>
        </div>
        
        <div className="col-md-3 mt-md-0 mt-3">
          <p className="text-uppercase size-content">Size Content</p>
          <p className="updated"><IoMdCalendar/> Last Updated On: 15 Nov, 2018 </p>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3 footer-bottom">

      <p><a href="https://mdbootstrap.com/">Content Provided and Maintained by MPLUN</a></p>

    </div>


  </footer>
);
export default Footer;
