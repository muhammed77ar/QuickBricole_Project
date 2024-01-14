import { StyledInput, StyledSignUp ,StyledFiled,
  StyledFormGroup,StyledIconeContainer,StyledIcone} from "../styledComponent/styledSignUp";


import fbImg from '../imgs/facebook.png'
import google from '../imgs/google.png'
const style = {
 width : {pc:"100%"}
}

export default function ClientsignUp() {
  return (
    <StyledSignUp>
      
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
     <StyledInput type="text" id="name" />
     </StyledFiled>
     <StyledFiled>
      <label htmlFor="email">Email</label>
     <StyledInput type="email" id="email" />
     </StyledFiled>
     <StyledFiled>
      <label htmlFor="phone">phone</label>
     <StyledInput type="text" id="phone" />
     </StyledFiled>
      </StyledFormGroup>
      </StyledSignUp>
     
    
  )
}
