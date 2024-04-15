import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBars from './components/pages/header/NavBars';
import OwlCarousel from './components/pages/OwlCarousel';
import Welcome from './components/pages/welcome/Welcome';
import Footer from './components/pages/footer/Footer';
import SlickCarousel from './components/pages/carsoul/SlickCarousel';
import ListingData from './components/pages/listdata/ListingData';
import AccordianUse from './components/pages/accordian/AccordianUse';
import Login from './components/linkingpage/Login';
import Layout from './Layout';
import ScreeningReader from './components/linkingpage/ScreeningReader';
import PhotoDistribution from './components/linkingpage/PhotoDistribution';
import RateList from './components/linkingpage/RateList';
import Contactus from './components/linkingpage/Contactus';
import FeedbackForms from './components/linkingpage/FeedbackForms';
import ProductCategolue from './components/linkingpage/ProductCategolue';
import CSR from './components/linkingpage/CSR';
import Introduction from './components/linkingpage/Introduction';
import Tender from './components/linkingpage/Tender';
import PricvacyPolicy from './components/linkingpage/PricvacyPolicy';
function App() {
  return (
    <>
    {/* <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>} />
<Route  path='/accordianuse' element={<AccordianUse/>}/>
<Route path='/login' element={<Login/>} />
<Route   path='/screeningreader' element={<ScreeningReader/>}  />
<Route  path='/photodistribution' element={<PhotoDistribution/>}  />
<Route  path='/ratelist' element={<RateList/>}   />
<Route  path='/contactus' element={<Contactus/>} />
<Route  path='/feedbackforms' element={<FeedbackForms/>} />
<Route  path='/introduction' element={<Introduction/>} />
<Route  path='/tender' element={<Tender/>} />
<Route  path='/csr' element={<CSR/>} />
<Route  path='/pricvacypolicy' element={<PricvacyPolicy/>} />
<Route   path='/productcategolue' element={<ProductCategolue/>}      />

   </Routes>
    </BrowserRouter> */}
    <BrowserRouter>
    <NavBars/>
    <Routes>
    <Route path='/' element={<Layout/>} />
<Route  path='/accordianuse' element={<AccordianUse/>}/>
<Route path='/login' element={<Login/>} />
<Route   path='/screeningreader' element={<ScreeningReader/>}  />
<Route  path='/photodistribution' element={<PhotoDistribution/>}  />
<Route  path='/ratelist' element={<RateList/>}   />
<Route  path='/contactus' element={<Contactus/>} />
<Route  path='/feedbackforms' element={<FeedbackForms/>} />
<Route  path='/introduction' element={<Introduction/>} />
<Route  path='/tender' element={<Tender/>} />
<Route  path='/csr' element={<CSR/>} />
<Route  path='/pricvacypolicy' element={<PricvacyPolicy/>} />
<Route   path='/productcategolue' element={<ProductCategolue/>}  />
    </Routes>
    <SlickCarousel/>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
