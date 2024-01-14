import styled from "styled-components";

export const StyledSignUp = styled.div`
height: 100vh;
  width: 100%;
  

align-items: center;
margin-top: 89px ;
padding-top: 50px;

`
export const StyledFiled = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
gap: 10px 0px;
 margin: auto;
 width: 50%;
padding:0px 20px  ;



`

export const StyledFormGroup = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;

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

export  const StyledIconeContainer = styled.div`
margin: 20px auto ;
width: 50%;
display: flex;
justify-content: center;
gap: 20px;
padding: 1px 20px;
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
`