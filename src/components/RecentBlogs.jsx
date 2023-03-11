import React from 'react'
import '../components/Recentblog.css'
import leftlogo from '../assets/Recentsvg/recent-left.svg'
import toplogo from '../assets/Recentsvg/Recent-top.svg'
const RecentBlogs = () => {
  return (
    <>
    <div className="Recents-blog">
        <div className="recent-blog-container">
            <div className="recent-top" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <h1>Son Bloqlar</h1>
            <img src={toplogo} alt="" />
            </div>
            <div className="recent-bottom">
                <div className="recent-left" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                    <img src={leftlogo} alt="" />

                </div>
                <div className="recent-right" >
                    <div className="recent-up">
                        <p>Korporativ hüquq | Cümə, 4 fevral 2022</p>

                    </div>
                    <div className="recent-center">
                        <h1>Məlumat və Hüquqi Məsləhət <br /> Arasındakı Fərq</h1>
                        <small>Top meydançasının əlavə dəyərini müəyyən etmək üçün aşağı asılmış meyvələr üzərində əməkdaşlıq <br />
                          beta matrisinə fəaliyyət rəqəmsalı iqtisadi cəhətdən sınaqdan keçir.</small>

                    </div>

                    <div className="recent-down" >
                        <a href="#">Ətraflı Baxın</a>

                    </div>

                </div>
            
            
            </div>

        </div>
    </div>

    </>
  )
}

export default RecentBlogs