import React from "react";
import Slider from "react-slick";
import img1 from '../../../assets/images/splitcarousl/GeM-1.jpg'
import img2 from '../../../assets/images/splitcarousl/mono.png'
import img3 from '../../../assets/images/splitcarousl/ni-msme.png'
import img4 from '../../../assets/images/splitcarousl/nifd.png'
import img5 from '../../../assets/images/splitcarousl/nift-logo.jpg'
import './SlickCarousel.css';
export default function SlickCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings} style={{backgroundColor:"black"}}>
      <div>
       <img src ={img1}     style={{width:"150px",height:"100px"}}/>
      </div>
      
      <div>
       <img src ={img2}   style={{width:"150px",height:"100px"}}/>
      </div>
      <div>
       <img src ={img3}   style={{width:"150px",height:"100px"}}/>
      </div>
      <div>
       <img src ={img4}   style={{width:"150px",height:"100px"}}/>
      </div>
      <div>
       <img src ={img5}    style={{width:"150px",height:"100px"}}/>
      </div>
    </Slider>
    
  );
}