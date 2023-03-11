import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

import toplogo from '../assets/OurTeamsvgs/toplogo.svg'
import leftpic from '../assets/OurTeamsvgs/leftmember.svg'
import middle from '../assets/OurTeamsvgs/middlemember.svg'
import right from '../assets/OurTeamsvgs/rightmember.svg'
import '../components/OurTeam.css'
const OurTeam = () => {
  return (
    <>
    <div className="Team-container">
    <div className="Team-container-top">
            <h1>Təcrübəli Vəkilimiz Hazırdır</h1>
            <h1>İstənilən suala cavab vermək üçün</h1>
            <img src={toplogo} alt="" />
         
        </div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
       
        modules={[Autoplay]}
        className="mySwiper"
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
      >
     

        <div className="Team-container-bottom">
      <SwiperSlide><div className="left-member">      
                <img src={leftpic} alt="" />
                <div className="left-member-bottom">
                    <h1>John Turner</h1>
                    <p>Mülki Vəkil</p>

                </div>
                

            </div></SwiperSlide>
            <SwiperSlide>       <div className="middle-member">
            <img src={middle} alt="" />
                <div className="middle-member-bottom">
                <h1>Martha Black</h1>
                    <p>Vəkil köməkçisi</p>
                </div>

            </div></SwiperSlide> 
            <SwiperSlide><div className="right-member">         
            <img src={right} alt="" />

            <div className="right-member-bottom">
            <h1>Brian Gomez</h1>
                    <p>Titul vəkil</p>
            </div>
            </div></SwiperSlide>
        </div> 
        </Swiper>
      
      
         
      
        
        

        
        
    </div>
    </>
  )
}

export default OurTeam