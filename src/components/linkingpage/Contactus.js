import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import contact from '../../assets/images/CONTACTUS1.jpg';
import { Table } from 'react-bootstrap';
import './Contact.css';
const Contactus = () => {

    const departments = [
        { name: "Personnel Department", address: "2nd Floor, Panchanan Building, Malviya Ngar, Bhopal (Madhya Pradesh) - 462003", email: "", telephone: "" },
        { name: "Finance & Accounts Department", address: "4th Floor, Panchanan Building, Malviya Ngar, Bhopal (Madhya Pradesh) - 462003", email: "aguru.lun@mp.gov.in", telephone: "0755-2673118" },
        { name: "Marketing Department", address: "1st Floor, Panchanan Building, Malviya Ngar, Bhopal (Madhya Pradesh) - 462003", email: "support.lun@mp.gov.in", telephone: "0755-2673189, 2673005" },
        { name: "Administration Department", address: "2nd Floor, Panchanan Building, Malviya Ngar, Bhopal (Madhya Pradesh) - 462003", email: "", telephone: "" },
        { name: "Estate & Construction and Interior decoration Department", address: "2nd Floor, Panchanan Building, Malviya Ngar, Bhopal (Madhya Pradesh) - 462003", email: "laghuc@gmail.com", telephone: "0755-2673189, 2673005" },
        { name: "Raw Material Department", address: "2nd Floor, Panchanan Building, Malviya Ngar, Bhopal (Madhya Pradesh) - 462003", email: "", telephone: "" },
        { name: "Testing Labs Department", address: "2nd Floor, Panchanan Building, Malviya Ngar, Bhopal (Madhya Pradesh) - 462003", email: "", telephone: "" },
        { name: "Emporium Department", address: "2nd Floor, Panchanan Building, Malviya Ngar, Bhopal (Madhya Pradesh) - 462003", email: "", telephone: "" }
      ];
      const branches = [
        { name: "Mrignayani MP Emporium, Bhopal", address: "23, Shopping Centre, T.T. Nagar New Market, Bhopal", email: "-", telephone: "0755 – 2554162" },
        { name: "Mrignayani MP Emporium, Indore", address: "165, M. G. Road, Indore", email: "-", telephone: "0731 – 2541945" },
        { name: "Mrignayani MP Emporium, Gwalior", address: "Patankar Bazar, Lashar, Gwalior", email: "-", telephone: "0751 – 25041903" },
        { name: "Mrignayani MP Emporium, Jabalpur", address: "10/14-15 Civic Centre, Marhatal, Jabalpur", email: "-", telephone: "0761 – 2310078" },
        { name: "Mrignayani MP Emporium, Rewa", address: "Kothi Compound, Rewa", email: "-", telephone: "0762 – 222292" },
        { name: "Mrignayani MP Emporium, New Delhi", address: "B-8, Baba Kharak Singh Marg, New Delhi", email: "-", telephone: "011 – 23363320" },
        { name: "Mrignayani MP Emporium, Kolkata", address: "CIT Complex, 2 Gariahat Road (South), Kolkata", email: "-", telephone: "033 – 24732512" },
        { name: "Avanti MP Emporium, Kolkata", address: "Avanti MP Emporium, Uttrapan, Kolkata", email: "-", telephone: "033 – 24732512" }
      ]; const units = [
        { name: "Raw Material Depot, Bhopal", address: "Industrial Area, Bhopal", email: "c-", telephone: "0" },
        { name: "Raw Material Depot, Jabalpur", address: "P-", email: "tl-", telephone: "0761-" },
        { name: "Raw Material Depot, Indore", address: "P-", email: "-", telephone: "0731-" },
        { name: "Raw Material Depot, Gwalior", address: "P-", email: "t-", telephone: "0-" }
      ];


      const branchesTestingLabs = [
        { name: "Testing Labs, Indore", address: "Pologround Industrial Estate, Indore, Madhya Pradesh-452015", email: "contactqmtl@yahoo.in", telephone: "0731-2421010, 0731-2421003" },
        { name: "Testing Labs, Jabalpur", address: "Plot No. 256/1, Industrial Area Richhai, Jabalpur, Madhya Pradesh- 482010", email: "tlabjbp@rediffmail.com, mplun.lab.jbp@gmail.com", telephone: "0761-2757246" }
      ];

      const contruction = [
        { name: "E/C Division, Bhopal", address: "2nd Floor, Panchanan Building, Malviya Ngar, Bhopal (Madhya Pradesh) - 462003", email: "laghuc@gmail.com", telephone: "0755-2673195, 9425601835" },
        { name: "E/C Division, Jabalpur", address: "Jabalpur (Madhya Pradesh)", email: "tl-", telephone: "0761-" },
        { name: "E/C Division, Indore", address: "3, Polo Ground, Industrial Area, Indore (Madhya Pradesh) - 452015", email: "-", telephone: "0731-2421109, 9425601834" },
        { name: "E/C Division, Gwalior", address: "2nd Floor, IIDC Plaza, 39, Citi Centre, Gwalior (Madhya Pradesh)- 474001", email: "t-", telephone: "0731-2439024, 9425601828" }
      ];
  return (
    <>

<Container fluid className='franchbg'>
      <Row>
        <Col>
        <div className='heading-section'>
           <h4> CONTACT US</h4>
           <div className='sub-section'>
        <h6>Home</h6>/
        <h6>CONTACT US</h6>
           </div>
        </div></Col>
      </Row>
    </Container>
    <Container fluid className='second-part'>
      <Row className='intro-part'>
        <Col>
        <div className='intro-class'>
            <h3>Contact us</h3>
            <hr className='lineborder'/>
            <div className='psectiondata'>
                <div>
                    <img src={contact}  alt='contact'/>
                </div>
 <div>
<h5>Nigma's Head Office</h5>
 <Table>
 <thead className='thead'>
          <tr>
            <th>Name of Department</th>
            <th>Address</th>
            <th>E-Mail</th>
            <th>Telephone</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
            <td>{department.name}</td>
              <td>{department.address}</td>
              <td>{department.email}</td>
              <td>{department.telephone}</td>
            </tr>
          ))}
        </tbody>
 </Table>

 </div>
 <div>
    <h5>Branches of Mrignayani Emporium</h5>
    <Table>
    <thead>
          <tr>
            <th>Name of Emporium</th>
            <th>Address</th>
            <th>E-Mail</th>
            <th>Telephone</th>
          </tr>
        </thead>
        <tbody>
          {branches.map((branch, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
            <td>{branch.name}</td>
              <td>{branch.address}</td>
              <td>{branch.email}</td>
              <td>{branch.telephone}</td>
            </tr>
          ))}
        </tbody>
    </Table>
 </div>
 <div>
    <h2>Branches of Testing Labs</h2>
    <Table>
    <thead>
          <tr>
            <th>Name of Testing Labs</th>
            <th>Address</th>
            <th>E-Mail</th>
            <th>Telephone</th>
          </tr>
        </thead>
        <tbody>
          {branchesTestingLabs.map((branch, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
            <td>{branch.name}</td>
              <td>{branch.address}</td>
              <td>{branch.email}</td>
              <td>{branch.telephone}</td>
            </tr>
          ))}
        </tbody> 
    </Table>
 </div>
 <div>
    <h5>Branches of Estate & Construction and Interior Decoration</h5>
   <Table>
   <thead>
          <tr>
            <th>नाम</th>
            <th>पता</th>
            <th>ई-मेल</th>
            <th>दूरभाष</th>
          </tr>
        </thead>
        <tbody>
          {contruction.map((branch, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
            <td>{branch.name}</td>
              <td>{branch.address}</td>
              <td>{branch.email}</td>
              <td>{branch.telephone}</td>
            </tr>
          ))}
        </tbody>
   </Table>
 </div>
 <div>
    <h5>Units of Raw Material Department</h5>
    <Table>
    <thead>
          <tr>
            <th>नाम</th>
            <th>पता</th>
            <th>ई-मेल</th>
            <th>दूरभाष</th>
          </tr>
        </thead>
        <tbody>
          {units.map((unit, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{unit.name}</td>
              <td>{unit.address}</td>
              <td>{unit.email}</td>
              <td>{unit.telephone}</td>
            </tr>
          ))}
        </tbody>
    </Table>
 </div>

            </div>
            </div>
            
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contactus
