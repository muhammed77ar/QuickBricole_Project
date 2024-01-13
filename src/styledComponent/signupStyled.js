import styled from "styled-components";

const mobileBreakPoint = "860px";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  z-index: 1000;
  @media screen and (max-width: ${mobileBreakPoint}) {
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;

  .quickStyle {
    color: #1e88e5;
  }
  @media screen and (max-width: ${mobileBreakPoint}) {
    font-size: 40px;
  }
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #474d66;
  font-weight: 500;

  .CHStyle {
    color: #1e88e5;
  }
`;

export const SectionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap; 

  @media screen and (max-width: ${mobileBreakPoint}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Section = styled.div`
  background-image: url("../photos/scheduling-client-appointments-new.jpg");
  background-size: cover;
  background-position: center;
  height: 251px;
  width: 402px;
  border-radius: 23px;
  box-shadow: 0px 2.4px 4.5px rgba(0, 0, 0, 0.073),
    0px 8px 15.2px rgba(0, 0, 0, 0.107),
    0px 36px 68px rgba(0, 0, 0, 0.18);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(0.96);
  }

  @media screen and (max-width: ${mobileBreakPoint}) {
    width: 400px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 490px) {
    width: 290px;
    margin-bottom: 20px;
  }
`;

export const Section2 = styled.div`
  background-image: url("../photos/newimage39075.jpg");
  background-size: cover;
  background-position: center;
  height: 251px;
  width: 402px;
  border-radius: 23px;
  box-shadow: 0px 2.4px 4.5px rgba(0, 0, 0, 0.073),
    0px 8px 15.2px rgba(0, 0, 0, 0.107),
    0px 36px 68px rgba(0, 0, 0, 0.18);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(0.96);
  }

  @media screen and (max-width: ${mobileBreakPoint}) {
    width: 400px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 490px) {
    width: 290px;
    margin-bottom: 20px;
  }
`;

export const InnerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  background-color: rgba(0, 0, 0, 0.58);
  border-radius: 23px;

  h1 {
    text-align: center;
    span {
      display: block;
    }
  }
`;
