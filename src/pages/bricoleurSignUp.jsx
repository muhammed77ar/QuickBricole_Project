import { Link, useNavigate } from 'react-router-dom';
import { StyledSignUp, StyledFormGroup, StyledFiled, StyledInput, Textarea, StyledTitle, SubmitGroup, StyledButton, StyledSelect } from './../styledComponent/styledSignUp';
import { useEffect, useRef, useState } from 'react';
import { StyledpasswordIcone } from '../styledComponent/StyledpasswordIcone';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useGetGeoLocation } from '../hooks/getGeioLocation';
import { regesterAPI } from '../API/register';
import { useSelector } from 'react-redux';
import { CategoriesSeletore } from '../redux/selectores';
import { scrollToTop } from './scrollToTop';
import Success from '../component/Success';

export default function BricoleurSignUp() {
  const [isCreated,setIsCreated] = useState(false)
  const [showPassword, SetShowPassword] = useState(false)
  const {address ,lon,lat} = useGetGeoLocation()
  // categs 
  const categories = useSelector(CategoriesSeletore)
  const navigate = useNavigate()
  // refs
  const passwordRefConfirm = useRef();
  const passwordRef = useRef();
   const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const cityRef = useRef();
  const descRef = useRef();
  const categoryRef = useRef();


const register = async (HandymanData) => {
    
  await regesterAPI.registerHandyman(HandymanData).then(
    (res)=>{
      if(res.status === 201) {
        setIsCreated(true);
        setTimeout(()=>{
          navigate('/login')
        },2000)
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
      lon: lon,
      lat: lat,
      // image: "",
      phone_number: phoneRef.current.value,
      email: emailRef.current.value,
      description: descRef.current.value,
      password: passwordRef.current.value,
      category : categoryRef.current.value,
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
    <form   onSubmit={handelSubmit}>
    <StyledSignUp>
     <StyledTitle>
      Sign Up
     </StyledTitle>
      
      <StyledFormGroup width='100%' className="flex" >
        <div className='info'>
        
        <StyledFiled width='100%'>
          <label htmlFor="name">Full name</label>
          <StyledInput type='text' ref={nameRef}  placeholder='enter your full name' />
        </StyledFiled>
        <StyledFiled width='100%'>
          <label htmlFor="email">Email</label>
          <StyledInput type='email' ref={emailRef} placeholder="ex:mail@exemple.com" />
        </StyledFiled>
        <StyledFiled width='100%'>
          <label htmlFor="phone">Phone Number</label>
          <StyledInput type='text' ref={phoneRef} placeholder="ex:+212-689675645" />
        </StyledFiled>
        <StyledFiled width='100%'>
          <label htmlFor="phone"> City</label>
          <StyledInput type='text' defaultValue={address?.city} ref={cityRef} placeholder="your city" />
        </StyledFiled>
        <StyledFiled width='100%'>
          <label htmlFor="categ">Category</label>
          <StyledSelect type='text' ref={categoryRef} placeholder='enter your full name' >
            <option  value="">select your category</option>
            {categories?.map(item=> <option key={item.id} value={item.id} >{item.name}</option>
            )}
          </StyledSelect>
        </StyledFiled>
         <StyledFiled width='100%' style={{ position: 'relative' }}>
            <label htmlFor="password">Password</label>
            <StyledInput ref={passwordRef}   type={`${showPassword ? 'text' : 'password'}`} id="password"  placeholder="confirm  your password" />
            <StyledpasswordIcone onClick={() => {
              SetShowPassword(!showPassword)
              }}>
              {showPassword ? <FaEye /> : < FaEyeSlash />}
            </StyledpasswordIcone>
            </StyledFiled>
        <StyledFiled width='100%' style={{ position: 'relative' }}>
            <label htmlFor="passwordConfirm">Password</label>
            <StyledInput ref={passwordRefConfirm}   type={`${showPassword ? 'text' : 'password'}`} id="passwordConfirm"  placeholder="confirm  your password" />
            <StyledpasswordIcone onClick={() => {
              SetShowPassword(!showPassword)
              }}>
              {showPassword ? <FaEye /> : < FaEyeSlash />}
            </StyledpasswordIcone>
            </StyledFiled>
        </div>
       
      <div className='desc'>
        <label htmlFor="description">Description</label>
      <Textarea id='description' ref={descRef} placeholder='Tell your clients about your self ,your experience ... ' />
      </div>
      </StyledFormGroup>
      <SubmitGroup>
        <StyledButton type='submit'>
          Submit
        </StyledButton>
        <p>I have account <Link to={'/login'}>Login</Link></p>
      </SubmitGroup>
    </StyledSignUp>
    </form>
  )
}
