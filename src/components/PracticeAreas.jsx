import React from 'react'
import '../components/PracticeAreas.css'
import linepic from '../assets/svgs/line.svg'
const PracticeAreas = () => {
  return (
    <>
     <div className="comprehensive">
     <div className="left-side-areas" data-aos="fade-up">
     <h1>Mükəmməl Təcrübə Sahələrimizi <br/>Kəşf edin</h1>
     </div>
     <div className="right-side-areas" data-aos="fade-down">
    <small>Biz  təmin etməyə diqqət yetirən bir qrup mülki məhkəmə/mühakimə vəkiliyik <br />
      sığorta müdafiəsi, sığorta ilə bağlı məsələlərə əsaslanan bir ədalət <br />
       əhatə, pis niyyət, sığorta fırıldaqçılığı və cinayət məhkəməsi.</small>
     </div>
     </div>

     <div className="logo-lines" >
     <img src={linepic} alt=""   data-aos="zoom-in-down"/>
     </div>

    </>
  )
}

export default PracticeAreas