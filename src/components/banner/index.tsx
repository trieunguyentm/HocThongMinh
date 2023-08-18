import React from 'react'
import './styles.scss'

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <img
        className="img-responsive"
        alt="banner website"
        src="https://hocthongminh.com/_next/image/?url=%2Fimages%2Fbanner%2Fbanner6.jpg&w=1920&q=90"
      />
    </div>
  )
}

export default Banner