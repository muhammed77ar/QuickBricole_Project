import styled, { css } from "styled-components";

const mobileBreakPoint = "860px";

export const NavbarItems = styled.div`
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