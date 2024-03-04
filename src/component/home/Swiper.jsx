import React, { useEffect,  useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../App.css';

// import required modules
import { Pagination,Autoplay,Navigation } from 'swiper/modules';
import ProfetionalCard from './ProfetionalCard';

const Profetionals = [
  {
    name: 'karime',
    img :'https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=900&t=st=1707496899~exp=1707497499~hmac=386c12a85764ab018992f3c044ccc61834025c749fe5ea8c0c6e3ec0fa04613f',
    job:'Tv repare'
  },
  {
    name: 'karime',
    img :'https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=900&t=st=1707496899~exp=1707497499~hmac=386c12a85764ab018992f3c044ccc61834025c749fe5ea8c0c6e3ec0fa04613f',
    job:'Tv repare'
  },
  {
    name: 'karime',
    img :'https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=900&t=st=1707496899~exp=1707497499~hmac=386c12a85764ab018992f3c044ccc61834025c749fe5ea8c0c6e3ec0fa04613f',
    job:'Tv repare'
  },
  {
    name: 'karime',
    img :'https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=900&t=st=1707496899~exp=1707497499~hmac=386c12a85764ab018992f3c044ccc61834025c749fe5ea8c0c6e3ec0fa04613f',
    job:'Tv repare'
  },
  {
    name: 'karime',
    img :'https://img.freepik.com/free-photo/positive-brunet-man-with-crossed-arms_1187-5797.jpg?w=740&t=st=1707498446~exp=1707499046~hmac=1ce561642788b5d6925824a3b89cc2c9fc4516e600b19a973e8c5825ebc26620',
    job:'Tv repare'
  },
]

export default function Slider() {
  const  [PreView,setPreView] = useState(null)

  useEffect(()=>{
      if(window.innerWidth<800){
        setPreView(1)
      }else{
        setPreView(3)
      }
  }
  ,[])
  return (
    <>
      <Swiper
        slidesPerView={PreView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay,Navigation]}
        className="mySwiper"
        // loop={true}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
      >
        {Profetionals.map((profetional,key)=>(
          <SwiperSlide className='swiper-slide' key={key}>
          <ProfetionalCard data={profetional}/>

          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
