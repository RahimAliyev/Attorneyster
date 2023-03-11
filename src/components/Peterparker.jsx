import React from 'react'
import Leftpic from '../assets/svgs/left-pic.svg'
import Peterpic from '../assets/svgs/peter-right.svg'
import Lawpic from '../assets/svgs/left-law-pic.svg'
import SmallPeterpic from '../assets/svgs/peter-small-pic.svg'
import Leftboxpic from '../assets/svgs/left-box.svg'
import Rightboxpic from '../assets/svgs/right-box.svg'

import '../components/Peter.css'
import Aos from 'aos';
const Peterparker = () => {
  return (
    <>
    
    <div className="top  "  
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"  >
        <div className="left-side-pic" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
         <img src={Leftpic}  data-aos="fade-right" />
        </div>
        <div className="right-side">
            <div className="right-side-top" data-aos="fade-down"   
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <h1>
                Vəkil Qanununa xoş gəlmisiniz -
                </h1>
                <h1>Hüquqşünas və Hüquq Firması Şirkəti</h1>

            </div>
            <div className="right-side-center" data-aos="flip-right" data-aos-duration="2000" data-aos-easing="ease-out-cubic" >
               
            <img src={Peterpic} alt="" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"  />
            </div>
            <div className="right-side-bottom"  data-aos="fade-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <p>Biz Bruklində olsaq da, dəniz hüquqşünaslarımız yaralılara kömək etməkdən qürur duyurlar <br />
                      o dövrdə xarici sularda işləyən işçilər də daxil olmaqla, bütün ölkə daxilində <br />
                      hadisədən
                         ən böyük ofşor şirkətlərə qarşı çıxın və qalib gəlin.</p>

            </div>
        </div>
    </div>



    <div className="bottom  "    >
      <div className="left-side-law" data-aos="fade-right">
        <div className="left-side-pic">
         <img src={Lawpic}   />
        </div>
      </div>
        
        <div className="right-side" data-aos="fade-down">
            <div className="right-side-top">
        <div className="small-pic-section">
          <img src={SmallPeterpic} alt="" />
          <h1>Peter Parker</h1>
        </div>
      
               

            </div>
            
            <div className="right-side-bottom">
             
              <div className="Left-box">
                <div className="left-box">
                 <div className="left-box-logo">
                 <img src={Leftboxpic} alt="" />
                 </div>
                 <div className="left-box-top">
                      <h1 className='precent-left'>95%</h1>
                      <h1 className='case'> Uğurlu case sayı</h1>
                 </div>
                
                </div>
              </div>
                
                <div className="Right-box">
                <div className="right-box">
                 <div className="right-box-logo">
                  <img src={Rightboxpic} alt="" />

                 </div>
                 <div className="right-box-top">
                  <h1 className='precent-right'>İllik</h1>
                  <h1 className='experience'>Təcrübə</h1>
                 </div>
                
                </div>
                </div>
                   
              
            </div>

            
        </div>
    </div>
    </>
  )
}




export default Peterparker
