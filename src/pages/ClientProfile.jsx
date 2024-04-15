import { useSelector } from "react-redux";
import { Container } from "../styledComponent/handymanProfileStyle";
import { loginSeletore } from "../redux/selectores";
import { FaLocationDot } from "react-icons/fa6";
import { FaScrewdriverWrench } from "react-icons/fa6";

export default function ClientProfile() {
  const {user} = useSelector(loginSeletore)
  
  
  return (
    <Container>
        <div className="heroProfile">
            <div className="banner"></div>
            <div className="infosContainer">
              <img src={process.env.REACT_APP_BASE_URL + user?.profile_image} alt="profileimage" />
              <div className="infos">
                <h3>{user?.name}</h3>
                <span>{user?.email}</span>
                <div className="icons">
                  <div>
                    <FaLocationDot className="i" />
                    <p>{user?.city}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="content">

        </div>
    </Container>
  )
}
