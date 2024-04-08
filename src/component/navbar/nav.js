import styled, { css } from "styled-components";

const mobileBreakPoint = "860px";

export const NavbarItems = styled.div`
position: relative;
  padding:50px 20px;
  background-color: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: ${(props) => (props.scroll && "0px 4px 6px rgba(0, 0, 0, 0.1)")};
  @media screen and (max-width: ${mobileBreakPoint}) {
  }
`;

export const LogoImg = styled.img`
  justify-self: start;
  margin-left: 20px;
  border-radius: 50px;
  width: 90px;

  @media screen and (max-width: ${mobileBreakPoint}) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Menu = styled.div`
  display: none;

  .icons {
    font-size: 40px;
  }

  @media screen and (max-width: ${mobileBreakPoint}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
  }
`;

export const LinkItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-gap: 15px;
  list-style: none;
  text-align: center;
  width: 100%; 
  justify-content: end;
  align-items: center; 
  margin: 0; 
  padding: 0; 

  .navLinks {
    color: #797979;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.4s ease;
    position: relative;
    &:hover {
      color: #1e88e5;
    }
    &::before{
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 0%;
      height: 4px;
      background-color: #1e88e5;
      transition: all 0.5s ease;
      border-radius: 20px;
    }
    &:hover::before{
      width: 100%;
    }
    
  }
  
  .post{
    background-color: #1e88e5;
    padding: 10px 30px;
    border-radius: 80px;
    color: white;
    &:hover{
      color: white;
    }
    &::before{
      content: "";
      position: absolute;
    }
    &:hover::before{
      width: 0%;
    }
  }

  @media screen and (max-width: ${mobileBreakPoint}) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-size: 25px;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%; 
    position: fixed; 
    top: 100px;
    padding-bottom: 100px;
    left: ${(props) => (props.active ? "0" : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;

    ${(props) =>
      props.active &&
      css`
        background-color: white;
        left: 0;
        opacity: 1;
        z-index: 1;
      `}
  }
  
`;

export const ProfileMenuContainer = styled.div`
@media screen and (max-width: ${mobileBreakPoint}) {
position: absolute;
right: 100px;
z-index: 1;

}
  .menu-trigger {
    img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      object-fit: cover;
      cursor: pointer;
    }
  }
  .drop-down-menu {
    position: absolute;
    top: 90px;
    right: 7px;
    @media screen and (max-width: ${mobileBreakPoint}){
      right: -15px;
      top: 60px;
    }
    background-color: #71797E;
    box-shadow:
  0.5px 1.2px 1px rgba(0, 0, 0, 0.019),
  1.1px 2.7px 2.1px rgba(0, 0, 0, 0.028),
  1.8px 4.5px 3.5px rgba(0, 0, 0, 0.034),
  2.8px 6.8px 5.3px rgba(0, 0, 0, 0.04),
  4px 9.8px 7.6px rgba(0, 0, 0, 0.045),
  5.7px 13.8px 10.8px rgba(0, 0, 0, 0.05),
  8px 19.6px 15.3px rgba(0, 0, 0, 0.056),
  11.7px 28.5px 22.3px rgba(0, 0, 0, 0.062),
  18px 43.9px 34.3px rgba(0, 0, 0, 0.071),
  32px 78px 61px rgba(0, 0, 0, 0.09)
;
    border-radius: 10px;
    padding: 30px 10px;
    width: 230px;
    &::before {
      content: "";
      position: absolute;
      top: -14px;
      right: 20px;
      height: 20px;
      width: 30px;
      background-color: #71797E;
      clip-path: polygon(51.1% 0%, 100% 100%, 0% 100%);
      box-shadow:
  0.5px 1.2px 1px rgba(0, 0, 0, 0.019),
  1.1px 2.7px 2.1px rgba(0, 0, 0, 0.028),
  1.8px 4.5px 3.5px rgba(0, 0, 0, 0.034),
  2.8px 6.8px 5.3px rgba(0, 0, 0, 0.04),
  4px 9.8px 7.6px rgba(0, 0, 0, 0.045),
  5.7px 13.8px 10.8px rgba(0, 0, 0, 0.05),
  8px 19.6px 15.3px rgba(0, 0, 0, 0.056),
  11.7px 28.5px 22.3px rgba(0, 0, 0, 0.062),
  18px 43.9px 34.3px rgba(0, 0, 0, 0.071),
  32px 78px 61px rgba(0, 0, 0, 0.09)
;
    }
    h3{
      font-size: 20px;
      color: white;
      text-transform: capitalize;
      text-align: center;
      margin: 0;
    }
    span{
      color: lightgray;
      font-size: 12px;
      text-align: center;
      display: flex;
      justify-content: center;
    }
    ul{
      list-style: none;
      margin-top: 40px;
    }
    
    ul li a{
      text-decoration: none;
      color: white;
      font-size: 15px;
      margin-left: 15px;
      transition: 0.2s;
    }
    ul li:hover a{
      color: lightgray;
      cursor: pointer;
    }
    ul li:hover .iconMenu{
      opacity: 1;
      cursor: pointer;
      color: lightgray;
    }
    .iconMenu{
      color: white;
      font-size: 25px;
      transition: 0.2s;
    }
    .DropdownItem{
      display: flex;
      margin: 15px 0;
    }
  }
  .drop-down-menu.active{
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      transition: 0.2s ease;
    }
    .drop-down-menu.inactive{
      opacity: 0;
      visibility: hidden;
      transform: translateY(-20px);
      transition: 0.2s ease;
    }
  
`;