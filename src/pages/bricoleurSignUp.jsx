import { Link } from 'react-router-dom';
import { StyledSignUp, StyledFormGroup, StyledFiled, StyledInput, Textarea, StyledTitle, SubmitGroup, StyledButton, StyledSelect } from './../styledComponent/styledSignUp';

export default function BricoleurSignUp() {
  return (
    <form action="">
    <StyledSignUp>
    
     <StyledTitle>
      Sign Up
     </StyledTitle>
      
      <StyledFormGroup width='100%' className="flex">
        <div className='info'>
        
        <StyledFiled width='100%'>
          <label htmlFor="name">Full name</label>
          <StyledInput type='text' placeholder='enter your full name' />
        </StyledFiled>
        <StyledFiled width='100%'>
          <label htmlFor="email">Email</label>
          <StyledInput type='email' placeholder="ex:mail@exemple.com" />
        </StyledFiled>
        <StyledFiled width='100%'>
          <label htmlFor="phone">Phone Number</label>
          <StyledInput type='text' placeholder="ex:+212-689675645" />
        </StyledFiled>
        <StyledFiled width='100%'>
          <label htmlFor="city">City</label>
          <StyledSelect type='text' placeholder='enter your full name' >
            <option value="">select your location</option>
          </StyledSelect>
        </StyledFiled>
        <StyledFiled width='100%'>
          <label htmlFor="categ">Category</label>
          <StyledSelect type='text' placeholder='enter your full name' >
            <option value="">slect your category</option>
          </StyledSelect>
        </StyledFiled>
        <StyledFiled width='100%'>
          <label htmlFor="price">price</label>
          <StyledInput type='number' placeholder='the price you work with' />
        </StyledFiled>
        </div>
       
      <div className='desc'>
        <label htmlFor="description">Description</label>
      <Textarea id='description' placeholder='Tell your clients about your self ,your experience ... ' />
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
