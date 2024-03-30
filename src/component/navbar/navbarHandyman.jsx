import { LinkItems, LogoImg, Menu, NavbarItems } from "./nav"
import { Link } from "react-router-dom"
import { IoMenu } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

export default function NavbarHandyman() {
    const [clicked, setClicked] = useState(false)
    const [scrolled, setScrolled] = useState(false)
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

    return <>
        <NavbarItems scroll={scrolled}>
            <Link to='/'><LogoImg src="../photos/logo-color.svg" /></Link>
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
                    <Link>my profile handyman</Link>
                </li>
            </LinkItems>
        </NavbarItems>
    </>
  }