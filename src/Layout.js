// import React from 'react'
// import Home from './components/pages/home/Home';
// import {Outlet} from 'react-router-dom'
// const Layout = () => {
//   return (
//     <div>
//         <Home/>
//         <Outlet />
//     </div>
//   )
// }

// export default Layout





// import React from 'react';
// import Home from './components/pages/home/Home';
// import { Outlet, useLocation } from 'react-router-dom';
// import NavBars from './components/pages/header/NavBars';
// import SlickCarousel from './components/pages/carsoul/SlickCarousel';
// import Footer from './components/pages/footer/Footer';
// const Layout = () => {
//   const location = useLocation();

//   // Check if the current location is not the login page
//   const isNotLoginPage = location.pathname !== '/login';

//   return (
//     <div>
    
//         <>
//           <NavBars/>
//           <SlickCarousel/>
//           <Footer/>
//         </>
//       )
//       <Outlet />
//     </div>
//   );
// };

// export default Layout;








// // Layout.js
// import React from 'react';
// import { Outlet, useLocation } from 'react-router-dom';
// import NavBars from './components/pages/header/NavBars';
// import SlickCarousel from './components/pages/carsoul/SlickCarousel';
// import Footer from './components/pages/footer/Footer';
// const Layout = () => {
//   const location = useLocation();
//   // Check if the current location is not the login page
//   const isNotLoginPage = location.pathname !== '/login';

//   return (
//     <div>
//       <>
//         {isNotLoginPage && (
//           <>
//             <NavBars />
//             <SlickCarousel />
//             <Footer />
//           </>
//         )}
//       </>
//     </div>
//   );
// };

// export default Layout;

// Layout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBars from './components/pages/header/NavBars';
import SlickCarousel from './components/pages/carsoul/SlickCarousel';
import Footer from './components/pages/footer/Footer';
import Home from './components/pages/home/Home'
const Layout = () => {
  const location = useLocation();
  // Check if the current location is the login page
  const isLoginPage = location.pathname === '/login';
  return (
    <div>
      {!isLoginPage && (
        <>
          <Home/>
        </>
      )}
      <Outlet />
    </div>
  );
};

export default Layout;
