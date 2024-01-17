import { styled } from "styled-components";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const PhoneBreakPoint = "860px";


export const FooterWrapper = styled.div`
  background-color: #F2FAFA;
  width: 100%;
  @media (max-width: ${PhoneBreakPoint}) {
  }
`;
export const Footerr = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, auto);
  margin-top: 10px;
  @media (max-width: ${PhoneBreakPoint}) {
    grid-template-columns: repeat(1, auto);
    text-align: center;
    padding: 20px; // Add some padding for better spacing
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
    width: fit-content;
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
    li{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      .callUs{
        margin-top: 10px;
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
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text{
        text-align: center;
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
padding: 1px 0px;
color: #9D9D9D;
text-align: center;
p{
display: flex;
justify-content: center;
align-items: center;
.icon{
  font-size: 23px;
  margin-right: 3px;
}
}
`
