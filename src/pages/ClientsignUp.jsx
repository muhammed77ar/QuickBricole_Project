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
  StyledSelect,
} from "../styledComponent/styledSignUp";

import fbImg from "../imgs/facebook.png";
import google from "../imgs/google.png";
import { Link, useNavigate } from "react-router-dom";
import { regesterAPI } from "../API/register";
import { useRef, useState } from "react";
const style = {
  width: { pc: "100%" },
};

export default function ClientsignUp() {
  const [isCreated,setIsCreated] = useState(false)
  const navigate =useNavigate()
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();
  const cityRef = useRef();

  const register = async (userData) => {
    
  await regesterAPI.registerClient(userData).then(
    (res)=>{
      if(res.status === 201) {
        setIsCreated(true);
        setTimeout(()=>{
          navigate('/login')
        },1000)
      }
    }
  )
    .catch(res=>console.log(res));
    
  };
  const handelSubmit = (e) => {
    e.preventDefault()
    const userData = {
      name:nameRef.current.value,
      city: cityRef.current.value,
      lon: "3",
      lat: "2",
      // image: "",
      phone_number: phoneRef.current.value,
      email: emailRef.current.value,
      password: "12345678",
      password_confirmation : "12345678",
    };
    console.log(userData)
    register(userData);
  };
  if(isCreated){
    return <StyledSignUp><div style={{}}>
      created
    </div>
    </StyledSignUp> 
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
        </StyledFiled>
        <StyledFiled>
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            id="email"
            ref={emailRef}
            placeholder="ex:mail@exemple.com"
          />
        </StyledFiled>
        <StyledFiled>
          <label htmlFor="phone">phone</label>
          <StyledInput
            type="text"
            id="phone"
           ref={phoneRef}
            placeholder="ex:+212-689675645"
          />
        </StyledFiled>
        <StyledFiled>
          <label htmlFor="city">Location</label>
          <StyledInput type="text" id="city" ref={cityRef} placeholder="City " />
        </StyledFiled>
        <SubmitGroup>
          <StyledButton type="submit">Submit</StyledButton>
          <p>
            i have account <Link to="/login">Login</Link>
          </p>
        </SubmitGroup>
      </StyledFormGroup>
    </StyledSignUp>
  );
}
