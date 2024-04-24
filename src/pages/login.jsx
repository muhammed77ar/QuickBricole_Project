
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
import { StyledLoader } from '../styledComponent/styledLoader';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const validateForm = () => {
    const newErrors = { ...errors };

    if (!emailRef.current.value.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailRef.current.value.trim())) {
        newErrors.email = 'Invalid email format';
      } else {
        newErrors.email = '';
      }
    }

    if (!passwordRef.current.value.trim()) {
      newErrors.password = 'Password is required';
    }else {
      newErrors.password = '';
    }

    setErrors(newErrors);

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const validationErrors = validateForm(); 
    if (Object.values(validationErrors).some(error => error)) {
      return;
    }

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      setIsLoading(true);
      const response = await axiosClient.post('/login', payload);
      const data = response?.data;
      if (data?.token) {
        const { token } = data;
        localStorage.setItem('access_token', token);
        axiosClient.get("/user")
          .then(({ data }) => {
            const user = data.data;
            dispatch(login(user));
            if (user?.role === 'client') {
              navigate('/client');
            } else if (user?.role === 'handyman') {
              navigate('/handyman');
            }
          });
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        // Backend validation errors
        setErrors(error.response.data.errors);
      } else {
        // Other errors
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = () => {
    if (isSubmitted) {
      validateForm();
    }
  };

  

  return (
    <StyledSignUp>
      <StyledTitle>Login</StyledTitle>
      <StyledIconeContainer>
        <StyledIcone>
          <img src={fbImg} alt="" />
          <span>Sign up with Facebook</span>
        </StyledIcone>
        <StyledIcone>
          <img src={google} alt="" />
          <span>Sign up with Google</span>
        </StyledIcone>
      </StyledIconeContainer>
      <StyledFormGroup onSubmit={handleSubmit} width={'100%'}>
        <StyledFiled >
          <label htmlFor="email">Email</label>
          <StyledInput
            ref={emailRef}
            type="text"
            id="email"
            name="email"
            placeholder="ex: mail@example.com"
            onChange={handleChange}
            style={isSubmitted ? errors.email ? {border:"2px solid red"} : {border:"2px solid green"} : {border:"none"}}
          />
          {isSubmitted && errors.email && <div className='err'>{errors.email}</div>}
        </StyledFiled>
        <StyledFiled style={{ position: 'relative' }}>
          <label htmlFor="password">Password</label>
          <StyledInput
            ref={passwordRef}
            type={`${showPassword ? 'text' : 'password'}`}
            id="password"
            name="password"
            placeholder="Type your password"
            onChange={handleChange}
            style={isSubmitted ? errors.password ? {border:"2px solid red"} : {border:"2px solid green"} : {border:"none"}}
          />
          {isSubmitted && errors.password && <div className='err'>{errors.password}</div>}
          <StyledpasswordIcone onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </StyledpasswordIcone>
        </StyledFiled>
        <SubmitGroup>
          <StyledButton type='submit'>
            {isLoading ? <StyledLoader /> : "Login"}
          </StyledButton>
          <p>I don't have an account <Link to='/signup'>Sign up</Link></p>
        </SubmitGroup>
      </StyledFormGroup>
    </StyledSignUp>
  );
}
