import React, {useRef} from 'react'
import Typed from 'react-typed'
import mypic from '../assets/svgs/right-pic.svg'
import myAttorney from '../assets/svgs/logo.svg'
import { HiBars3CenterLeft } from "react-icons/hi2";
import linepic from '../assets/svgs/line.svg'
import Aos from 'aos';
// import {RxCross2} from 'react-icons/rx'
// import Header from './Header';
// import icon from '../assets/svgs/callicon.svg'
// import mailicon from '../assets/svgs/emailicon.svg'
// import {AiOutlineBars} from 'react-icons/ai'


// import { Link } from 'react-router-dom';



const Main = () => {

// const OverlayMenuRef = useRef()

// function openOverlayMenu (e) {
//   const  myClickedplace = e.target
//   if(myClickedplace.classList.contains('bars-icon')){
//     OverlayMenuRef.current.classList.add('aktiv')
//   }

//   if (myClickedplace.classList.contains('cross-icon')){
//     alert='micds'
//   }
// }

// function closeOverlayMenu (e) {
//   const  myClickedplace = e.target
  

//   if(myClickedplace.classList.contains('cross-icon')){
//     OverlayMenuRef.current.classList.remove('aktiv')
//   }
// }

  return (
    
    <> 


    
<div className="container "  >
  
    


     


  
  

    <div className='introsection ' data-aos="zoom-in" data-aos-duration="1500" >
     <div className="intro-left-side " >
      <div className="left-container"  >
            < img src={linepic}  className='linepic' />
     <Typed
     className='typing   left-side-typing ' 
                strings={[
                    
                    'Biz Sertifikatlı Hüquq Peşəkarları Qrupuyuq    '  ]}
                    typeSpeed={40}
                    backSpeed={50}
                   
                    >
        
                </Typed>

                <p className='description' >biz saysız-hesabsız dəniz işçilərinə və onların ailələrinə ən böyük ofşor şirkətlərə qarşı çıxmağa və qalib gəlməyə kömək etdik.</p>
                   <div className="git-button">
                    <button className='git' >Bizimlə Əlaqə</button>
                   </div>
                
      </div>
    
     </div>

     <div className="intro-right-side col-12 col-md-6 ">
        <img src={mypic} className='right-pic' />
       
     </div>

    </div>
</div>

    
    </>
  )
}

export default Main