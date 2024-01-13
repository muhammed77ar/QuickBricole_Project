import { LinkItems, LogoImg, Menu, NavbarItems } from "./nav"
import { Link } from "react-router-dom"
import { IoMenu } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

export default function Navbarr() {
    const [clicked, setClicked] = useState(false)
    const handelClick = () => {
        setClicked(!clicked)
    }
    const linkMenu = [
        { page: "Home", href: "/" },
        { page: "Find professional", href: "/findProfessional" },
        { page: "Find work", href: "/findWork" },
        { page: "Log In", href: "/login" },
        { page: "Sign Up", href: "/signup" },
        { page: "Post a Service", href: "/postService", className : "post" }
    ];

    return <>
        <NavbarItems>
            <LogoImg src="../photos/logo-color.svg" />
            <Menu onClick={handelClick}>
                {clicked ? <CgClose className="icons" /> : <IoMenu className="icons" />}
            </Menu>
            <LinkItems active={clicked}>
                {linkMenu.map((link) => (
                    <li key={link.page}>
                        <Link onClick={handelClick} className={`navLinks ${link.className}`} to={link.href}>{link.page}</Link>
                    </li>
                ))}
            </LinkItems>
        </NavbarItems>
    </>
  }