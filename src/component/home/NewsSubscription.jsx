import {Container, StyledForm} from './../../styledComponent/home/StyledNwes'
import React from 'react'
import { StyledButtonHome } from './../../styledComponent/home/StyleButton';

export default function NewsSubscription() {
  return (
    <Container>
      <StyledForm>
        <div>
        <h1>Newsletter Subscription</h1>
        <p>Subscribe to our newsletter to get new Services </p>
        </div>
        <form action="">
          <input type="text" name="email" id="" />
          <StyledButtonHome>
            Subscribe
          </StyledButtonHome>
        </form>
      </StyledForm>
    </Container>
  )
}
