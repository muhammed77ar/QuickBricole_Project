import { useEffect, useState } from "react";
import axiosClient from "../axios/axios";
import { AvatarContainer, MainWrapper, Sidebar, StyleQuickService, Wrapper } from "../styledComponent/QuickServiceStyle";
import HandymanCard from "../component/HandymanCard/HandymanCard";

export default function QuickService() {
  const [handymans, setHandymans] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])


  const fetchNearerHandyman = async () => {
    try {
      const response = await axiosClient.get("closest-handyman");
      if (response.status === 200) {
        setHandymans(response?.data)
        const uniqueCategories = [...new Set(response?.data.map(handyman => handyman.category))];
        setCategories(uniqueCategories);
      } else {
        console.log("there is an error during fetching handymans!!")
      }
    } catch (error) {
      console.log(error)
    }
  }
  console.log(categories)

  useEffect(() => {
    fetchNearerHandyman()
  }, [])

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter(c => c !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });
  };

  const filteredHandymans = handymans.filter(handyman => 
    selectedCategories.length === 0 || selectedCategories.includes(handyman.category)
  );

  return (
    <MainWrapper>
      <Sidebar>
        <div className="Container">
          <h5>Categories</h5>
          {categories.map((category, key) => (
          <div className="checkbox-wrapper-45" key={key}>
            <input 
            id={`cbx-45-${key}`} 
            type="checkbox"
            onChange={() => handleCategoryChange(category)}
            checked={selectedCategories.includes(category)}
             />
            <label className="cbx" htmlFor={`cbx-45-${key}`}>
              <div className="flip">
                <div className="front"></div>
                <div className="back">
                  <svg width="16" height="14" viewBox="0 0 16 14">
                    <path d="M2 8.5L6 12.5L14 1.5"></path>
                  </svg>
                </div>
              </div>
            </label>
            <span>{category}</span>
          </div>
        ))}
        </div>
      </Sidebar>
      <Wrapper>
        <div className="Head">
          <div className="title">The nearest handymen worker to you</div>
          <AvatarContainer>
            {handymans.slice(0, 3).map((handyman) => (
              <img
                key={handyman?.id}
                src={process.env.REACT_APP_BASE_URL + handyman?.profile_image}
                alt="profile_image"
                className="avatar"
              />
            ))}
            <div className="count">+{handymans.length}</div>
          </AvatarContainer>
        </div>

        <StyleQuickService>
          {
            filteredHandymans.map(handyman => (
              <HandymanCard key={handyman?.id} handyman={handyman} />
            ))
          }
        </StyleQuickService>
      </Wrapper>
    </MainWrapper>
  )
}





