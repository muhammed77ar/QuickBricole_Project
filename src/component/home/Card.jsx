import React from 'react'
import { StyledCardContianer ,StyledCardItem} from '../../styledComponent/home/CardsSyle'
// import img1 from '../../imgs/iconeCArd1.png'
export default function Card() {
  return (
    <StyledCardContianer>
        {/* <img src={img1} alt="" width={'300%'} /> */}
      <StyledCardItem>
        <div className="icone">
        </div>
        <div className="content">
         <h5>Create Account</h5>
         <p>
          First you have to create a account  here
         </p>
        </div>
      </StyledCardItem>
      <StyledCardItem>
          <div className="icone">
           {/* <img src={} alt="" /> */}
        </div>
        <div className="content">
         <h5>Search For Work</h5>
         <p>
          Search the best Services here
         </p>
        </div>
      </StyledCardItem>
      <StyledCardItem>
         <div className="icone">
         {/* <img src={img1} alt="" /> */}
        </div>
        <div className="content">
         <h5>Save and apply</h5>
         <p>
          Apply or save and start your work
         </p>
        </div>
      </StyledCardItem>
    </StyledCardContianer>
  )
}
