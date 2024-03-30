import React, { useEffect, useState } from 'react'
import GlobalStyle from '../styledComponent/Globalstyle'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../component/footer/footer'
import NavbarHandyman from '../component/navbar/navbarHandyman'
import { useDispatch, useSelector } from 'react-redux'
import { loginSeletore } from '../redux/selectores'
import axiosClient from '../axios/axios'
import { login } from '../redux/slices/loginSlice'

const HandymanLayout = () => {
  const {user,accessToken} = useSelector(loginSeletore);
     
    const navigate = useNavigate()

    const dispatche = useDispatch()
    const [isLoanding,setIsLoading] = useState(false)
    const getUseInfo = async()=>{
       try {
            setIsLoading(true)
           const  res = await axiosClient.get('/user').catch(err=>console.log(err))
           if(res?.status === 200){
            const {data : user} =res;
           
           if(user.role === 'client'){
                return navigate('/client')
            } 
            else if(user?.role === 'handyman'){
               return navigate('/handyman')
        }
           dispatche(login(user))
       }
       }
       catch (err)
       {
        console.log(err)
       }}

    useEffect(()=>{
        if(!accessToken){
          return navigate('/login') 
        }
        
       
    },[])
  return (
    
    <div className="app">
        <GlobalStyle />
        <NavbarHandyman />
        <Outlet />
       <Footer />
    </div>
  )
}

export default HandymanLayout