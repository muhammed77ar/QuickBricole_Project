import { Link, useNavigate } from "react-router-dom";
import {
  StyledSignUp,
  StyledFormGroup,
  StyledFiled,
  StyledInput,
  Textarea,
  StyledTitle,
  SubmitGroup,
  StyledButton,
  StyledSelect,
} from "./../styledComponent/styledSignUp";
import { useEffect, useRef, useState } from "react";
import { StyledpasswordIcone } from "../styledComponent/StyledpasswordIcone";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useGetGeoLocation } from "../hooks/getGeioLocation";
import { regesterAPI } from "../API/register";
import { useSelector } from "react-redux";
import { CategoriesSeletore } from "../redux/selectores";
import { scrollToTop } from "./scrollToTop";
import Success from "../component/Success";
import { StyledLoader } from "../styledComponent/styledLoader";

export default function BricoleurSignUp() {
  const [isCreated, setIsCreated] = useState(false);
  const [showPassword, SetShowPassword] = useState(false);
  const [isLoading, SetIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { address, lon, lat } = useGetGeoLocation();
  const [errors, setErrors] = useState({});
  // categories
  const categories = useSelector(CategoriesSeletore);
  const navigate = useNavigate();
  // refs
  const passwordRefConfirm = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const cityRef = useRef();
  const descRef = useRef();
  const categoryRef = useRef();

  const validateForm = () => {
    const newErrors = { name: "", email: "", phone_number: "", city: "", category: "", password: "", password_confirmation:"" , description: "" };

    if (!nameRef.current.value.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!emailRef.current.value.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailRef.current.value.trim())) {
        newErrors.email = "Invalid email format";
      }
    }

    if (!phoneRef.current.value.trim()) {
      newErrors.phone_number = "Phone number is required";
    }

    if (!cityRef.current.value.trim()) {
      newErrors.city = "City is required";
    }

    if (!categoryRef.current.value.trim()) {
      newErrors.category = "Category is required";
    }

    if (!passwordRef.current.value.trim()) {
      newErrors.password = "Password is required";
    } else if (passwordRef.current.value.trim().length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    if (!passwordRefConfirm.current.value.trim()) {
      newErrors.password_confirmation = "Password confirmation is required";
    } else if (passwordRef.current.value.trim() !== passwordRefConfirm.current.value.trim()) {
      newErrors.password_confirmation = "Password confirmation does not match";
    }

    if (!descRef.current.value.trim()) {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!validateForm()) return;

    const userData = {
      name: nameRef.current.value,
      city: cityRef.current.value,
      lon: lon,
      lat: lat,
      phone_number: phoneRef.current.value,
      email: emailRef.current.value,
      description: descRef.current.value,
      password: passwordRef.current.value,
      category: categoryRef.current.value,
      password_confirmation: passwordRefConfirm.current.value,
    };

    register(userData);
  };

  const register = async (HandymanData) => {
    try {
      SetIsLoading(true);
      const response = await regesterAPI.registerHandyman(HandymanData);
      if (response.status === 201) {
        setIsCreated(true);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.log(error);
      }
    } finally {
      SetIsLoading(false);
    }
  };

  if (isCreated) {
    scrollToTop();
    return <Success />;
  }

  const handleChange = () => {
    if (isSubmitted) {
      validateForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledSignUp>
        <StyledTitle>Sign Up</StyledTitle>

        <StyledFormGroup width="100%" className="flex">
          <div className="info">
            <StyledFiled width="100%">
              <label htmlFor="name">Full name</label>
              <StyledInput
                type="text"
                ref={nameRef}
                placeholder="enter your full name"
                onChange={handleChange}
                style={isSubmitted ? errors.name ? {border:"2px solid red"} : {border:"2px solid green"} : {border:"none"}}
              />
              {isSubmitted && errors.name && <div className='err'>{errors.name}</div>}
            </StyledFiled>
            <StyledFiled width="100%">
              <label htmlFor="email">Email</label>
              <StyledInput
                type="email"
                ref={emailRef}
                placeholder="ex:mail@exemple.com"
                onChange={handleChange}
                style={isSubmitted ? errors.email ? {border:"2px solid red"} : {border:"2px solid green"} : {border:"none"}}
              />
               {isSubmitted && errors.email && <div className='err'>{errors.email}</div>}
            </StyledFiled>
            <StyledFiled width="100%">
              <label htmlFor="phone">Phone Number</label>
              <StyledInput
                type="text"
                ref={phoneRef}
                placeholder="ex:+212-689675645"
                onChange={handleChange}
                style={isSubmitted ? errors.phone_number ? {border:"2px solid red"} : {border:"2px solid green"} : {border:"none"}}
              />
              {isSubmitted && errors.phone_number && <div className='err'>{errors.phone_number}</div>}
            </StyledFiled>
            <StyledFiled width="100%">
              <label htmlFor="phone"> City</label>
              <StyledInput
                type="text"
                defaultValue={address?.city}
                ref={cityRef}
                placeholder="your city"
                onChange={handleChange}
                style={isSubmitted ? errors.city ? {border:"2px solid red"} : {border:"2px solid green"} : {border:"none"}}
              />
               {isSubmitted && errors.city && <div className='err'>{errors.city}</div>}
            </StyledFiled>
            <StyledFiled width="100%">
              <label htmlFor="categ">Category</label>
              <StyledSelect
                type="text"
                ref={categoryRef}
                placeholder="enter your full name"
                onChange={handleChange}
                style={isSubmitted ? errors.category ? {border:"2px solid red"} : {border:"2px solid green"} : {border:"none"}}
              >
                <option selected disabled value="">select your category</option>
                {categories?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </StyledSelect>
              {isSubmitted && errors.category && <div className='err'>{errors.category}</div>}
            </StyledFiled>
            <StyledFiled width="100%" style={{ position: "relative" }}>
              <label htmlFor="password">Password</label>
              <StyledInput
                ref={passwordRef}
                type={`${showPassword ? "text" : "password"}`}
                id="password"
                placeholder="Enter your password"
                onChange={handleChange}
                style={isSubmitted ? errors.password ? {border:"2px solid red"} : {border:"2px solid green"} : {border:"none"}}
              />
              <StyledpasswordIcone
                onClick={() => {
                  SetShowPassword(!showPassword);
                }}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </StyledpasswordIcone>
              {isSubmitted && errors.password && <div className='err'>{errors.password}</div>}
            </StyledFiled>
            <StyledFiled width="100%" style={{ position: "relative" }}>
              <label htmlFor="passwordConfirm">Password confirmation</label>
              <StyledInput
                ref={passwordRefConfirm}
                type={`${showPassword ? "text" : "password"}`}
                id="passwordConfirm"
                placeholder="confirm your password"
                onChange={handleChange}
                style={isSubmitted ? errors.password_confirmation ? {border:"2px solid red"} : {border:"2px solid green"} : {border:"none"}}
              />
              <StyledpasswordIcone
                onClick={() => {
                  SetShowPassword(!showPassword);
                }}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </StyledpasswordIcone>
              {isSubmitted && errors.password_confirmation && <div className='err'>{errors.password_confirmation}</div>}
            </StyledFiled>
          </div>

          <div className="desc">
            <label htmlFor="description">Description</label>
            <Textarea
              id="description"
              ref={descRef}
              placeholder="Tell your clients about your self ,your experience ... "
              onChange={handleChange}
                style={isSubmitted ? errors.description ? {border:"2px solid red"} : {border:"2px solid green"} : {border:"none"}}
            />
            {isSubmitted && errors.description && <div style={{color:"red", marginTop:"-5px", paddingLeft:"10px"}}>{errors.description}</div>}
          </div>
        </StyledFormGroup>
        <SubmitGroup>
          <StyledButton type="submit">
            {isLoading ? <StyledLoader/> : "sign up"}
          </StyledButton>
          <p>
            I have account <Link to={"/login"}>Login</Link>
          </p>
        </SubmitGroup>
      </StyledSignUp>
    </form>
  );
}
