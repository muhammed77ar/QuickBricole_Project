import styled from "styled-components";
const mobileBreakPoint = "790px"
export const MainWrapper = styled.div`
background-color: #edf0f7;
display: flex;
gap: 10px;
@media screen and (max-width: ${mobileBreakPoint}){
  flex-direction: column;
}
`;
export const Sidebar = styled.div`
  width: 20%;
  max-height: 100%;
  padding-top: 100px;
  padding-left: 20px;
  .Container{
    width: 90%;
    background: rgba(255, 255, 255, 0.26);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
height: 90%;
margin-top: 20px;
.checkbox-wrapper-45 {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
    margin-bottom: 10px;
  }

  .checkbox-wrapper-45 input[type="checkbox"] {
    display: none;
    visibility: hidden;
  }
  .checkbox-wrapper-45 .cbx {
    -webkit-perspective: 20;
    perspective: 20;
    display: inline-block;
    border: 2px solid #e8e8eb;
    background: #e8e8eb;
    border-radius: 4px;
    transform: translate3d(0, 0, 0);
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .checkbox-wrapper-45 .cbx:hover {
    border-color: #0b76ef;
  }
  .checkbox-wrapper-45 .flip {
    display: block;
    transition: all 0.4s ease;
    transform-style: preserve-3d;
    position: relative;
    width: 20px;
    height: 20px;
  }
  .checkbox-wrapper-45 input[type="checkbox"]:checked + .cbx {
    border-color: #0b76ef;
  }
  .checkbox-wrapper-45 input[type="checkbox"]:checked + .cbx .flip {
    transform: rotateY(180deg);
  }
  .checkbox-wrapper-45 .front,
  .checkbox-wrapper-45 .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 2px;
  }
  .checkbox-wrapper-45 .front {
    background: #fff;
    z-index: 1;
  }
  .checkbox-wrapper-45 .back {
    transform: rotateY(180deg);
    background: #0b76ef;
    text-align: center;
    color: #fff;
    line-height: 20px;
    box-shadow: 0 0 0 1px #0b76ef;
  }
  .checkbox-wrapper-45 .back svg {
    margin-top: 3px;
    fill: none;
  }
  .checkbox-wrapper-45 .back svg path {
    stroke: #fff;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  h5{
    font-size: 18px;
    padding: 10px;
  }
  span{
    color: black;
    font-weight: 500;
    text-transform: capitalize;
  }
  }
  @media screen and (max-width: ${mobileBreakPoint}) {
    width: 100%;
  }
`;
export const Wrapper = styled.div`
padding: 100px 0;
width: 80%;
@media screen and (max-width: ${mobileBreakPoint}){
  width: 100%;
}
.Head{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 45%;
    @media screen and (max-width: ${mobileBreakPoint}){
      flex-direction: column;
      margin:0 10px;
    }
    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        color: gray;
        font-size: 20px;
        margin-top: 15px;
        @media screen and (max-width: ${mobileBreakPoint}){
          text-align: center;
        }
    }
}
`

export const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
  align-items: center;
  margin-top: 20px;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: -10px;
    border: 2px solid white;
    object-fit: cover;
  }

  .count {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: -10px;
    border: 2px solid white;
    background-color: white;
    color: gray;
    font-weight: bold;
  }
`;



export const StyleQuickService = styled.div`
background-color: #edf0f7;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 30px;
`

