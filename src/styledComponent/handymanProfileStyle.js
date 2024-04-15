import styled from "styled-components";
const mobileBreakPoint = "700px";
// @media screen and (max-width: ${mobileBreakPoint}) 

export const Container = styled.div`
.heroProfile{
    margin-top: 100px;
    height: 300px;
    background-color: white;
    .banner{
    background-image: url("../photos/wave (1).png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 400px; 
    @media screen and (max-width: ${mobileBreakPoint}){
        height: 550px;
    }
}
.infosContainer{
    position: relative;
    .button-57 {
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: absolute;
  top: -390px;
  right: 20px;
  @media screen and (max-width: ${mobileBreakPoint}){
    top: 10px;
    right: 10px;
  }
  border-radius: 80px;
  overflow: hidden;
  border: none;
  color: #18181a;
  display: inline-block;
  font-size: 15px;
  line-height: 15px;
  width: 80px;
  padding: 5px 0;
  text-decoration: none;
  cursor: pointer;
  background: #fff;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-57 span:first-child {
  position: relative;
  transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
  z-index: 10;
  font-size: 20px;
  text-align: center;
}

.button-57 span:last-child {
  color: white;
  display: block;
  position: absolute;
  bottom: 0;
  transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
  z-index: 100;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translateY(225%) translateX(-50%);
  height: 14px;
  line-height: 13px;
  text-align: center;
  padding-top: 8px;
}

.button-57:after {
  content: "";
  position: absolute;
  bottom: -50%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  transform-origin: bottom center;
  transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
  transform: skewY(9.3deg) scaleY(0);
  z-index: 50;
}

.button-57:hover:after {
  transform-origin: bottom center;
  transform: skewY(9.3deg) scaleY(2);
}

.button-57:hover span:last-child {
  transform: translateX(-50%) translateY(-100%);
  opacity: 1;
  display: flex;
  transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
}
    img{
        position: absolute;
        top: -300px;
        left: 80px;
        width: 180px;
        height: 180px;
        border-radius: 100%;
        object-fit: cover;
        border: 5px solid white;
        box-shadow:
  2.5px 2.4px 2.7px rgba(0, 0, 0, 0.043),
  6.3px 6px 6.9px rgba(0, 0, 0, 0.062),
  12.8px 12.2px 14.2px rgba(0, 0, 0, 0.078),
  26.3px 25.2px 29.2px rgba(0, 0, 0, 0.097),
  72px 69px 80px rgba(0, 0, 0, 0.14)
;
@media screen and (max-width: ${mobileBreakPoint}){
    position: static;
    transform: translateY(-400px);
}
    }
    .infos{
        position: absolute;
        left: 320px;
        top: -225px;
        h3{
            text-transform: capitalize;
            font-weight: 600;
        }
        span{
            color: gray;
            font-size: 15px;
        }
        .icons{
            margin-top: 10px;
            display: flex;
            gap: 20px;
            color: grey;
            div{
                display: flex;
                gap: 5px;
                justify-content: center;
                p{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .i{
                    font-size: 18px;
                    margin-top: 2px;
                }
            }
        }
    }
}
}
.content{
    background-color: #F5F5F5;
    height: 500px;
}
@media screen and (max-width: ${mobileBreakPoint}) {
    .heroProfile {
        height: 520px;
      .infosContainer {
        position: static;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .infos {
            position: static;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          align-items: center;
          transform: translateY(-360px);
        }
      }
    }
  }

` 