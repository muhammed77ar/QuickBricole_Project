import styled from "styled-components";

const mobileBreakPoint = "1100px"

export const Container = styled.div`
padding: 100px 0;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`
export const Title = styled.h1`
margin: 30px 0;
color: #1E88E5;
`
export const InputContainer = styled.div`
  button {
    align-self: center;
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
    @media screen and (max-width:${mobileBreakPoint}){
        margin-top: 10px;
    }
    @media screen and (max-width: 450px) {
        width: 80%;
    }
  }
  
  form {
    @media screen and (max-width: ${mobileBreakPoint}) {
        display: flex;
        flex-direction: column;
    }
    div {
      display: flex;
      @media screen and (max-width: ${mobileBreakPoint}) {
        flex-direction: column;
      }
    }
  }
`;
export const Section1 = styled.div`
display: flex;
flex-direction: column;
input{
    background-color: #EEEEEE;
    border-radius: 8.08px;
    border: none;
    width: 500px;
    height: 55.65px;
    padding: 0 10px;
    margin-bottom: 15px;
    @media screen and (max-width: 590px) {
        width: 400px;
    }
    @media screen and (max-width: 450px) {
        width: 100%;
    }
}
select{
    background-color: #EEEEEE;
    border-radius: 8.08px;
    border: none;
    width: 500px;
    height: 55.65px;
    padding: 0 10px;
    margin-bottom: 15px;
    @media screen and (max-width: 590px) {
        width: 400px;
    }
    @media screen and (max-width: 450px) {
        width: 100%;
    }
}

`
export const Section2 = styled.div`
display: flex;
flex-direction: column;
margin-left: 50px;
  textarea {
    width: 500px;
    height: 337px;
    background-color: #eeeeee;
    border-radius: 8.08px;
    border: none;
    padding: 10px;
    @media screen and (max-width: 590px) {
        width: 400px;
    }
    @media screen and (max-width: 450px) {
        width: 100%;
    }
  }
  @media screen and (max-width:${mobileBreakPoint}) {
    margin-left: 0;
  }
  
`;