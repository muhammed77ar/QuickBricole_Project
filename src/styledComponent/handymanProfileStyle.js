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
          font-size: 30px;
            text-transform: capitalize;
            font-weight: 600;
            letter-spacing: 5px;
        }
        span{
            color: gray;
            font-size: 15px;
        }
        .icons{
            margin-top: 10px;
            display: flex;
            gap: 20px;
            color: black;
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
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    height: auto;
}
@media screen and (max-width: ${mobileBreakPoint}) {
    .heroProfile {
        height: 490px;
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
          gap: -5px;
          align-items: center;
          transform: translateY(-360px);
          span{
            visibility: hidden;
            margin-top: -10px;
          }
          .icons{
            margin-top: -5px;
          }
        }
      }
    }
  }
  .content {
  display: flex;
  @media screen and (max-width: ${mobileBreakPoint}){
    flex-direction: column;
  }

}

.sidebar {
  background-image: url("../photos/rm222-mind-03.jpg");
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  color: black;
  box-shadow: 11px 0px 20px -15px rgba(0,0,0,0.45);
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
  @media screen and (max-width: ${mobileBreakPoint}){
    background-image: none;
    padding-top: 0px;
    background-color: white;
    margin-top: -30px;
    padding-bottom: 20px;
    box-shadow: none;
    
  }
  .description{
    padding: 10px;
    max-width: 250px;
    word-wrap: break-word;
    background-color: white;
    border-left:5px solid white;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
background: rgba(255, 255, 255, 0.2);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
color: white;
font-weight: 500;
    @media screen and (max-width: ${mobileBreakPoint}){
      max-width: 100%;
      color: black;
    }
  }
  .icons{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    align-self: flex-start;
    color: white;
    font-weight: 500;
    @media screen and (max-width: ${mobileBreakPoint}){
      align-self: center;
      color: black;
    }
    .phone{
      font-size: 17px;
    }
    .email{
      font-size: 20px;
    }
  }
  .rating{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    p{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        margin-top: 15px;
      }
    .stars{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      .star{
        font-size: 25px;
        color: gold;
      }
    }
  }
}

.portfolio {
  img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.three h1 {
  margin-top: 40px;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1.5em;
  padding-left: 40px;
  padding-bottom: 15px;
  position: relative;
  @media screen and (max-width: ${mobileBreakPoint}){
    margin-top: 0;
    padding-top: 10px;
  }
}
.three h1:before {
  content: "";
  position: absolute;
  left: 40px;
  bottom: 0;
  height: 5px;
  width: 55px;
  background-image: linear-gradient( 288deg,  rgba(0,85,255,1) 1.5%, rgba(4,56,115,1) 91.6% );


}
.three h1:after {
  content: "";
  position: absolute;
  left: 40px;
  bottom: 2px;
  height: 1px;
  width: 95%;
  max-width: 255px;
  background-image: linear-gradient( 288deg,  rgba(0,85,255,1) 1.5%, rgba(4,56,115,1) 91.6% );


}

.btn {
  background-color: white;
  border: 1px solid lightgray;
  //border-radius: 1rem;
  color: darkgray;
  padding: 0.5rem;
  text-transform: lowercase;
  transition: 0.5s ease;
  &:hover{
    background-color: black;
    color: white;
  }
}

.btn--block {
  display: block;
  width: 100%;
}
 
.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 40px;
  @media screen and (max-width: ${mobileBreakPoint}){
    padding: 0px 20px;
  }
}

.cards__item {
  border: none;
  width: 100%;
  display: flex;
  padding: 1rem;
  @media(min-width: 900px) {
    width: 50%;
  }
  @media(min-width: 1000px) {
    width: 50%;
  }
}

.card {
  border: none;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    transform: scale(1.02);
  }
}

.card__content {
  border: none;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
}

.card__image {
  width: 100%;
  height: 200px; /* Adjust the height of the card image */
  object-fit: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  filter: contrast(70%);
  //filter: saturate(180%);
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(.43,.41,.22,.91);;
  &::before {
    content: "";
	  display: block;
    padding-top: 56.25%; // 16:9 aspect ratio
  }
  @media(min-width: 40rem) {
    &::before {
      padding-top: 66.6%; // 3:2 aspect ratio
    }
  }
}

.card__title {
  color: darkgray;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.card__description {
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
}
}

` 