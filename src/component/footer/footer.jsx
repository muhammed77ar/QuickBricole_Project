import { FooterWrapper, Footerr, Section2, Link, Section1, FooterLogo, Icons, Instagram, Twitter, Facebook, CopyRight } from "../../styledComponent/footer";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { PiCopyrightLight } from "react-icons/pi";

const socialMediaLinks = {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
  };

const FooterElements = [
  {
    id: "section",
    logo: "../photos/logo-no-background.svg",
    text: "The platform where you can search for professionals such as carpenters, mechanics, electricians and other service providers."
  },
  {
    id: "section1",
    title: "For Clients",
    links: [
      { name: "Find professional", href: "/findProfessional" },
      { name: "Quick Service", href: "/quickService" },
      { name: "Post Service", href: "/postService" },
      { name: "Create Account", href: "/clientsignUp" }
    ]
  },
  {
    id: "section2",
    title: "For Professionals",
    links: [
      { name: "Find Work", href: "/findWork" },
      { name: "Create Account", href: "/bricoleursignUp" }
    ]
  },
  {
    id: "section3",
    title: "Call Us",
    links: [
      {icon :<IoLocationOutline />, name: "Morocco", href: "https://maps.app.goo.gl/MDdaiYosSQqYwXEj6" },
      {icon : <FiPhoneCall />, name: "0600000000", href: "0600000000" },
      {icon : <TfiEmail />, name: "quickbricole@gmail.com", href: "mailto:quickbricole@gmail.com" },
    ]
  }
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Footerr>
        {FooterElements.map((element, key) => (
          key === 0 ? (
            <Section1 key={key}>
              <FooterLogo src={element.logo} />
              <p className="text">{element.text}</p>
              <Icons>
                <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                  <Instagram />
                </a>
                <a href={socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                  <Twitter />
                </a>
                <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                  <Facebook />
                </a>
              </Icons>
            </Section1>
          ) : (
            <Section2 key={key}>
              <h5>{element.title}</h5>
              <ul>
                {element.links.map((link, key2) => (
                  <li key={key2}>
                    <Link href={link.href} className="callUs"><span>{link.icon}</span>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </Section2>
          )
        ))}
      </Footerr>
      <CopyRight>
        <p><PiCopyrightLight className="icon" />2023 Quick Bricole. All right reserved</p>
      </CopyRight>
    </FooterWrapper>
  );
}
