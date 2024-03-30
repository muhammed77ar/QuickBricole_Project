
import fbImg from '../imgs/facebook.png'
import google from '../imgs/google.png'

import { FaEye, FaEyeSlash } from "react-icons/fa"
import { StyledpasswordIcone } from '../styledComponent/StyledpasswordIcone';

import { StyledButton, StyledFiled, StyledFormGroup, StyledIcone, StyledIconeContainer, StyledInput, StyledSignUp, StyledTitle, SubmitGroup } from "../styledComponent/styledSignUp";
import {  useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../axios/axios';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/loginSlice';

export default function Login() {
  const [showPassword, SetShowPassword] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const dispatche = useDispatch()
   const navigate = useNavigate()
  
  const handelSubmit = async (e)=>{
    e.preventDefault()
      const payload = {
        email : emailRef.current.value,
        password : passwordRef.current.value
      }
    // console.log(data)
   

      const {data} = await axiosClient.post('/login',payload);
      console.log(data)

      if(data?.token)
      {
       const {user,token}  = data
       localStorage.setItem('access_token',token);
       console.log(user)
       dispatche(login(user))
      console.log(user)
       if(user?.role === 'client'){
                navigate('/client')
            } 
            else if(user?.role === 'handyman'){
              navigate('/handyman')}
 
      }
   
  }
        
  return (
    <StyledSignUp>
      <form  onSubmit={handelSubmit}>
        <StyledTitle>
          Login
        </StyledTitle>
        <StyledIconeContainer>
          <StyledIcone>
            <img src={fbImg} alt="" />
            <span>Sign up with Facebook</span>
          </StyledIcone>
          <StyledIcone>
            <img src={google} alt="" />
            <span>Sign up with Goolge</span>
          </StyledIcone>
        </StyledIconeContainer>
        <StyledFormGroup width={'100%'}>
          <StyledFiled>
            <label htmlFor="email">Email</label>
            <StyledInput ref={emailRef} type="email" id="email" name="email" placeholder="ex:mail@exemple.com" />
          </StyledFiled>
          <StyledFiled style={{ position: 'relative' }}>
            <label htmlFor="password">Password</label>
            <StyledInput ref={passwordRef}  type={`${showPassword ? 'text' : 'password'}`} id="password" name="password" placeholder="type your password" />
            <StyledpasswordIcone onClick={() => {
              SetShowPassword(!showPassword)
              return passwordRef.current.focus();
              }}>
              {showPassword ? <FaEye /> : < FaEyeSlash />}
            </StyledpasswordIcone>
          </StyledFiled>
          <SubmitGroup>
            <StyledButton type='submit'>
              Submit
            </StyledButton>
            <p>i don't have account <Link to='/signup'>Sign up</Link></p>
          </SubmitGroup>

        </StyledFormGroup>
      </form>
    </StyledSignUp>
  )
}

