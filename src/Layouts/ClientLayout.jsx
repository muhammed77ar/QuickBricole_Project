import React from 'react'
import GlobalStyle from '../styledComponent/Globalstyle'
import { Outlet } from 'react-router-dom'
import Footer from '../component/footer/footer'
import NavbarrClient from '../component/navbar/navbarClient'

const ClientLayout = () => {
  return (
    
    <div className="app">
        <GlobalStyle />
        <NavbarrClient/>
        <Outlet />
       <Footer />
    </div>
  )
}

export default ClientLayout