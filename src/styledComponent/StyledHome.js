import styled from "styled-components";

export const StyledHero = styled.div`
  /* padding:0; */
  padding-top: 100px;
  min-height: 100vh;
  max-width: 100%;
  background-color: #f2fafa;
`;
export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledSide = styled.div`
  min-height: calc((100vh - 100px - 92px) - 10px);
  max-height: calc((100vh - 100px - 92px)- 10px);
  padding: ${({ hasImage }) => (hasImage ? "0px" : "10px 20px")};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 2px 20px;

  & div {
    padding-left: 30px;
    h1 {
      font-size: 55px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    & p {
      color: #252525;
      opacity: 0.6;
    }
    
  }
  
  @media screen and (max-width: 900px) {
    width: 100%;
    display: ${({ hasImage }) => (hasImage ? "none" : "flex")};
    margin: 2px 0px;
    & div {
      text-align: center;
      padding-left: 0px;
      h1 {
        font-size: 45px;
        font-style: normal;
        font-weight: 600;
      }
    }
  }
  & img{
    @media screen and (min-width: 901px) {
       width: 400px;
    }
    @media screen and (min-width: 1000px) {
       width: 450px;
       height: 100%;
    }
    }
`;

export const StyledButton = styled.div`
  padding: 20px 0px;
  width: 50%;
  border-radius: 10px;
  background: #1e88e5;
  color: #fff;
  margin: auto;
  cursor: pointer;
`;

export const StyledSearchBr = styled.div`
background-color: red;
height: 52px;
width: 60%;
margin: 10px auto;
`