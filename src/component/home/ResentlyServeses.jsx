import React from 'react'
import { StyledHeding, StyledResentlyContainer } from '../../styledComponent/home/styledSesentlyServese'
import { StyledCardContianer, StyledCardItem } from '../../styledComponent/home/CardsSyle'
import imag from '../../imgs/facebook.png'
import { StyledButtonHome } from '../../styledComponent/home/StyleButton'
export default function ResentlyServeses() {
  return (
    <StyledResentlyContainer>
      <StyledHeding>
        <p>The latest  Services</p>
        <h1>
          Recently Posted <span>Services</span>
        </h1>
      </StyledHeding>
      <StyledCardContianer box='none' width="90%">
       {[...Array(3)].map((item,key)=>(
       <StyledCardItem box={true}>
        <div className="icone">
          <img sizes='300px'
          style={{zIndex:"10"}}
          src={imag}
          alt="" />
        </div>
        <div className="content">
         <h5>Create Account</h5>
         <p>
          First you have to create a account  here
         </p>
         <a href="#test">Apply Now</a>
        </div>
       </StyledCardItem>))}
      </StyledCardContianer>

        <StyledButtonHome>
          More Services
        </StyledButtonHome>
    </StyledResentlyContainer>
  )
}
