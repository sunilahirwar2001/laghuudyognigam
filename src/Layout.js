import React from 'react'
import Home from './components/pages/home/Home';
import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <div>
        <Home/>
        <Outlet />
    </div>
  )
}

export default Layout
