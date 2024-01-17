
import fbImg from '../imgs/facebook.png'
import google from '../imgs/google.png'

import { FaEye , FaEyeSlash  } from "react-icons/fa"
import { StyledpasswordIcone } from '../styledComponent/StyledpasswordIcone';

import { StyledButton, StyledFiled, StyledFormGroup, StyledIcone, StyledIconeContainer, StyledInput, StyledSignUp, StyledTitle, SubmitGroup } from "../styledComponent/styledSignUp";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [showPassword,SetShowPassword] =useState(false)
  return (
    <StyledSignUp>
      <form action="">
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
     <StyledInput type="email" id="email" name="email" placeholder="ex:mail@exemple.com" />
     </StyledFiled>
     <StyledFiled style={{position:'relative'}}>
      <label htmlFor="password">Password</label>
     <StyledInput type={`${showPassword?'text':'password'}`} id="password" name="password" placeholder="type your password" />
      <StyledpasswordIcone onClick={()=>SetShowPassword(!showPassword)}>
        {showPassword?<FaEye/> : < FaEyeSlash />}
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

