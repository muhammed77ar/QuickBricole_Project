import { Navigate, Outlet, useNavigate } from "react-router-dom";
import GlobalStyle from "../styledComponent/Globalstyle";
import Navbarr from "../component/navbar/navbarr";
import Footer from "../component/footer/footer";
import { useDispatch, useSelector } from "react-redux";
import { loginSeletore } from "../redux/selectores";
import { useEffect, useState } from "react";
import axiosClient from "../axios/axios";
import { login } from "../redux/slices/loginSlice";

export default function AuthLayout(){
    const navigate = useNavigate()
    // validation
    const authorized = useSelector(loginSeletore);
    const dispatche = useDispatch()
    const [isLoanding,setIsLoading] = useState(false)
    const {user,accessToken} = authorized
    const getUseInfo = async()=>{
       try {
            setIsLoading(true)
           const  res = await axiosClient.get('/user').catch(err=>{
            localStorage.removeItem("access_token");
            console.log(err)})
           if(res?.status === 200){
            const {data} =res;

            const user = data.data
           
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
       }
        
    }
    useEffect(()=>{
        if(accessToken){
            getUseInfo()
            if(user?.role === 'client'){
                return navigate('/client')
            } 
            else if(user?.role === 'handyman'){
               return navigate('/handyman')
        }
        }
       
    },[])
    if(isLoanding){
        return <>
        </>
    }
    return(<>
     <div className="app">
        <GlobalStyle />
        <Navbarr />
        <Outlet />
       <Footer />
    </div>
    </>)
}
