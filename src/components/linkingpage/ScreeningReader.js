import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ScreeningReader.css';
import Table from 'react-bootstrap/Table';
const ScreeningReader = () => {
  return (
    <Container>
    <Row>
      <Col>
      <div>
 <h1>SCREEN READER</h1>
 <div>
    <h5>SCREEN READER</h5>
    <p>The website complies with World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.0 level AA. This will enable people with visual impairments access the website using assistive technologies, such as screen readers.</p>
    <p>Following table lists the information about different screen readers:
</p>
<p>Information related to the various screen readers</p>
 </div>
      </div>    

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Screen Reader</th>
          <th>Website</th>
          <th>Free / Commercia</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>	JAWS</td>
          <td>	Freedom Scientific</td>
          <td>@Commercial
</td>
        </tr>
        <tr>
          <td>2</td>
          <td>	Non Visual Desktop Access (N</td>
          <td>NV Access</td>
          <td>free</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Non Visual Desktop Access (NVDA)</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
      </Col>
    </Row>
  </Container>
  )
}

export default ScreeningReader
