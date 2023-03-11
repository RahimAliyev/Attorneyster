import React from 'react'
import '../components/footer.css'
import leftlogo from '.././assets/Footer-svg/Left-logo.svg'
import centerlogo from '.././assets/Footer-svg/center.svg'
import rightlogo from '.././assets/Footer-svg/right.svg'
import twitter from '.././assets/Footer-svg/Twitter.svg'
import instagram from '.././assets/Footer-svg/Instagram.svg'
import facebook from '.././assets/Footer-svg/Facebook.svg'
import pinterest from '.././assets/Footer-svg/Pinterest.svg'
import footerImage from '.././assets/Footer-svg/footer-image.svg'

const Footer = () => {
  return (
    <>


        

        <div className="footer-container">
            <div className="footer-container-image">
                <img src={footerImage} alt="" />
            </div>
                 <div className="flex-footer">
            <div className="top-footer">
            <div className="left-side-logo">
             <img src={leftlogo} alt="" />
            </div>
            <div className="center-logo">
             <img src={centerlogo} alt="" />
               
            </div>
            <div className="right-side-logo">
             <img src={rightlogo} alt="" />
                
            </div>
        </div>
           <div className="center-footer">
            <div className="center-left">
               <div className="top-links  top-link-width">
               <article>Sürətli keçid</article>
               </div>

               <div className="left-center">
                <div className="top-down-left">
                        
                      <a href="">Ana Səhifə</a>
                      <a href="">Haqqqımızda</a>
                      <a href="">Qiymətlər</a>
                      <a href="">xarakteristika</a>
                      <a href="">Bizimlə Əlaqə </a>
                      

               </div>
               <div className="top-down-right">
               <a href="">Blog</a>
                      <a href="">Blog tək</a>
                      <a href="">Davalar</a>
                      <a href="">Davalar Tək</a>
                      <a href="">Təcrübə Sahələri</a>
                      

               </div>
               </div>

               
            </div>

            <div className="center-middle">
                <div className="top-side-left">
                    <div className="top-links">
                       <article>Utility Səhifələr</article> 
                    </div>
                
                     <div className="top-down-left">
                     <a href="">Stil bələdçisi</a>
                      <a href="">Lisenziya</a>
                      <a href="">Qorunur</a>
                      <a href="">Dəyişikliklər jurnalı</a>
                      <a href="">Xeta Səhifəsi</a>

                     </div>
                </div>

                <div className="top-side-right">
                  <div className="top-links">
                    <article>Təcrübə sahəsi</article>
                  </div>
                
                    <div className="top-down-right">
                    
                      <a href="">Biznes qanunu</a>
                      <a href="">Tikinti qanunu</a>
                      <a href="">Avtomobil Qəzası</a>
                      <a href="">Cinayət hüququ</a>
                      <a href="">Ailə hüququ</a>

                    </div>
                </div>

            </div>

            

            <div className="center-right">
                <div className="top-links  contact-width">
                   <article>Bizimlə əlaqə </article>
                </div>

                <div className="center-locations">
                    <h1>Vəkil Hüquq Bürosu, King Street 121,
                        
                    </h1>
                    <h1 className='LasVegas'>Baku 90027,AZE.</h1>
                </div>

                <div className="center-contact">
                <a href="">Tel: (011) 9876 54321</a>
                <div className="mail">
                                    <a href="">Email: info@nümunə.com</a>

                </div>
                </div>

            </div>
           </div>
           <div className="bottom-footer">
            <div className="all-sides">
                <div className="left-footer">
              <small className='copy'>Müəlliflik hüququ © Vəkil Hüququ | ViktorFlow</small>
              <p className='designed' >Tərəfindən hazırlanmış</p> 
              <small className='powered'>-</small>
              <p>Rahim Aliyev</p>
              
            </div>
                <div className="right-footer">
                <p>Bizi İzləyin :</p>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={pinterest} alt="" />
                
            </div>
            </div>
           
            

           </div>
            </div>
            
           

        </div>


    </>
  )
}

export default Footer