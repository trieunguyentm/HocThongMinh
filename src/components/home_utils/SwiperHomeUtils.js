import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/swiper-bundle.css';
// import required modules
import { Autoplay } from 'swiper';
import CardHomeUtils from './CardHomeUtils';
import { useMediaQuery } from '@mui/material';
// import required modules

const SwiperHomeUtils = () => {
    const arrImg = [
        "https://hocthongminh.com/_next/image/?url=%2Fimages%2Fhome-utils%2Fimage-2.png&w=1920&q=75",
        "https://hocthongminh.com/_next/image/?url=%2Fimages%2Fhome-utils%2Fimage-3.png&w=1920&q=75",
        "https://hocthongminh.com/_next/image/?url=%2Fimages%2Fhome-utils%2Fimage-4.png&w=1920&q=75",
        "https://hocthongminh.com/_next/image/?url=%2Fimages%2Fhome-utils%2Fimage-1.png&w=1920&q=75",
        "https://hocthongminh.com/_next/image/?url=%2Fimages%2Fhome-utils%2Fimage-2.png&w=1920&q=75",
        "https://hocthongminh.com/_next/image/?url=%2Fimages%2Fhome-utils%2Fimage-3.png&w=1920&q=75",
    ];

    const arrText = [
        "Mục tiêu học tập rõ ràng với các chủ đề đã được tổng hợp sẵn từ chương trình học mới nhất",
        "Rèn luyện tư duy với các bài kiểm tra trắc nghiệm online",
        "Chủ động lập kế hoạch học tập hợp lý khi biết điểm mạnh yếu qua từng bài thi",
        "Học từ những sai lầm với những gợi ý thống kê quá trình học chi tiết",
        "Mục tiêu học tập rõ ràng với các chủ đề đã được tổng hợp sẵn từ chương trình học mới nhất",
        "Rèn luyện tư duy với các bài kiểm tra trắc nghiệm online",
    ]

    // Sử dụng useMediaQuery để kiểm tra kích thước màn hình
    const isSmallScreen = useMediaQuery('(max-width: 750px)');

    // Đặt số slide hiển thị tương ứng với kích thước màn hình
    const slidesPerView = isSmallScreen ? 1 : 3;

    return (
        <div
            className="swiper-home-utils"
            style={{ position: 'relative', top: '-360px' }}
        >
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                {
                    arrImg.map((itemArrImg, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <CardHomeUtils
                                    srcImg={itemArrImg}
                                    text={arrText[index]}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>

    );
}

export default SwiperHomeUtils;
