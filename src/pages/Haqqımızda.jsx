import React from 'react'
import '../components/AboutUs.css'
import Leftsvg from '../assets/AboutUs/left-info.svg'
import Rightsvg from '../assets/AboutUs/right-info.svg'
import Center from '../assets/AboutUs/center.svg'
import DivorceCases from '../assets/AboutUs/Divorce.svg'
import Property from '../assets/AboutUs/Property.svg'
import Banking from '../assets/AboutUs/Banking.svg'
import Accident from '../assets/AboutUs/Accident.svg'


const Haqqımızda = () => {
  
  return (
    <>
    <div className="About-us-container">
        <div className="About-us-background">
            <div className="info-section">
             <div className="info-section-left " data-aos="fade-right" data-aos-delay="500"> 
              <h1>Biz Ən Yaxşı Hüquqşünasıq <br /> Və Tarix</h1>
              
              <img src={Leftsvg} alt="" />
              <p>2000 – Şirkətin yaradılması!</p>
              <small>Hüquqşünasların mənşəyi və hüququn ilk qurucuları Qədim Yunanıstan <br />
               və Romada meydana çıxır.</small>

              <p>2006 – Birlikdə İnşa edirik</p>
              <small>Orta əsrlərdə hüquqşünaslar qərb dünyasında vəkillik <br />
               peşəsi çökdüyü üçün <br />
                özlərini yaşamaq üçün mübarizə aparırdılar..</small>

                  <p>2008 – 10000 işi tamamladıq</p>
                  <small>ABŞ-da hüquqşünaslar ilk dəfə nə vaxt fəaliyyətə başlayıblar? <br />
                   Vəkillərin tarixini başa düşmək vacibdir.</small>
                      <p>2011 – Biz bir nömrəyik</p>
                      <small>Nəhayət, vəkillərə qarşı ön mühakimələr <br />
                        vəkillik peşəsindən uzaqlaşmağa başladı <br />
                         hörmət və güc qazanmağa başladı.</small>
             </div>
             
             <div className="info-section-center" data-aos="fade-down" data-aos-delay="1000" data-aos-easing="linear"
     data-aos-duration="1500"
     >
                <img src={Center } alt="" />

                
  
             </div>

           
            <div className="info-section-right" >
                <h1>Biz İxtisaslaşmışıq <br />
                 Və Təcrübəliyik
                </h1>
                <img src={Rightsvg} alt="" className='d-block' />
                <small className='d-block'><br /> hüquq sahənizlə bağlı yeniliklərdən xəbərdar olun. <br /> kimi yeni inkişaflardan xəbərdar olun
                 qanunlar və qaydalar tez-tez <br /> əsasında dəyişir
                  vəziyyət və hər gün yeni işlərə qərar verilir.</small>

                   <div className="precents">
                    <small>Boşanma və Ailə İşləri</small>
                <h1 className='precent'>75%</h1>
                   </div>
                
                <img src={DivorceCases} alt="" />
                  <div className="precents">
                    <small>Əmlak və Tikinti</small>
                <h1 className='precent'>80%</h1>
                  </div>
                
                <img src={Property} alt="" />
                      <div className="precents">
                        <small>Bankçılıq və Maliyyə </small>
                <h1 className='precent'>75%</h1>
                      </div>
                
                <img src={Banking} alt="" />
                  <div className="precents">
                    <small>Qəza və Səhv Ölüm</small>
                <h1 className='precent'>90%</h1>
                  </div>
                
                <img src={Accident} alt="" />
                
                <div className="buttons">
                                    <button className='PC'>Pulsuz Cansultasiya</button>

                </div>
                
            </div>
 </div>
        </div>
    </div>
    </>
  )
}

export default Haqqımızda