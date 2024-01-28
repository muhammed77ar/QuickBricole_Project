import styled from "styled-components"
export const StyledCardContianer = styled.div`

width: 80%;
margin: 30px auto;
background-color: #fff;
padding: 20px;
box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.09);
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width :700px) {
  flex-direction: column;
   
}
`
export const StyledCardItem = styled.div`
width: calc(100% / 3);
background-color: transparent;
display: flex ;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1px 20px;
 @media screen and (max-width :700px) {
  width: 100%;
}
.icone{
  width: 111px;
  height: 111px;
  border-radius: 100%;
  background-color: rgba(242, 250, 250, 1);
  img{
    width: 100%;
  }
}
gap: 15px;
.content{
  text-align: center;
  width: 60%;
 
}
`