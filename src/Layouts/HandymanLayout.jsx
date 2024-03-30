import React, { useEffect } from 'react'
import GlobalStyle from '../styledComponent/Globalstyle'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../component/footer/footer'
import NavbarHandyman from '../component/navbar/navbarHandyman'
import { useSelector } from 'react-redux'
import { loginSeletore } from '../redux/selectores'

const HandymanLayout = () => {
  const {accessToken} = useSelector(loginSeletore);
     
    const navigate = useNavigate()

   
    useEffect(()=>{
        if(!accessToken){
          return navigate('/login') 
        }
       
    },[])
  return (
    
    <div className="app">
        <GlobalStyle />
        <NavbarHandyman  />
        <Outlet />
       <Footer />
    </div>
  )
}

export default HandymanLayout