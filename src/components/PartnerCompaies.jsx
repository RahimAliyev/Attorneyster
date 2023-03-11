import React from 'react'
import Company from './Company'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";


import modern from '../assets/Companies/Modern-Home.svg'
import vintage from '../assets/Companies/Vintage.svg'
import brand from '../assets/Companies/Brand.svg'
import nature from '../assets/Companies/Nature.svg'
import classic from '../assets/Companies/Classic.svg'


const PartnerCompaies = () => {
  return (
    <>
    <div className='Companies pt-3 pb-3 ps-3 pe-3  mx-auto' >
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
      >

      
     

    <SwiperSlide><Company sekil={modern}/></SwiperSlide> 
  <SwiperSlide><Company sekil={vintage} /></SwiperSlide>  
  <SwiperSlide><Company sekil={brand}/></SwiperSlide> 
  <SwiperSlide><Company sekil={nature}/></SwiperSlide> 
  <SwiperSlide><Company sekil={classic}/></SwiperSlide> 
    
    
    
    
    </Swiper>
    </div>
    </>
   
  )
}

export default PartnerCompaies