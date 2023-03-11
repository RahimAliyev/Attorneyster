import React from 'react'
import '../components/Contact.css'
import informleft from '../assets/Formsection/inform-left.svg'
import callicon from '../assets/Formsection/call-icon.svg'
import formbackground from '../assets/Formsection/form-background.svg'

import App from '../Forms/App';



const Əlaqə = () => {

  

  


  return (
    <>

    <div className="informations-section">
      <div className="informs-container">
        <div className="inform-left"  data-aos="fade-right" data-aos-duration="1000">
      <h1>Peşəkar hüquqşünas komandamız <br /> hər zaman sizə xidmət etməyə <br />
       hazırdır</h1>
      <img src={informleft} alt="" className='d-block' />

      <small className='padd'>Böyük və ya kiçik yeni hallar üçün həmişə hazırıq. <br /> 
      Bizə e-poçt göndərin və biz qısa zamanda əlaqə saxlayacağıq <br />
      və ya bazar ertəsindən şənbəyə qədər <br /> səhər 8:00-dan axşam 19:00-a 
       qədər telefonla əlaqə saxlayaq. </small>
        <div className="BES">
          <button className='PC' >Bizimlə əlaqə saxlayın</button>
       </div>
        </div>
      
    
        <div className="inform-right"  data-aos="fade-left" data-aos-duration="1000">

          <div className="inform-right-container">
            <div className="consultating-section">
              <div className="top-consultating">
                 <h1>Pulsuz Konsultasiya əldə edin</h1>
              <small>Aşağıdakı əlaqə nömrəsi ilə bizdən ödənişsiz <br />
               konsultasiya və işin qiymətləndirilməsini əldə edə bilərsiniz</small>
              </div>
             <div className="bottom-consultating">
             <div className="icon"  >
              <div className="call-icons">
                <img src={callicon} alt="" />
              </div>
                
                <div className="mobile-inform">
                   <h1>Bizimle Elaqe: </h1>
                <a href="tel:">911-987654321</a>
                </div>
               
              </div>
             </div>
            </div>

          </div>

        </div>
      </div>
    </div>
   
    
     <App/>
    </>
  )
}

export default Əlaqə