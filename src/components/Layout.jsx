import React from 'react'
import {Outlet} from "react-router-dom"
import NavBar from './NavBar/NavBar';
import Partners from './Partners/Partners';
import Footer from './Footer/Footer';

function Layout() {
  return (
    <div>
      <NavBar cart={cart} clearAll={clearAll}  onRemove={onRemove}/>
      <Outlet/>
        <Partners/>
        <Footer/>
        
    </div>
  )
}

export default Layout
