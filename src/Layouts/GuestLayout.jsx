import { Outlet, useNavigate } from "react-router-dom";
import GlobalStyle from "../styledComponent/Globalstyle";
import Navbarr from "../component/navbar/navbarr";
import Footer from "../component/footer/footer";
import { login } from "../redux/slices/loginSlice";
import axiosClient from "../axios/axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSeletore } from "../redux/selectores";

export default function GuestLayout(){
    const navigate = useNavigate()
    const {accessToken} = useSelector(loginSeletore);
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
    if(accessToken){
        getUseInfo();
    }
    },[])
    
    return(<>
     <div className="app">
        <GlobalStyle />
        <Navbarr />
        <Outlet />
       <Footer />
    </div>
    </>)
}
