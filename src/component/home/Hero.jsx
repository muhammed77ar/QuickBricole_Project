import React from "react";
import {
  StyledContainer,
  StyledHero,
  StyledSide,
  StyledButton
} from "../../styledComponent/home/StyledHome";
import HeroImg from '../../imgs/hero_img.png'
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <StyledHero>
      <StyledContainer>
        {/* left side */}
        <StyledSide>
          <div>
           <h1>Are you looking for Professional?</h1>
          <p>
            Swiftly connect with top-tier professionals on demand through Quick
            Bricole, ensuring rapid access to elite talent when you need it most
          </p>
          <Link to={"quickService"} style={{textDecoration:"none"}}>
          <StyledButton>
            Get Quick Service
          </StyledButton>
          </Link>
          </div>
        </StyledSide>

        {/* right side */}
        <StyledSide hasImage={true}>
          <img src={HeroImg} alt="hero imag" />
        </StyledSide>
      </StyledContainer>
      {/* search bar */}
      <SearchBar/>
    </StyledHero>
  );
}
