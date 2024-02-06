import React from 'react'
import { StyledResentlyContainer } from './../../styledComponent/home/styledSesentlyServese';
import { Card, CardContainer, StyledHedingHome } from '../../styledComponent/home/StyledCetegorySection';
import { StyledButtonHome } from './../../styledComponent/home/StyleButton';

export default function CategorySection() {
  return (
    <StyledResentlyContainer>
      <StyledHedingHome>
        <h1>
          Choose Different <span>Category </span>
          </h1> 
      </StyledHedingHome>
      <CardContainer>
          {[...Array(8)].map((item)=>(
            <Card>
              <div />
              <span>
                text
              </span>
            </Card>
          ))}
      </CardContainer>
     <StyledButtonHome>
      More Ctegorys
     </StyledButtonHome>
    </StyledResentlyContainer>
  )
}
