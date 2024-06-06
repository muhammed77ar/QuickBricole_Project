import { StyleHandymanCard } from "./StyledHandymanCard";

import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import {Link} from "react-router-dom"
import { GiPathDistance } from "react-icons/gi";
import { MdSocialDistance } from "react-icons/md";

export default function HandymanCard({handyman}) {

    const handlePhoneClick = () => {
        const phoneNumber = handyman?.phone_number;
        const telLink = `tel:${phoneNumber}`;
    
        window.location.href = telLink;
      };
      const handleWhatsAppClick = () => {
        const phoneNumber = handyman?.phone_number;
        const whatsappLink = `https://wa.me/${phoneNumber}?text=Hello%20${handyman?.name},%20I%20would%20like%20to%20inquire%20about%20your%20services.`;
        window.location.href = whatsappLink;
      };
  return (
   
    <Link to={`/client/handymanProfileForClient/${handyman?.id}`} style={{textDecoration:"none"}}>
    <StyleHandymanCard>
        <div className="top">
            <img src={process.env.REACT_APP_BASE_URL + handyman?.profile_image} alt="" />
            <div className="headInfo">
                <span className="name">{handyman?.name}</span>
                <span className="category">{handyman?.category}</span>
                <div className="distance">
                <GiPathDistance className="icon" />
                <span>{handyman?.distance.toFixed(2)} Km</span>
            </div>
            </div>
        </div>
        <div className="bottom">
            <div className="phoneNumber" title="make a call">
            <FaPhone className="icon" onClick={handlePhoneClick} />
            </div>
            <div className="whatsapp" title="send a message">
            <FaWhatsapp className="icon" onClick={handleWhatsAppClick} />
            </div>
        </div>
    </StyleHandymanCard>
    </Link>
  )
}
