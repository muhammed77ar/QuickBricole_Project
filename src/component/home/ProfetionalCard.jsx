import React from 'react'
import { StyledCardItem } from '../../styledComponent/home/CardsSyle'
import { StyledCard } from '../../styledComponent/home/StyledCard'
import { Link } from 'react-router-dom'

export default function ProfetionalCard({data}) {
  return (
    <StyledCardItem style={{width:"100%",padding:"10px"}}>
      <StyledCard>
        <div className="image">
      <img src={data.img} style={{height:"100%"}} alt="" />
        </div>
      <div className="info">
       <div className='name'>{data.name}</div>
       <p className="job">{data.job}</p>
      </div>
       <div className="link">
      <Link>View Profile</Link>
       </div>
      </StyledCard>
    </StyledCardItem>
  )
}
