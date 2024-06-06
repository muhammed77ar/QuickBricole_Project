import { useSelector } from "react-redux";
import { handymanPortfolioSeletore } from "../redux/selectores";
import { FaLocationDot } from "react-icons/fa6";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axiosClient from "../axios/axios";
import {Container2 } from "../styledComponent/handymanProfileForClient";

export default function HandymanProfileForClient() {
    const {id} = useParams()
    const portfolio = useSelector(handymanPortfolioSeletore)
    const [handyman, setHandyman] = useState({})

    useEffect(()=> {
        const fetchHandyman = async () => {
            try {
                const response = await axiosClient.get(`/handymans/${id}`)
                if (response.status === 200) {
                    setHandyman(response.data?.data)
                 
                    console.log(response)
                }
            } catch (error) {
                console.log(error)
              
            }
        }
        fetchHandyman()
    }, [])

    

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
          return text.substring(0, maxLength) + '...';
        } else {
          return text;
        }
      };

  return (
    <Container2>
      <div className="heroProfile">
        <div className="banner"></div>
        <div className="infosContainer">
          <img src={process.env.REACT_APP_BASE_URL + handyman?.profile_image} alt="profileimage" />
          <div className="infos">
            <h3>{handyman?.name}</h3>
            <span>{handyman?.email}</span>
            <div className="icons">
              <div>
                <FaLocationDot className="i" />
                <p>{handyman?.city}</p>
              </div>
              <div>
                <FaScrewdriverWrench className="i" />
                <p>{handyman?.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="sidebar">
          <div className="icons">
            <FaPhone className="phone" />
            {handyman?.phone_number}
          </div>
          <div className="icons">
            <TbMailFilled className="email" />
            {handyman?.email}
          </div>
          <div className="description">
            <p>What I do:</p>
            {handyman?.description}
          </div>
          <div className="rating">
            <p>4.0</p>
            <div className="stars">
              <FaStar className="star" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" />
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div class="three">
            <h1>{handyman?.name} Portfolio</h1>
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
    </Container2>
  )
}
