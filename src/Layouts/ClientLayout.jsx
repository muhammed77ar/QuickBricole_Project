import React, { useEffect, useState } from 'react'
import GlobalStyle from '../styledComponent/Globalstyle'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../component/footer/footer'
import NavbarrClient from '../component/navbar/navbarClient'
import { useSelector } from 'react-redux'
import { loginSeletore } from '../redux/selectores'

const ClientLayout = () => {
  const {user,accessToken} = useSelector(loginSeletore);
     
    const navigate = useNavigate()
    const [isLoanding,setIsLoading] = useState(false)
        
useEffect(()=>{
        if(!accessToken ){
           navigate('/login') 
        }
    },[])
  return (
    <div className="app">
        <GlobalStyle />
        <NavbarrClient image={user.profile_image}/>
        <Outlet />
       <Footer />
    </div>
  )
}

export default ClientLayout