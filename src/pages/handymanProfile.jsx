import { useSelector } from "react-redux";
import { Container } from "../styledComponent/handymanProfileStyle";
import { loginSeletore } from "../redux/selectores";
import { FaLocationDot } from "react-icons/fa6";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { useState } from "react";
import Modal from "../component/modal/Modal";
import { FaEdit } from "react-icons/fa";

export default function HandymanProfile() {
  const {user} = useSelector(loginSeletore)
  const [showModal, setShowModal] = useState(false)

  const OpenModal = () => {
    setShowModal(true)
  }
  
  return (
    <Container>
        <div className="heroProfile">
        {showModal &&
      <Modal setShowModal={setShowModal} user={user}/>
      }
            <div className="banner"></div>
            <div className="infosContainer">
            <button  onClick={OpenModal} class="button-57"><span class="text"><FaEdit /></span><span>Edit</span></button>
              <img src={process.env.REACT_APP_BASE_URL + user?.profile_image} alt="profileimage" />
              <div className="infos">
                <h3>{user?.name}</h3>
                <span>{user?.email}</span>
                <div className="icons">
                  <div>
                    <FaLocationDot className="i" />
                    <p>{user?.city}</p>
                  </div>
                  <div>
                    <FaScrewdriverWrench className="i" />
                    <p>{user?.category}</p>
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
