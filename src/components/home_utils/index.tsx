import React from 'react'
import './styles.css'
import SwiperHomeUtils from './SwiperHomeUtils'

const HomeUtils: React.FC = () => {
  return (
    <div className="home-utils">
      <div id="home-utils-obj" data-aos="zoom-in" data-aos-duration="1500">
        <div className="home-utils-title">Lợi ích</div>
        <div className="home-utils-title-temp">Phương pháp phát triển khả năng tự học của Học Thông Minh</div>
      </div>

      <div className="home-utils-body">
        <div className='home-utils-image' >
          <img
            alt='phone_image'
            src='https://hocthongminh.com/_next/image/?url=%2Fimages%2Fphone-wrapper.png&w=1920&q=75'
          />
        </div>
      </div>
      <SwiperHomeUtils />
    </div>
  )
}

export default HomeUtils