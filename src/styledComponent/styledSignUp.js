import styled from "styled-components";
import { Title } from "./postServiceStyle";

export const StyledSignUp = styled.div`
min-height: 100vh;
  width: 100%;
align-items: center;
margin: 10px 0px;
padding-top: 89px ;
& .flex {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  padding: 10px 100px ;
  align-items: center;
  gap: 8px;
  @media screen and (max-width:900px) {
    padding:  0px;
    margin-bottom: 9px;
    grid-template-columns: 100%;
  }
}

`
export const StyledFiled = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
gap: 10px 0px;
 margin: 2px auto;
 width: ${({width})=>width||'50%'};
padding:0px 20px  ;
@media screen and (max-width:860px) {
  width: 100%;
}

`

export const StyledFormGroup = styled.form`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 20px 0px;
flex-shrink: 0;
gap: 10px;
max-width: ${({width})=>width};
.desc {
  max-height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  @media screen and (max-width:900px) {

    margin: 10px 60px;

   }
}
.info {
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
   @media screen and (max-width:900px) {
    margin-bottom: 10px;
   }
}
`

export const StyledInput = styled.input`
 all:unset;
 background-color: #FFF;
 padding: 1px 20px;
 height: 53px;
 border-radius: 8.078px;
background: #EEE;
width: ${({width})=>width};
&:focus{
  outline: 2px solid black;
}
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
@media screen and (max-width: 950px){
    width: 60%;
    flex-direction: column;
    align-items: center;
}
@media screen and (max-width: 600px){
width: 90%;
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
@media screen and (max-width:1000px) {
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
  font-size: 20px;
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
@media screen and (max-width:860px) {
  & button {
    width: 60%;
  }
  p{
    font-size: 15px;
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

export const StyledSelect = styled.select`
background-color: #EEEEEE;
    border-radius: 8.08px;
    border: none;
    /* width: 500px; */
    height: 55.65px;
    padding: 0 10px;
    margin-bottom: 15px;
`
export const Textarea = styled.textarea`

    width: 90%;
    min-height: 237px;
    max-height: 237px;
    background-color: #eeeeee;
    border-radius: 8.08px;
    border: none;
    padding: 10px;
    margin: 10px 0px;
    @media screen and (max-width: 590px) {
        width: 400px;
    }
    @media screen and (max-width: 450px) {
        width: 100%;
    }
  
`