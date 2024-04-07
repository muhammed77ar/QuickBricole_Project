import styled from "styled-components";
const mobileBreakPoint = "700px";
// @media screen and (max-width: ${mobileBreakPoint}) 

export const Container = styled.div`
.heroProfile{
    margin-top: 100px;
    height: 340px;
    background-color: white;
    .banner{
    background-image: url("../photos/fader1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 180px;    
}
.infosContainer{
    position: relative;
    img{
        position: absolute;
        top: -70px;
        left: 80px;
        width: 180px;
        height: 180px;
        border-radius: 100%;
        overflow: hidden;
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
    transform: translateY(-70px);
}
    }
    .infos{
        position: absolute;
        left: 320px;
        top: 20px;
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
        height: auto;
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
          gap: 10px;
          align-items: center;
          transform: translateY(-20px);
        }
      }
    }
  }

` 