import styled from "styled-components";

export const Container = styled.div`
width: 100%;
min-height: 30vh ;
background-color: #F2FAFA;
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
`
export const StyledForm = styled.div`
width: 50%;
padding: 10px;
display: flex;
flex-direction: column;
gap: 20px;
text-align: center;
form {
  display: flex;
  flex-direction: column;
  gap:20px;
  justify-content: center; 
  align-items: center;
  input {
    all: unset;
    width: 300px;
    padding: 4px 30px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 1px 1px rgba(3, 7, 18, 0.02),
  0px 5px 4px rgba(3, 7, 18, 0.03),
  0px 12px 9px rgba(3, 7, 18, 0.05),
  0px 20px 15px rgba(3, 7, 18, 0.06),
  0px 32px 24px rgba(3, 7, 18, 0.08);
  }
}

`

