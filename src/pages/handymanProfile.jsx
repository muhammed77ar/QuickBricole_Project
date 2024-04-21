import { useSelector } from "react-redux";
import { Container } from "../styledComponent/handymanProfileStyle";
import { handymanPortfolioSeletore, loginSeletore } from "../redux/selectores";
import { FaLocationDot } from "react-icons/fa6";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { useState } from "react";
import Modal from "../component/modal/Modal";
import { FaEdit } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa";

export default function HandymanProfile() {
  const { user } = useSelector(loginSeletore)
  const portfolio = useSelector(handymanPortfolioSeletore)
  const [showModal, setShowModal] = useState(false)

  const OpenModal = () => {
    setShowModal(true)
  }
  console.log(portfolio)
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  };

  return (
    <Container>
      <div className="heroProfile">
        {showModal &&
          <Modal setShowModal={setShowModal} user={user} />
        }
        <div className="banner"></div>
        <div className="infosContainer">
          <button onClick={OpenModal} class="button-57"><span class="text"><FaEdit /></span><span>Edit</span></button>
          <img src={process.env.REACT_APP_BASE_URL + user?.profile_image} alt="profileimage" />
          <div className="infos">
            <h3><i>{user?.name}</i></h3>
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
        <div className="sidebar">
          <div className="icons">
            <FaPhone className="phone" />
            {user?.phone_number}
          </div>
          <div className="icons">
            <TbMailFilled className="email" />
            {user?.email}
          </div>
          {/* <div className="icons">
            <FaLocationDot className="phone" />
            {user?.city}
          </div> */}
          <div className="description">
            <p>What I do:</p>
            {user?.description}
          </div>
          <div className="rating">
            {/* example for rating */}
            <p>4.0</p>
            <div className="stars">
              <FaStar className="star" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" />
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div class="three">
            <h1>My Portfolio</h1>
          </div>
          <ul class="cards">
            {portfolio.map(p => (
              <li key={p?.id} class="cards__item">
                <div class="card">
                  <img class="card__image" src={p?.image1} alt="Fence" />
                  <div class="card__content">
                    <div class="card__title">{p?.title}</div>
                    <p class="card__description">{truncateText(p?.description, 100)}</p>
                    <button class="btn btn--block card__btn">See More Details</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>

  )
}
