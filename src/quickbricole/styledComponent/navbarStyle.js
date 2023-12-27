import { NavLink } from "react-router-dom"
import {styled} from "styled-components"
import { IoMenu } from "react-icons/io5";
import { CgClose } from "react-icons/cg";


const PhoneBreakPoint = "860px";

export const LogoImg = styled.img`
width: 80px;
align-self: start;
border-radius: 80px;
`
export const NavbarWrapper = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
padding: 0px 40px;
position: relative;
margin: 10px 20px;
border-radius: 80px;
@media (max-width : ${PhoneBreakPoint}) {
    flex-direction: column;
    padding: 10px;
    z-index: 1000;
    box-shadow:
  2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
  12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
  100px 100px 80px rgba(0, 0, 0, 0.07);
;
}
`
export const NavbarLinkWrapper = styled.div`
@media (max-width: ${PhoneBreakPoint}) {
    display: block; /* Always set to block */
    max-height: ${(props) => (props.active ? "500px" : "0")};
    overflow: hidden;
    text-align: center;
    padding: ${(props) => (props.active ? "20px" : "0")};
    transition: max-height 0.3s ease, padding 0.3s ease; /* Add transition property */
  }
`
export const StyledNavLink = styled(NavLink)`
text-decoration: none;
color: black;
transition: 0.2s;
margin-left: 20px;
&:last-child{
    background-color: #1E88E5;
    padding: 5px 25px;
    border-radius: 20px;
    color: white;
    &:hover{
        background-color: #4da4f1;
        color: white;
    }
    &.${(props) => props.activeClassName}{
    color: white;
}
}
&.${(props) => props.activeClassName}{
    color: #1E88E5;
    font-weight: bold;
}
&:hover{
    color: #1E88E5;
    font-weight: bold;
}
@media (max-width : ${PhoneBreakPoint}) {
    display: block;
    margin: 20px auto;
}
`
export const StyledIcon = styled(IoMenu)`
display: none;
@media (max-width : ${PhoneBreakPoint}) {
display: block;
position: absolute;
right: 50px;
top: 30px;
color: black;
font-size: 50px;
cursor: pointer;
}
`
export const StyledIconX = styled(CgClose)`
display: none;
@media (max-width : ${PhoneBreakPoint}) {
display: block;
position: absolute;
right: 50px;
top: 30px;
color: black;
font-size: 50px;
cursor: pointer;
}
`

