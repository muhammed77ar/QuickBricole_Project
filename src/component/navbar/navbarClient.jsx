import { LinkItems, LogoImg, Menu, NavbarItems, ProfileMenuContainer } from "./nav"
import { Link, useNavigate } from "react-router-dom"
import { IoMenu } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/loginSlice";
import { ClientAPI } from "../../API/client";
import { loginSeletore } from "../../redux/selectores";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { MdEdit } from "react-icons/md";

export default function NavbarrClient() {
    const [clicked, setClicked] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [triggerMenu, setTriggerMenu] = useState(false)
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
        { page: "Home", href: "/client" },
        { page: "Find professional", href: "/client/findProfessional" },
        { page: "Needs List", href: "/client/projectslist" },
        { page: "Post a Service", href: "/client/postService", className : "post" }
    ];
    const menuRef = useRef()
    useEffect(()=>{
        const handel = (e) =>{
            if (!menuRef.current.contains(e.target)) {
                setTriggerMenu(false)
            }
            
        }
        document.addEventListener("mousedown", handel)
        return () => {
            document.removeEventListener("mousedown", handel)
        }
    })
     const  logOut  = async () =>{
            const res = await ClientAPI.logout();
            console.log(res)
             dispatche(logout())
             navigate('/login');
        }

    return <>
        <NavbarItems scroll={scrolled}>
            <Link to='/client'><LogoImg src="../photos/logo-color.svg" /></Link>
            <Menu onClick={handelClick}>
                {clicked ? <CgClose className="icons" /> : <IoMenu className="icons" />}
            </Menu>
            <LinkItems active={clicked}>
                {linkMenu.map((link) => (
                    <li key={link.page}>
                        <Link onClick={handelClick} activeClassName="active"  className={`navLinks ${link.className}`} to={link.href}>{link.page}</Link>
                    </li>
                ))}
            </LinkItems>
            <ProfileMenuContainer ref={menuRef}>
                    <div className="menu-trigger" onClick={()=> setTriggerMenu(!triggerMenu)}>
                        <img src={process.env.REACT_APP_BASE_URL + image} alt="profileimage" />
                    </div>
                    <div className={`drop-down-menu ${triggerMenu ? 'active' : 'inactive'}`}>
                        <h3>{user?.name}</h3>
                        <span>{user?.email}</span>
                        {/* <div className="line"></div> */}
                        <ul>
                            <li className="DropdownItem">
                                <FaRegUserCircle className="iconMenu" />
                                <a href="#">show profile</a>
                            </li>
                            <li className="DropdownItem">
                                <MdEdit className="iconMenu" />
                                <a href="#">Edit Profile</a>
                            </li>
                            <li className="DropdownItem">
                                <IoMdLogOut className="iconMenu" />
                                <a  onClick={() => logOut()}>Log Out</a>
                            </li>
                        </ul>
                    </div>
                </ProfileMenuContainer>
        </NavbarItems>
    </>
  }