import styled from "styled-components";

export const StyledMainContainer = styled.div`
width: 95%;
min-height: 80vh;
margin: 30px auto;
background-color: #fff;
padding: 0px 10px;
display: flex;
justify-content: center;
align-items: center;
display: flex ;
gap: 20px;
 @media screen and (max-width :800px) {
  flex-direction: column-reverse;
  
}
`
export const StyledRightSid = styled.div`

 height: 100%;
 width: 100%;
 display: flex;
 justify-content: end;
 align-items: center;
 padding:40px 20px;
 & div{
  text-align: end;
  width: 80%;
  padding-right: 20px;
  & span {
    color:#1E88E5 ;
  }
  & p {
    padding: 20px 0px;
    color: #9D9D9D;
  }
 }
 @media screen and (max-width:800px) {
   justify-content: center;
   div {text-align: center;}
  }

`
export const StyledLeftSid = styled.div`
 height: 100%;
 width: 100%;
 img{
  height: 500px;
 }
 position: relative;
  @media screen and (max-width:800px) {
    img{
  height: 450px;
 }
  }
`
export const Numbers = styled.div`
position: absolute;
top:${({bottom})=>{ return  bottom ? '200px' :'80px '}};
left: ${({bottom})=>{ return  bottom ? '59%' :'48% '}};
text-align: center;
padding: 0px 10px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 20px;
background: #FEFEFF;
box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.10);
div {
  width: 100px;
  height: max-content;
  & span{
    font-weight: bold;
    color : #1E88E5;
  }
  & p {
    color :#9D9D9D;
  }
  margin-top: 10px;
}
@media screen and (max-width:800px) {
   left: ${({bottom})=>{ return  bottom ? '65%' :'55% '}};
  }
`
