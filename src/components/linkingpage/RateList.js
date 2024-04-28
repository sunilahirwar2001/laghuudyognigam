import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './RateList.css';
function RateList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
          <h3  className="ratelist">ACTIVE RATE CONTACT LIST</h3>
          <div className="table-responsive">

          
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Main Item Code</th>
                  <th>Main Item Description</th>
                  <th> Description Contract Ref No</th>
                  <th> Tender No</th>
                  <th> Contract StartDate</th>
                  <th>Contract EndDate</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>SMC 1433</td>
                  <td>POLYETHYLENE PIPES FOR WATER SUPPLY (ISI MARKED)</td>
                  <td>RC/2023-2024/2228</td>
                  <td>23113-A</td>
                  <td> 14-03-2024</td>
                  <td> 13-06-2024</td>
                  <td>
                  <button className="view">View</button>
                    <button className="viewlist"> View More List</button>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>SMC 1433</td>
                  <td>POLYETHYLENE PIPES FOR WATER SUPPLY (ISI MARKED)</td>
                  <td>RC/2023-2024/2228</td>
                  <td>23113-A</td>
                  <td> 14-03-2024</td>
                  <td> 13-06-2024</td>
                  <td>
                  <button className="view">View</button>
                    <button className="viewlist"> View More List</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>SMC 1433</td>
                  <td>POLYETHYLENE PIPES FOR WATER SUPPLY (ISI MARKED)</td>
                  <td>RC/2023-2024/2228</td>
                  <td>23113-A</td>
                  <td> 14-03-2024</td>
                  <td> 13-06-2024</td>
                  <td>
                    <button className="view">View</button>
                    <button className="viewlist"> View More List</button>
                  </td>
                </tr>
              </tbody>
            </Table>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
          <div className="bottom-ratelist">
            <p>

            MPLUN - Procurement System © 2019. All rights reserved.
            </p>
            <p>  Designed & developed by Center of Excellence  <strong> Center of Excellence (CoE) MAP_IT </strong></p>
          <p>Site best viewed in Microsoft Edge+ and Google Chrome in 1024x768 resolution.</p>
         </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RateList;
