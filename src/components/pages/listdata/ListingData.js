// import React from 'react'
// import { CiBookmarkRemove } from "react-icons/ci";
// import './ListingData.css'
// import { MdCalendarToday } from "react-icons/md";
// import { IoMdAddCircle } from "react-icons/io";

// const ListingData = () => {
//   return (
//     <div class="container">
//     <div class="row">
//       <div class="col-md-3">
//         <div className='latest'>
//             <span><CiBookmarkRemove className='icon'/> Latest Update</span>            
//           <p>First of Agreemented Units (FSA) 2020-22 in BDvvvC (Coal Business), M.P. Laghu Udhog Nigam</p>
//          <div className='datedated'>
//          <MdCalendarToday />  22/05/2029
//          </div>
//           <hr className='hrtag'/>
//           <p>Rate List Of Stationary And Office Use Item Tender No. 22001-S</p>   
//           <div className='datedated'>
//          <MdCalendarToday />  22/05/2029
//          </div>
//           <hr className='hrtag'/>
//          <p>Rate List Of Stationary And Office Use Item Tender No. 22001-S</p>
//          <div className='datedated'>
//          <MdCalendarToday />  22/05/2029
//          </div>
//          <hr className='hrtag'/>
     
//          <p>
//   <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><IoMdAddCircle/> Read More</a>
// </p>
// <div class="row">
//   <div class="col">
//     <div class="collapse multi-collapse" id="multiCollapseExample1">
//       <div class="card card-body">
//         Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
//       </div>
//     </div>
//   </div>
// </div>
//             </div>
            
//       </div>
      
//     </div>
//   </div>
//   )
// }

// export default ListingData



import React from 'react';
import { CiBookmarkRemove } from "react-icons/ci";
import { MdCalendarToday } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import './ListingData.css';

const ListingData = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {[1, 2, 3, 4].map((item, index) => (
          <div key={index} className="col-md-3">
            <div className="latest">
              
              <span><CiBookmarkRemove className='icon' /> Latest Update</span>
              <div className='dataitems'>
              <p>First of Agreemented Units (FSA) 2020-22 in BDvvvC (Coal Business), M.P. Laghu Udhog Nigam</p>
              <div className='datedated'>
                <MdCalendarToday />  22/05/2029
              </div>
              
              <hr className='hrtag' />
              </div>
              <div className='dataitems'>
              <p>Rate List Of Stationary And Office Use Item Tender No. 22001-S</p>
              <div className='datedated'>
                <MdCalendarToday />  22/05/2029
              </div>
              <hr className='hrtag' />
              </div>
              <div className='dataitems'>
              <p>Rate List Of Stationary And Office Use Item Tender No. 22001-S</p>
              <div className='datedated'>
                <MdCalendarToday />  22/05/2029
              </div>
              <hr className='hrtag' />
              </div>
              <div className='ptagused'>
      
              <p>
                <a className="btn" data-bs-toggle="collapse" as={Link} to='/accordianuse' role="button" aria-expanded="false" aria-controls={`multiCollapseExample${index}`}>
                  <IoMdAddCircle /> Read More
                  <FaLongArrowAltRight/>
                </a>
              </p>
              </div>
              <div className="row">
                <div className="col">
                  <div className="collapse multi-collapse" id={`multiCollapseExample${index}`}>
                    <div className="card card-body">
                      Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
           <h5 className="text-uppercase itdata"></h5>
      </div>
    </div>
  );
}

export default ListingData;




