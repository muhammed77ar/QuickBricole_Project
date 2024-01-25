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
  
  
  & img{
    @media screen and (min-width: 701px) {
       width: 350px;
    }
    @media screen and (min-width: 1000px) {
       width: 450px;
       height: 100%;
    }
    }
    @media screen and (max-width: 700px) {
    width: 100%;
    display: ${({ hasImage }) => (hasImage ? "none" : "flex")};
    margin: 0px;
    
    & div {
      text-align: center;
      padding: 32px;
      h1 {
        font-size: 45px;
        font-style: normal;
        font-weight: 600;
      }
    }
  }
`;

export const StyledButton = styled.div`
  padding: 20px 20px;
  width: 50%;
  border-radius: 10px;
  background: #1e88e5;
  color: #fff;
  text-align: center;
  cursor: pointer;
  @media screen and (max-width : 700px) {
    margin: auto;
    width: 80%;
  }
`;

export const StyledSearchBr = styled.div`
padding: 10px;
width: 60%;
margin: 10px auto;
display: flex;
align-items: center;
justify-content: center;
 input {
  all: unset;
  background-color: #fff;
  padding: 18px;
  
}
.input-border{
   border-right: gray solid 2px;
}
.search{
   background-color: #fff;
  padding: 18px;
  width: 50%;
  text-align: center;
  & button{all: unset;cursor: pointer;}
}
@media screen and (max-width : 700px) {
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    .search{
      background-color: transparent;
      & button{
        padding: 10px;
        background-color: #fff;
        border-radius: 100%;
        box-shadow: 1px 2px 10px #000;
      }
    }
}
  
`