import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button ,Table} from 'react-bootstrap';
import { IoMdPrint } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import './Tender.css';
function Tender() {
  return (
    <>
    <Container fluid className='franchbg'>
      <Row>
        <Col>
        <div className='heading-section'>
           <h4> Tender</h4>
           <div className='sub-section'>
        <h6>Home</h6>/
        <h6>TENDER</h6>
           </div>
        </div></Col>
      </Row>
    </Container>
    
  
    <Container fluid className='tender'>
      <Row>
        <Col md={12}>
          <h1 className='sub-title'>TENDER</h1>
        <InputGroup className='mb-5'>
        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
         <button className='search'><CiSearch/>  Search</button>
        <button className='reset'> <GrPowerReset />reset</button>
        <button className='print'> <IoMdPrint />print</button>
      </InputGroup>    
      <div>
        
        <Table  fluid className="table table-dark">
            <thead   className="thead-warning" style={{backgroundColor:" rgb(255,191,42)",color:" rgb(255,191,42)"}} >
              <tr>
                <th scope="col">S.No.</th>
                <th scope="col">Tender Number</th>
                <th scope="col">Description</th>
                <th scope="col">Tender Category</th>
                <th scope="col">Published on Portal</th>
                <th scope="col">Closing Date</th>
                <th scope="col">Tender Document</th>
                <th scope="col">Tender Status / Stage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>20052-S</td>
                <td>ENERGY EFFICIENT 5 STAR RATING ISI MARK SINGLE PHASE SUBMERSIBLE PUMPS (240 VOLTS) FOR 100 MM DIA TUBE WELLS</td>
                <td>Rate Contract</td>
                <td>https://mptenders.gov.in</td>
                <td>19/04/2021</td>
                <td>E-Tender Notice No. 4-S / 20-21 published on https://mptenders.gov.in having EMD/PG Rs. 25,000/-</td>
                <td>Pre Bid Meeting: 08-04-21</td>
              </tr>
              <tr>
                <td>2</td>
                <td>20048-S</td>
                <td>Water Tank Mounted on Two Wheel Trolley</td>
                <td>Rate Contract</td>
                <td>https://mptenders.gov.in</td>
                <td>30/03/2021</td>
                <td>E-Tender Notice No. 4-S / 20-21 published on https://mptenders.gov.in having EMD/PG Rs. 25,000/-</td>
                <td>
                  Pre Bid Meeting: 16-03-21<br />
                  Opening of Tender: 31-03-21<br />
                  Opening of Price Bid: 11-06-21<br />
                  Meeting of MCM: 25-06-21<br />
                  Publication of Tender: 07-07-21
                </td>
              </tr>
              {/* Add more rows for additional tenders if needed */}
            </tbody>

        </Table>
        
        </div>    
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Tender;