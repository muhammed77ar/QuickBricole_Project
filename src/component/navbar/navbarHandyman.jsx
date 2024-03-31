import { LinkItems, LogoImg, Menu, NavbarItems } from "./nav"
import { Link, useNavigate } from "react-router-dom"
import { IoMenu } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import {  useState } from "react";
import { ClientAPI } from "../../API/client";
import {  logout } from "../../redux/slices/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { loginSeletore } from "../../redux/selectores";

export default function NavbarHandyman() {
    const [clicked, setClicked] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const dispatche = useDispatch();
    const navigate = useNavigate()
    const {user} = useSelector(loginSeletore)
    const image = user?.profile_image
    window.addEventListener("scroll", () =>{
        window.scrollY > 35 ? setScrolled(true) : setScrolled(false)
      })
    const handelClick = () => {
        setClicked(!clicked)
    }
    const linkMenu = [
        { page: "Home", href: "/handyman" },
        { page: "Find work", href: "/handyman/findWork" },
    ];

    const  logOut  = async () =>{
            const res = await ClientAPI.logout()
            console.log(res)
             dispatche(logout())
             navigate('/login');
        }
    
    return <>
        <NavbarItems scroll={scrolled}>
            <Link to='/handyman'><LogoImg src="../photos/logo-color.svg" /></Link>
            <Menu onClick={handelClick}>
                {clicked ? <CgClose className="icons" /> : <IoMenu className="icons" />}
            </Menu>
            <LinkItems active={clicked}>
                {linkMenu.map((link) => (
                    <li key={link.page}>
                        <Link onClick={handelClick} activeClassName="active"  className={`navLinks ${link.className}`} to={link.href}>{link.page}</Link>
                    </li>
                ))}
                <li>
                    <img style={{width:'40px',height:'40px',borderRadius:'100%'}} src={process.env.REACT_APP_BASE_URL+image} alt="profileimage"/>
                </li>
                <li>
                    <button onClick={()=>{
                      logOut()
                    }}>logout handyman</button>
                </li>
            </LinkItems>
        </NavbarItems>
    </>
  }