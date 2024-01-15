import styled from "styled-components";
import { Title } from "./postServiceStyle";

export const StyledSignUp = styled.div`
height: 100vh;
  width: 100%;
align-items: center;
margin: 10px 0px;
padding-top: 89px ;

`
export const StyledFiled = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
gap: 10px 0px;
 margin: auto;
 width: 50%;
padding:0px 20px  ;
@media screen and (max-width:600px) {
  width: 90%;
}

`

export const StyledFormGroup = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 20px 0px;
flex-shrink: 0;
gap: 20px;
max-width: ${({width})=>width};

`

export const StyledInput = styled.input`
 all:unset;
 background-color: #FFF;
 padding: 1px 20px;
 height: 53px;
 border-radius: 8.078px;
background: #EEE;
`
export const StyledTitle = styled(Title)`
text-align:center;`
export  const StyledIconeContainer = styled.div`
margin: 20px auto ;
width: 50%;
display: flex;
flex-direction: row;
justify-content: center;
gap: 20px;
padding: 1px 20px;
@media screen and (max-width: 600px){
    width: 90%;
    flex-direction: column;
    align-items: center;
}
`
export const StyledIcone = styled.div`
width: 50%;
padding:  6px  10px;
border-radius: 5px;
border: 1px solid #0557D3;
border-bottom: .3px solid rgba(5, 87, 211, .3);
display: flex ;
justify-content: center;
gap: 20px;
align-items: center;
img{
  width: 30px;
}
@media screen and (max-width:600px) {
  width: 90%;
}
`
export const SubmitGroup = styled.div`
padding: 5px 0px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 30px;
& p {
  margin-top: 20px;
  font-size: 21.16px;
font-style: normal;
font-weight: 600;
line-height: 35px; /* 165.406% */
letter-spacing: 1.693px;
a{
  all: unset;
  cursor: pointer;
  color: #120DFF;
font-style: normal;
transition:ease .3s ;
}
a:hover{
  text-decoration: underline;
}

}
@media screen and (max-width:600px) {
  & button {
    width: 60%;
  }
  flex-direction: column;
}
`

export const StyledButton = styled.button`
/* align-self: center; */
    background-color: #1e88e5;
    border-radius: 8.08px;
    border: none;
    color: white;
    width: 392px;
    height: 55.1px;
    font-weight: 900;
    font-size: 20px; 
    text-transform: capitalize;
    box-shadow: 4.5px 4.5px 3.6px rgba(0, 0, 0, 0.031),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.045),
      30.1px 30.1px 24.1px rgba(0, 0, 0, 0.059),
      100px 100px 80px rgba(0, 0, 0, 0.09);
    transition: all 0.3s ease;
    &:hover {
      transform: scale(0.96);
    }
    @media screen and (max-width:1100px){
        margin-top: 10px;
    }
`