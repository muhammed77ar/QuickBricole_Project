import React from 'react'
import { StyledResentlyContainer } from '../../styledComponent/home/styledSesentlyServese'
import { StyledHedingHome } from '../../styledComponent/home/StyledCetegorySection'
import Slider from './Swiper'

export default function ProfionellsSlider() {
  return (<>
  <StyledResentlyContainer>
      <StyledHedingHome>
        <p>Tv Repair, Fridge Repair, Plumping & more!</p>
        <h1>
          Checkout The Best <span>Professionals </span> Here 
          </h1> 
      </StyledHedingHome>
      <div>
        <Slider/>
      </div>
      </StyledResentlyContainer>
  </>
  )
}
