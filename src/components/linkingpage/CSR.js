import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import equipment from '../../assets/images/categolueimg/equipment1.jpeg';
import equipment2 from '../../assets/images/categolueimg/02.jpeg';
import equipment3 from '../../assets/images/categolueimg/03.jpeg';

import './CSR.css';
   function CSR() {
  return (
    <> 
    
    <Container fluid className='franchbg'>
      <Row>
        <Col>
        <div className='heading-section'>
           <h4> CSR</h4>
           <div className='sub-section'>
        <h6>Home</h6>/
        <h6>CSR</h6>
           </div>
        </div></Col>
      </Row>
    </Container>
    <Container fluid className='second-part'>
      <Row className='intro-part'>
        <Col>
        <div className='intro-class'>
            <h3>CSR</h3>
            <hr className='lineborder'/>
            <div className='psectiondata'>
         <h5>Corporate Social Responsibility Policy</h5>
        <div>
            <h6>1. INTRODUCTION</h6>
            <p>The concept of Corporate Social Responsibility (CSR) has gained momentum from all avenues. Organizations have realized that government alone will not be able to get success in its endeavor to uplift the downtrodden of society. The concept of CSR has been looked upon as closely linked with the principle of sustainable economic development, which requires the organizations to make decisions not only based on financial factors but also on immediate and long term social & environmental consequences of their activities.</p>
        <p>Ministry of Corporate Affairs has notified Section 135 of the Companies Act, 2013 and Schedule VII thereto along with the Companies (Corporate Social Responsibility Policy) Rules, 2014 (hereinafter “CSR Rules), effective April 01, 2014.</p>
       <p>This Corporate Social Responsibility Policy (hereinafter “CSR Policy) of MPLUN has been prepared pursuant to Section 135 of the Companies Act, 2013 and the CSR Rules.</p>
        </div>
       <div>
          <h6>2. DEFINITIONS:</h6>
          <p>a) “Act” means the Companies Act, 2013.</p>
          <p>b) "Corporate Social Responsibility (CSR)" means and includes but is not limited to:-</p>
          <p>i) Projects or programs relating to activities specified in Schedule VII to the Act; or</p>
          <p>ii) Projects or programs relating to activities undertaken by the Board of Directors of MPLUN in pursuance of recommendations of the CSR Committee of the Board as per declared CSR policy of MPLUN subject to the condition that such policy will cover subjects enumerated in Schedule VII of the Act.</p>
          <p>c) "CSR Policy" relates to the activities to be undertaken by MPLUN as specified in Schedule VII to the Act and the expenditure thereon, excluding activities undertaken in pursuance of normal course of business of MPLUN, if any;</p>
          <p>d) "Net profit" means the net profit of MPLUN as per its annual financial statements prepared in accordance with the applicable provisions of the Act, but shall not include the following, namely :</p>
          <p>i) any profit arising from any overseas branch or branches, if any, of the company, whether operated as a separate company or otherwise; and</p>
          <p>ii) any dividend received from other companies in India, which are covered under and complying with the provisions of Section 135 of the Act:</p>
          </div>
          <div>
          <h6>3. CSR VISION STATEMENT & OBJECTIVE</h6>
          <h6>3.1 Vision Statement</h6>
          <p>The CSR activities of MPLUN will focus on enhancing value creation in the society and in the community in which it operates, through its services, conduct and initiatives, so as to promote sustained growth for the society and community in Madhya Pradesh in fulfillment of its role as a Socially Responsible PSU with environmental concern.</p>
          <h6>3.2 Objective</h6>
          <p>The main objectives of CSR Policy are:</p>
          <ol>
            <li>To directly or indirectly take up programs that benefit the communities in and around MPLUN workplace and results, over a period of time, in enhancing the quality of life and economic well-being of the local populace of Madhya Pradesh.</li>
            <li>To generate through its CSR initiatives, a community goodwill for MPLUN and help reinforce a positive & socially responsible image of MPLUN as a PSU and as a good Corporate Citizen.</li>
            <li>Ensure commitment at all levels in the organization, to operate its business in an economically, socially and environmentally sustainable manner, while recognizing the interest of all its stakeholders.</li>
          </ol>

          </div>
          <div>
            <h5>MPLUN has proded CSR fund to TT Nagar stadium under Directorate of Sport & Youth Welfare, MP Government for Fitness equipment

</h5>
<div>
    <img src={equipment} className='equipment'/>

</div>
<div>
    <img src={equipment2} className='equipment'/>
    
</div><div>
    <img src={equipment3}   className='equipment'/>
    
</div>
          </div>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default CSR;