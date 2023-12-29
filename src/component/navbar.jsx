import {useState } from "react";
import { NavbarLinkWrapper, NavbarWrapper, StyledIcon, StyledIconX, StyledNavLink } from "../styledComponent/navbarStyle";
import Logo from "./logo";
import Modal from "./modal";
import { Link } from "react-router-dom";


export default function Navbar({setOpenModal}){
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false);
  const toggelActive = () =>{
    setActive(!active)
  }

  const toggelModal = () =>{
    setOpen(!open)
    setOpenModal(!open)
  }
  
  const link = [
    {page:"Home", href:"/"},
    {page:"Find professional", href:"/findProfessional"},
    {page:"Find work", href:"/findWork"},
    {page:"Log In", href:"/login"},
    {page:"Sign Up", onClick : toggelModal},
    {page:"Post a Service", href:"/postService"}
  ]
  return<>
  <NavbarWrapper>
    <Logo />
    {active ? <StyledIconX onClick={toggelActive} /> : <StyledIcon onClick={toggelActive} />}
    <NavbarLinkWrapper active={active}>
      {link.map((link) =>(
        <StyledNavLink activeClassName="active" key={link.page} to={link.href} onClick={link.onClick}> 
          {link.page}
        </StyledNavLink>
      ))}
    </NavbarLinkWrapper>
  </NavbarWrapper>
  <Modal open={open} onClose={toggelModal} >
        <div className="text-center w-[250px] md:w-[650px] sm:w-[500px] lg:w-[800px] flex justify-around flex-col gap-3 md:flex-row items-center h-[500px] sm:h-[450px] md:h-[400px] lg:h-[400px] ">
          <Link to={"/clientsignUp"} onClick={toggelModal} className=" no-underline">
          <section className="bg-center bg-no-repeat rounded-2xl cursor-pointer bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] md:w-[300px] w-[250px] h-[200px] sm:w-[400px] sm:h-[200px] md:h-[300px] lg:w-[350px] lg:h-[300px] bg-gray-700 bg-blend-multiply h-full lg:mb-0 md:mb-0 flex justify-center items-center">
            <div className="text-white text-center">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none">
                Sign up
              </h1>
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none">
                As Client
              </h2>
            </div>
          </section>
          </Link>
          <Link to={"bricoleursignUp"} onClick={toggelModal} className=" no-underline">
          <section className="bg-center bg-no-repeat rounded-2xl cursor-pointer bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] md:w-[300px] w-[250px] h-[200px] sm:w-[400px] sm:h-[200px] md:h-[300px] lg:w-[350px] lg:h-[300px] bg-gray-700 bg-blend-multiply h-full flex justify-center items-center">
            <div className="text-white text-center">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none">
                Sign up
              </h1>
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none">
                As Bricoleur
              </h2>
            </div>
          </section>
          </Link>
        </div>
      </Modal>
  </>
}
