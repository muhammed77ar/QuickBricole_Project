// Modal.js
import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import BackDrop from "./BackDrop";
import { FaCamera } from "react-icons/fa";
import { useSelector } from "react-redux";
import { CategoriesSeletore } from "../../redux/selectores";
import axiosClient from "../../axios/axios";
const mobileBreakPoint = "700px";


const ModalWrapper = styled.div`
  position: absolute;
  top: -120px;
  @media screen and (max-width: ${mobileBreakPoint}){
    top: 0px;
  }
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  ::-webkit-scrollbar {
  scrollbar-width: thin;
}
::-webkit-scrollbar-track {
  background: white;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb {
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background-image: linear-gradient(120deg, #619eff 0%, #ade5ff 100%);
}
`;

const ModalContent = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 20px 0;
  position: relative;
  width: 80%;
  max-width: 800px;
  max-height: 90vh;
  @media screen and (max-width: ${mobileBreakPoint}){
    max-height: 75vh;
  }
  background-color: white;
  z-index: 20000;
  margin-top: 50px;
  border-radius: 10px;
  transform: translateY(-100vh);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: auto;
  

  &.showModal {
    opacity: 1;
    transform: translateY(0);
  }

  .closeBtn {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    span {
      display: block;
      font-size: 2rem;
      font-weight: bold;
      transition: transform 0.2s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .Modalbanner{
    background-image: url("../photos/wave (1).png");
    background-repeat: no-repeat;
    border-radius: 10px;
    border-top-right-radius:0 ;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 380px; 
    @media screen and (max-width: ${mobileBreakPoint}){
        height: 400px;
    }
  }
  .modalInfosContainer{
    position: relative;
    @media screen and (max-width: ${mobileBreakPoint}){
      position: static;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
  }
    .editForm{ 
      .upload{
    width: 180px;
    position: absolute;
     top: -320px;
     left: 300px;
     @media screen and (max-width: ${mobileBreakPoint}){
      position: static;
      transform: translate(50px ,-330px);
  }
}
.upload img{
      width: 180px;
        height: 180px;
        border-radius: 100%;
        object-fit: cover;
        border: 5px solid white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.upload .round{
    position: absolute;
    width: 180px;
    height: 180px;
    top: 0;
    border-radius: 100%;
}
.upload .round input[type="file"]{
    position: absolute;
    height: 180px;
    width: 180px;
    border-radius: 100%;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
.upload .round .camera{
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
    font-size: 30px;
    color: black;
    background-color: white;
    padding: 10px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
}
/* .fields{
  position: absolute;
      left: 320px;
      top: -100px;
  @media screen and (max-width: ${mobileBreakPoint}){
    position: static;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          align-items: center;
          transform: translateY(-300px);
  }
  
} */
.fields {
  transform: translateY(-100px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding: 0 30px;
  @media screen and (max-width: ${mobileBreakPoint}){
    position: static;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          align-items: center;
          transform: translateY(-300px);
  }
  .form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media screen and (max-width: ${mobileBreakPoint}){
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    gap: 0;
  }
}

.input-data {
  flex: 1;
}

label{
  color: #686868;
}

.input-data input {
  width: 100%; 
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  outline: none;
  transition: border-bottom-color 0.3s ease;
  @media screen and (max-width: ${mobileBreakPoint}){
    margin-bottom: 20px;
  }
}
.input-data select {
  width: 100%; 
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  outline: none;
  transition: border-bottom-color 0.3s ease;
  @media screen and (max-width: ${mobileBreakPoint}){
    margin-bottom: 20px;
  }
}
.input-data textarea {
  width: 100%; 
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  outline: none;
  transition: border-bottom-color 0.3s ease;
  resize: vertical; /* Allows vertical resizing */
  @media screen and (max-width: ${mobileBreakPoint}){
    margin-bottom: 20px;
  }
}

.input-data textarea:focus {
  border-bottom-color: #3498db;
  border-top-color: #3498db;
}

.input-data select:focus {
  border-bottom-color: #3498db;
  border-top-color: #3498db;
}

.input-data input:focus {
  border-bottom-color: #3498db;
  border-top-color: #3498db;
}
button {
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}

}

    }
    }
    
  
`;

export default function Modal({ setShowModal, user }) {
  const [showContent, setShowContent] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [errors, setErrors] = useState({})
  const categories = useSelector(CategoriesSeletore);
  const imageRef = useRef()
  const nameRef = useRef()
  const emailRef = useRef()
  const cityRef = useRef()
  const descriptionRef = useRef()
  const categoryRef = useRef()
  const phoneNumberRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  useEffect(() => {
    setShowContent(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const closeModal = () => {
    setShowContent(false);
    setTimeout(() => {
      setShowModal(false);
    }, 500);
  };



  // change image
  const handleImageChange = () => {
    const file = imageRef.current.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result)
      };
      reader.readAsDataURL(file);
    }
  };
  const [data, setData] = useState({})
  const handelSubmit = (e) => {
    e.preventDefault()
    const payload = {
      name: nameRef.current.value,
      city: cityRef.current.value,
      profile_image: imageRef.current.files[0],
      phone_number: phoneNumberRef.current.value,
      email: emailRef.current.value,
      description: descriptionRef.current.value,
      password: passwordRef.current.value,
      category_id: parseInt(categoryRef.current.value),
      password_confirmation: confirmPasswordRef.current.value,
      "_method": "PUT"
    }
    // setData(payload)
    axiosClient.post(`/handymans/${user?.id}`, payload)
      .then(() => {
        closeModal()
        document.location.reload()
      }).catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors)
          setErrors(response.data.errors)
        }
      })
  }
  // console.log(data)

  return (
    <>
      <BackDrop showContent={showContent} closeModal={closeModal} />
      <ModalWrapper>
        <ModalContent className={showContent ? "modalContent showModal" : "modalContent"}>
          <div onClick={closeModal} className="closeBtn">
            <span>&times;</span>
          </div>
          <div className="Modalbanner"></div>
          <div className="modalInfosContainer">
            {/* <img src={process.env.REACT_APP_BASE_URL + user?.profile_image} alt="profileimage" /> */}

            <form action="" className="editForm" onSubmit={handelSubmit}>
              <div className="upload">
                {previewImage ? (
                  <img src={previewImage} alt="Preview" width={100} height={100} />
                ) : (
                  <img src={process.env.REACT_APP_BASE_URL + user?.profile_image} alt="profileimage" />
                )}
                <div className="round">
                  <input
                    ref={imageRef}
                    type="file"
                    name="image"
                    placeholder="Upload Profile"
                    onChange={handleImageChange}
                  />
                  <span className="camera"><FaCamera /></span>
                </div>
              </div>
              <div className="fields">
                <div class="form-row">
                  <div class="input-data">
                    <label htmlFor="">Name:</label>
                    <input type="text" ref={nameRef} defaultValue={user?.name} />
                  </div>
                  <div class="input-data">
                    <label htmlFor="">City:</label>
                    <input type="text" ref={cityRef} defaultValue={user?.city} />
                  </div>
                </div>
                <div class="form-row">
                  <div class="input-data">
                    <label htmlFor="">Email:</label>
                    <input type="text" ref={emailRef} placeholder="Enter your email" defaultValue={user?.email} />
                  </div>
                  <div class="input-data">
                    <label htmlFor="">Phone Number:</label>
                    <input type="text" ref={phoneNumberRef} placeholder="Enter your phone number" defaultValue={user?.phone_number} />
                  </div>
                </div>
                <div class="form-row">
                  <div class="input-data">
                    <label htmlFor="">Password:</label>
                    <input type="password" ref={passwordRef} placeholder="Enter your new password" />
                  </div>
                  <div class="input-data">
                    <label htmlFor="">Confirm Password:</label>
                    <input type="password" ref={confirmPasswordRef} placeholder="Confirm your new password" />
                  </div>
                </div>
                <div class="form-row">
                  <div class="input-data">
                    <label htmlFor="">Category:</label>
                    <select ref={categoryRef} >
                      <option selected disabled value={parseInt(user?.category_id)}>{user?.category}</option>
                      {categories?.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div class="input-data">
                    <label htmlFor="">Description:</label>
                    <textarea placeholder="Enter a description" ref={descriptionRef}>{user?.description}</textarea>
                  </div>
                </div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </ModalContent>
      </ModalWrapper>
    </>
  );
}


