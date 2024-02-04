import styled from "styled-components"
export const StyledCardContianer = styled.div`

width: ${({width})=> width||'80%'};
margin: 30px auto;
background-color: #fff;
padding: 20px;
box-shadow:${({box})=> box||'0px 20px 30px rgba(0, 0, 0, 0.09)'} ;
display: flex;
justify-content: ${({box})=> box?'space-around':'center'};
align-items: center;
gap: 30px;
@media screen and (max-width :700px) {
  flex-direction: column;
   
}
`
export const StyledCardItem = styled.div`
width: calc(80% / 3);
background-color: transparent;
display: flex ;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
padding: 10px 20px;
border-radius:${({box})=> box?'30px':'none'} ;
box-shadow:${({box})=> box?'0px 1px 6px 0px rgba(0, 0, 0, 0.10)':'none'} ;
 @media screen and (max-width :700px) {
  width: 100%;
}
.icone{
  width: 111px;
  height: 111px;
  border-radius: 100%;
  background-color: rgba(242, 250, 250, 1);
  overflow: hidden;
  img{
    width: 100%;
  }
}
gap: 15px;
.content{
  text-align: center;
  line-height: 30px;
  width: 60%;
 
}
`