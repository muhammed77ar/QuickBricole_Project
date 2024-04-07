import { useSelector } from "react-redux";
import { Container } from "../styledComponent/handymanProfileStyle";
import { CategoriesSeletore, loginSeletore } from "../redux/selectores";
import { FaLocationDot } from "react-icons/fa6";
import { FaScrewdriverWrench } from "react-icons/fa6";
import axios from "axios";
import axiosClient from "../axios/axios";
import { useEffect, useState } from "react";

export default function HandymanProfile() {
  const {user} = useSelector(loginSeletore)
  const [category, setCategory] = useState()
  const categories = useSelector(CategoriesSeletore)

  useEffect(()=>{
    if (user?.category_id && categories?.length > 0){
      const matchCategoryId = categories.find(category => category.id === user.category_id) 
      setCategory(matchCategoryId)
    }
  }, [user, categories])
  

  
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
                  <div>
                    <FaScrewdriverWrench className="i" />
                    <p>{category?.name}</p>
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
