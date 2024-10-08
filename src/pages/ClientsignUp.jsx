import {
  StyledInput,
  StyledSignUp,
  StyledFiled,
  StyledFormGroup,
  StyledIconeContainer,
  StyledIcone,
  StyledTitle,
  SubmitGroup,
  StyledButton,
} from "../styledComponent/styledSignUp";

import fbImg from "../imgs/facebook.png";
import google from "../imgs/google.png";
import { Link, useNavigate } from "react-router-dom";
import { regesterAPI } from "../API/register";
import { useRef, useState } from "react";
import { StyledpasswordIcone } from "../styledComponent/StyledpasswordIcone";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { scrollToTop } from './scrollToTop';
import Success from "../component/Success";
import { useGetGeoLocation } from "../hooks/getGeioLocation";
import { StyledLoader } from "../styledComponent/styledLoader";
const style = {
  width: { pc: "100%" },
};

export default function ClientsignUp() {
  const [isCreated,setIsCreated] = useState(false)
  const [isLoading, SetIsLoading] = useState(false);
  const [showPassword, SetShowPassword] = useState(false)
  const navigate =useNavigate()
  const {address ,lon,lat} = useGetGeoLocation()
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();
  const cityRef = useRef();
  const passwordRefConfirm = useRef();
  const [errs, setErrs] = useState({});


const register = async (userData) => {
    try {
      SetIsLoading(true)
    await regesterAPI.registerClient(userData).then(
    (res)=>{
      if(res.status === 201) {
        setIsCreated(true);
        setTimeout(()=>{
          navigate('/login')
        },2000)
      }
    }
  )
     .catch(({ response }) => {
        const { data } = response;
        setErrs(data.errors);
      });
    
  } catch (error) {
       console.log(error)
    }finally{
      SetIsLoading(false)
    }
  }
  const handelSubmit = (e) => {
    e.preventDefault()
    const userData = {
      name:nameRef.current.value,
      city: cityRef.current.value,
      lon: lon,
      lat: lat,
      // image: "",
      phone_number: phoneRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation : passwordRefConfirm.current.value,
    };
    console.log(userData)
    register(userData);
  };
 

  if(isCreated){
    scrollToTop();
    return <Success/>
  }
  return (
    <StyledSignUp>
      <StyledTitle>Sign Up</StyledTitle>
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
      {/* from  */}
      <StyledFormGroup onSubmit={handelSubmit} width={style.width.pc}>
        <StyledFiled>
          <label htmlFor="name">Full Name</label>
          <StyledInput
            type="text"
            ref={nameRef}
            id="name"
            placeholder="Enter you Full name"
          />
          {errs.name?.map((item, key) => (
                <div className="err" key={key}>
                  {item}
                </div>
              ))}
        </StyledFiled>
        <StyledFiled>
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            id="email"
            ref={emailRef}
            placeholder="ex:mail@exemple.com"
          />
          {errs.email?.map((item, key) => (
                <div className="err" key={key}>
                  {item}
                </div>
              ))}
        </StyledFiled>
        <StyledFiled>
          <label htmlFor="phone">phone</label>
          <StyledInput
            type="text"
            id="phone"
           ref={phoneRef}
            placeholder="ex:+212-689675645"
          />
          {errs.phone_number?.map((item, key) => (
                <div className="err" key={key}>
                  {item}
                </div>
              ))}
        </StyledFiled>
        <StyledFiled>
          <label htmlFor="city">Location</label>
          <StyledInput type="text" id="city" defaultValue={address?.city} ref={cityRef} placeholder="City " />
          {errs.city?.map((item, key) => (
                <div className="err" key={key}>
                  {item}
                </div>
              ))}
        </StyledFiled>
        <StyledFiled style={{ position: 'relative' }}>
            <label htmlFor="password">Password</label>
            <StyledInput ref={passwordRef}  type={`${showPassword ? 'text' : 'password'}`} id="password" name="password" placeholder="type your password" />
            <StyledpasswordIcone onClick={() => {
              SetShowPassword(!showPassword)
              }}>
              {showPassword ? <FaEye /> : < FaEyeSlash />}
            </StyledpasswordIcone>
            {errs.password?.map((item, key) => (
                <div className="err" key={key}>
                  {item}
                </div>
              ))}
        </StyledFiled>
        <StyledFiled style={{ position: 'relative' }}>
            <label htmlFor="passwordConfirm">Password Confirmation</label>
            <StyledInput ref={passwordRefConfirm}  type={`${showPassword ? 'text' : 'password'}`} id="passwordConfirm"  placeholder="confirm  your password" />
            <StyledpasswordIcone onClick={() => {
              SetShowPassword(!showPassword)
              }}>
              {showPassword ? <FaEye /> : < FaEyeSlash />}
            </StyledpasswordIcone>
        </StyledFiled>
        <SubmitGroup>
          <StyledButton type="submit">
           {isLoading ? <StyledLoader/> : "sign up"}
          </StyledButton>
          <p>
            i have account <Link to="/login">Login</Link>
          </p>
        </SubmitGroup>
      </StyledFormGroup>
    </StyledSignUp>
  );
}
