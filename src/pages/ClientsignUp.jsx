import { StyledInput, StyledSignUp ,StyledFiled,
  StyledFormGroup,StyledIconeContainer,StyledIcone,StyledTitle,
  SubmitGroup,StyledButton, StyledSelect} from "../styledComponent/styledSignUp";


import fbImg from '../imgs/facebook.png'
import google from '../imgs/google.png'
import { Link } from "react-router-dom";
const style = {
 width : {pc:"100%"}
}

export default function ClientsignUp() {
  return (
    
    
    <StyledSignUp>
      <StyledTitle>
        Sign Up
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
      {/* from  */}
    <StyledFormGroup width={style.width.pc}>
     <StyledFiled>
      <label htmlFor="name">Full Name</label>
     <StyledInput type="text" id="name" name="name" placeholder="Enter you Full name" />
     </StyledFiled>
     <StyledFiled>
      <label htmlFor="email">Email</label>
     <StyledInput type="email" id="email" name="email" placeholder="ex:mail@exemple.com" />
     </StyledFiled>
     <StyledFiled>
      <label htmlFor="phone">phone</label>
     <StyledInput type="text" id="phone" name="phone" placeholder="ex:+212-689675645" />
     </StyledFiled>
      <StyledFiled>
        <label htmlFor="city">Location</label>
        <StyledSelect id='city' name='city'>
          <option  value="">slect your city</option>
        </StyledSelect>
      </StyledFiled>
      <SubmitGroup>
       <StyledButton type='submit'>
        Submit
      </StyledButton>
      <p>i have account <Link to='/login'>Login</Link></p>
      </SubmitGroup>
      </StyledFormGroup>
  
      </StyledSignUp>
  )
}
