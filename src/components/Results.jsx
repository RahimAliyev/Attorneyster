import React from 'react'
import Ricon from '../assets/svgs/results-icon.svg'
import heart from '../assets/svgs/results-heart-icon.svg'
import Star from '../assets/svgs/results-star.svg'
import image from '../assets/svgs/bottom-card-img.svg'


import '../components/results.css'
const Results = () => {
  return (
    <>
        <div className="Results-container " >
            
            <div className="results-top" data-aos="fade-down" data-aos-delay="500">
               <h1>Nə əldə etmək üçün mübarizə</h1>
               <h1>sən layiqsən</h1>
               <img src={Ricon} alt="" />
            </div>
            <div className="results-center"  data-aos="fade-down" data-aos-delay="500">
           <small>İdarə heyəti tərəfindən təsdiq edilmiş ailə hüquqşünaslarımız ədalətli və <br /> əldə etmək üçün çalışırlar
            işinizdə hüquqi məsələlərin vaxtında həlli.
           </small>
            </div>

            <div className="results-bottom" data-aos="fade-up" data-aos-delay="500">
            <div className="side-by-side ">
                 <div className="bottom-cards  ">
                    <div className="bottom-left">
                    <img src={heart} alt="" />
                    
                    </div>
                    <div className="bottom-right">
                     <h1>Etibarlı Müştərilər</h1>
                     <small>Müştərilərimizin sayı</small>
                    </div>
                </div>

                <div className="bottom-cards">
                    <div className="bottom-left">
                         <img src={Star} alt="" />
                    </div>
                    <div className="bottom-right">
                        <h1>Uğurlu hallar</h1>
                        <small>Ən böyük qazanan dəyər</small>
                    </div>
                </div>
                <div className="bottom-card ">
                    <div className="image">

                    
                    <div className="bottom-left">
                    <h1>15,890+</h1>
                    <small>Cinayət Müdafiəsi</small>
                    </div>
                    
                </div>
                 </div>
            </div>
               

            </div>

            
        </div>
        
        
    </>
  )
}

export default Results