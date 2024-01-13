import { styled } from "styled-components";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const PhoneBreakPoint = "860px";

export const FooterWrapper = styled.div`
  background-color: #F2FAFA;
  position: absolute;
  width: 100%;
  @media (max-width: ${PhoneBreakPoint}) {
    width: 100%;
  }

`;
export const Footerr = styled.div`
  height: 300px;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;

  @media (max-width: ${PhoneBreakPoint}) {
    flex-direction: column;
    text-align: center;
    height: 800px;
  }
`;
export const Section2 = styled.div`
  margin-top: 80px;
  > h3 {
    color: black;
  }
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
    .callUs{
      display: flex;
      span{
        margin-right: 5px;
        margin-top: 4px;
      }
    }
  }

  @media (max-width: ${PhoneBreakPoint}) {
    margin: 10px;
    width: 100%;
    text-align: center;
    li{
      .callUs{
        margin-top: 10px;
        display: block;
        span{
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`;

export const Section1 = styled.div`
  text-align: start;
  margin-left: 20px;
  width: 300px;

  @media (max-width: ${PhoneBreakPoint}) {
    margin: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text{
        text-align: center;
        margin: 0px 20px;
    }
  }
`;
export const Link = styled.a`
  color: #000;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #1E88E5;
  }
`;

export const FooterLogo = styled.img`
  width: 100px;
  margin-top: 10px;
`;
export const Instagram = styled(AiFillInstagram)`
  font-size: 25px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #fccc63;
  }
`;
export const Twitter = styled(FaTwitter)`
  font-size: 25px;
  margin-left: 10px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: #1DA1F2;
  }
`;
export const Facebook = styled(FaFacebookF)`
  font-size: 25px;
  margin-left: 10px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: #4267B2;
  }
`;
export const Icons = styled.div`
  display: flex;
  .social-icon-link {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: ${PhoneBreakPoint}) {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const CopyRight = styled.div`
margin: 10px 0;
color: #9D9D9D;
text-align: center;
`
