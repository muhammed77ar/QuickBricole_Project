import styled from "styled-components";
import { StyledHeding } from "./styledSesentlyServese";

export const StyledHedingHome  = styled(StyledHeding)`
text-align: center;
margin: 0px;
margin-bottom: 20px;

`

export const CardContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 20px;
margin: 30px 10px;
`


export const Card = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 200px;
width: calc((100% / 4) - 20px);
border-radius: 20px;
background-color: #000;
@media screen and (max-width :800px){
  width: 30%;
}
@media screen and (max-width :700px){
    width: 80%;
}

overflow: hidden;
div{
   width: 100%;
   height: 100%;
   opacity: 0.5;
   background: url('https://www.shutterstock.com/image-photo/man-repairing-broken-tv-260nw-2146352157.jpg');
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;

}
span {
  position: absolute;
  color: #fff;
  font-size: large;
}
`