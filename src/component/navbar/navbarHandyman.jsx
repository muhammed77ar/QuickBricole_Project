import { LinkItems, LogoImg, Menu, NavbarItems, ProfileMenuContainer } from "./nav"
import { Link, useNavigate } from "react-router-dom"
import { IoMenu } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";
import { ClientAPI } from "../../API/client";
import { logout } from "../../redux/slices/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { loginSeletore } from "../../redux/selectores";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import Modal from "../modal/Modal";

export default function NavbarHandyman() {
    const [clicked, setClicked] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [triggerMenu, setTriggerMenu] = useState(false)
    const dispatche = useDispatch();
    const navigate = useNavigate()
    const { user } = useSelector(loginSeletore)
    const image = user?.profile_image
    window.addEventListener("scroll", () => {
        window.scrollY > 35 ? setScrolled(true) : setScrolled(false)
    })

    const menuRef = useRef()
    useEffect(() => {
        const handel = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setTriggerMenu(false)
            }

        }
        document.addEventListener("mousedown", handel)
        return () => {
            document.removeEventListener("mousedown", handel)
        }
    })
    const handelClick = () => {
        setClicked(!clicked)
    }
    const linkMenu = [
        { page: "Home", href: "/handyman" },
        { page: "Find work", href: "/handyman/findWork" },
        { page: "Contact Us", href: "#" },
        { page: "About Us", href: "#" },
    ];

    const logOut = async () => {
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
                        <Link onClick={handelClick} activeClassName="active" className={`navLinks ${link.className}`} to={link.href}>{link.page}</Link>
                    </li>
                ))}
            </LinkItems>
            <ProfileMenuContainer ref={menuRef}>

                <div className="menu-trigger" onClick={() => setTriggerMenu(!triggerMenu)}>
                    <img src={process.env.REACT_APP_BASE_URL + image} className={image === "/storage/images/users/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" ? "imageDefault" : "image"
                    } alt="profileimage" />
                </div>
                <div className={`drop-down-menu ${triggerMenu ? 'active' : 'inactive'}`}>
                    <h3>{user?.name}</h3>
                    <span>{user?.email}</span>
                    <ul>
                        <li className="DropdownItem">
                            <FaRegUserCircle className="iconMenu" />
                            <Link to={"/handyman/profile"} onClick={() => setTriggerMenu(!triggerMenu)}>show profile</Link>
                        </li>
                        <li className="DropdownItem">
                            <IoMdLogOut className="iconMenu" />
                            <a onClick={() => logOut()}>Log Out</a>
                        </li>
                    </ul>
                </div>
            </ProfileMenuContainer>
        </NavbarItems>
    </>
}

