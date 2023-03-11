import React, {useRef} from 'react'
import myAttorney from '../assets/svgs/logo.svg'
import '../components/header.css'
import { useNavigate } from 'react-router-dom'

import icon from '../assets/svgs/callicon.svg'
import mailicon from '../assets/svgs/emailicon.svg'
import {AiOutlineBars} from 'react-icons/ai'


import { Link } from 'react-router-dom';
 
import {RxCross2} from 'react-icons/rx'

function Header() {

  const OverlayMenuRef = useRef()

function openOverlayMenu (e) {
  const  myClickedplace = e.target
  if(myClickedplace.classList.contains('bars-icon')){
    OverlayMenuRef.current.classList.add('aktiv')
  }

  if (myClickedplace.classList.contains('cross-icon')){
    alert='micds'
  }
}

function closeOverlayMenu (e) {
  const  myClickedplace = e.target
  

  if(myClickedplace.classList.contains('cross-icon')){
    OverlayMenuRef.current.classList.remove('aktiv')
  }
}

  const navigate =useNavigate();
  function handleClick (){
    navigate("/Əlaqə")
  }
  const navigasion =useNavigate();
  function klik (){
    navigate("/")
  }
  return (
    <>
    <div className="contains">
        <div className="main  header" >
        <div className="left-side">
         <img src={myAttorney} className='logo-image' onClick={klik} />
        </div>
        <div className="right-side">
        <button onClick={handleClick}  className='BAC'>Konsultasiya sifariş edin</button  >
        </div>
     </div>


     <div className="Navbar" >
<div className='Overlay' ref={OverlayMenuRef} >
      <RxCross2  className='cross-icon ' onClick={closeOverlayMenu}  />
        
        
      
        <div className="nav-links">
         <Link to="/">Ana Səhifə</Link>
         <Link to="Haqqımızda">Haqqımızda</Link>
         <Link to="Səhifələr">Səhifələr</Link>
         <a href='#'>Əlaqə</a>
         <li className="call-icon"  >
          <div className="call">
            <img src={icon} alt="" />
          </div>
                
                <div className="side">
                   <h5>Bizimlə Əlaqə:</h5>
                <a href="tel:">911-987654321</a>
                </div>
               
              </li>
              <li className=" mail-icon"  >
                <div className="mail">
                  <img src={mailicon} alt="" />
                </div>
                
                <div className="side">
                   <h5>Email :</h5>
                <a href="mailto:">yourmail@mail.com</a>
                </div>
               
              </li>
        </div>
          </div>
   <nav className="navbar navbar-expand-lg bg-body-tertiary " data-aos="zoom-in" data-aos-duration="1500">
  <div className="container-fluid">
    
    
    <AiOutlineBars className='bars-icon' onClick={openOverlayMenu}/>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link golden" aria-current="page" to="/">Ana Səhifə</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link white" to="Haqqımızda">Haqqımızda</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link white" to="Səhifələr">Səhifələr</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link white" to="Əlaqə">Əlaqə</Link>
        </li>
        <li className=" call-icon"  >
          <div className="call">
            <img src={icon} alt="" />
          </div>
          
          <div className="side">
             <h5>Bizimlə Əlaqə:</h5>
          <a href="tel:">911-987654321</a>
          </div>
         
        </li>
        <li className=" mail-icon"  >
          <div className="mail">
            <img src={mailicon} alt="" />
          </div>
                
                <div className="side">
                   <h5>Email :</h5>
                <a href="mailto:">yourmail@mail.com</a>
                </div>
               
              </li>
        
        
      </ul>
     
    </div>
  </div>
</nav>


    </div>
    </div>
       
     
    </>
  )
}

export default Header