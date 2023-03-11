import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";



import '../components/Fields.css'
import Case from '../assets/svgs/case.svg'
import Building from '../assets/svgs/Building.svg'
import Car from '../assets/svgs/Car.svg'
import Rip from '../assets/svgs/Stone-logo.svg'
import Chain from '../assets/svgs/Chain.svg'
import People from '../assets/svgs/Peoples.svg'

const Fields = () => {
  return (
    <>


     <div className="All-cards" data-aos="fade-up"
     data-aos-duration="2000">
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
         
     
    
     
    
        <div className="cards" >
        <SwiperSlide> <div className="All-six w-100"  >
            
                <div className="top-card-first">
                    <h1>Biznes qanunu</h1>
                    <small>Yeni inkişaflardan xəbərdar olun, çünki qanunlar və qaydalar vəziyyətə görə tez-tez dəyişir.</small>

                </div>

                <div className="bottom-card">   
                <div className="Case-logo">
                    <img src={Case} alt="" /> 
                    </div>      
                        <div className="letter">
                           <button>Ətraflı Baxın</button>  
                        </div>
                          
                </div>

                
                </div> </SwiperSlide>
           
                <SwiperSlide> <div className="All-six w-100">
                <div className="top-card-second">
                <h1>Tikinti qanunu</h1>
                    <small>Heç vaxt mühakimə etməyin, sadəcə qulaq asın və məsləhət verin. Müştəriniz işdə pis qərar vermiş olsa belə.</small>
                    </div>
                <div className="bottom-card">
                <div className="Building-logo">
                    <img src={Building} alt="" />
                </div>
                     <div className="letter">
                        <button>Ətraflı Baxın</button>
                     </div>
                      
                            
                    </div>
                </div> </SwiperSlide>
               

                <SwiperSlide><div className="All-six w-100">
                <div className="top-card-third">
                <h1>Avtomobil Qəzası</h1>
                    <small>Yalançı olmaq sizi heç bir yerə aparmayacaq və qanunda vicdansızlıq şöhrəti qazandıracaq.</small>
                    </div>
                <div className="bottom-card">
                <div className="Car-logo">
                     <img src={Car} alt="" />
                </div>
               <div className="letter">
                <button>Ətraflı Baxın</button>
               </div>
                  
                  
                    </div>
                </div> </SwiperSlide>

                <SwiperSlide><div className="All-six  w-100">
                <div className="top-card-forth">
                <h1>Səhv Ölüm</h1>
                    <small>Hüquq sahənizlə bağlı özünüzü yeniləyin. Qanunlar və qaydalar kimi yeni ədalətdən xəbərdar olun.</small>
                    </div>
                <div className="bottom-card">
               <div className="Rip-logo">
                <img src={Rip} alt="" />
               </div>
                <div className="letter">
                    <button>Ətraflı Baxın</button>
                </div>
                 
                        
                    </div>
                </div> </SwiperSlide>
                <SwiperSlide><div className="All-six w-100">
                <div className="top-card-fifth">
                <h1>Cinayət hüququ</h1>
                    <small>Bizim vəkillərimiz sizə layiq olduğunuz dəstəyi və diqqəti göstərməyə tam sadiqdirlər.</small>
                    </div>
                <div className="bottom-card">
                <div className="Chain-logo">
                    <img src={Chain} alt="" />
                </div>
                <div className="letter">
                    <button>Ətraflı Baxın</button>
                </div>
                    
                    </div>
                </div> </SwiperSlide>
                <SwiperSlide><div className="All-six  w-100">
                <div className="top-card-sixth">
                <h1>Ailə hüququ</h1>
                    <small>Özünüzü işləyə bilməyəcək və ya işlə bağlı vəzifələri təhlükəsiz şəkildə yerinə yetirə bilməyəcəksiniz.</small>
                    </div>
                <div className="bottom-card">
                <div className="people-logo">
                     <img src={People} alt="" />
                </div>
               <div className="letter">
                <button>Ətraflı Baxın</button>
               </div>
                
                    </div>
                </div> </SwiperSlide>
                
                
        </div>
        </Swiper>
     </div>

    </>
  )
}

export default Fields