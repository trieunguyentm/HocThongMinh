import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import CardHomeFeedBack from "./CardHomeFeedBack";
import './styles.scss'
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Autoplay } from "swiper";
// import AnimationsFadeTop from "../../animations/AnimationsFadeTop";

export default function HomeFeedBack() {
  const arrLinkImg =
    [
      "https://hocthongminh.com/images/trungkien.svg",
      "https://hocthongminh.com/images/phuonglinh.svg",
      "https://hocthongminh.com/images/dieuhuong.svg",
      "https://hocthongminh.com/images/maianh.svg",
      "https://hocthongminh.com/images/trungkien.svg",
      "https://hocthongminh.com/images/phuonglinh.svg",
      "https://hocthongminh.com/images/dieuhuong.svg",
      "https://hocthongminh.com/images/maianh.svg",
    ];
  const arrName =
    [
      "Nguyễn Phúc Trung Kiên",
      "Nguyễn Phương Linh",
      "Nguyễn Diệu Hương",
      "Trần Lê Mai Anh",
      "Nguyễn Phúc Trung Kiên",
      "Nguyễn Phương Linh",
      "Nguyễn Diệu Hương",
      "Trần Lê Mai Anh",
    ];
  const arrRating = [5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4,];
  const arrContent =
    [
      "Mình nhận thấy web thực sự hữu ích cho học sinh, giao diện thân thiện, bài tập chi tiết và rõ ràng giúp các con dễ dàng luyện tập.",
      "Trang web có kho đề rất phong phú, đa dạng, giao diện đẹp. Mình thấy luyện tập ở đây giúp việc học dễ dàng, hiệu quả hơn.",
      "Mình thấy web hiệu quả để ôn thi đại học vì cover khá nhiều môn , giao diện cũng dễ nhìn nữa!",
      "Nội dung bài tập rất hữu ích, mình thường xuyên luyện tập trên web tại nhà ❤️",
      "Mình nhận thấy web thực sự hữu ích cho học sinh, giao diện thân thiện, bài tập chi tiết và rõ ràng giúp các con dễ dàng luyện tập.",
      "Trang web có kho đề rất phong phú, đa dạng, giao diện đẹp. Mình thấy luyện tập ở đây giúp việc học dễ dàng, hiệu quả hơn.",
      "Mình thấy web hiệu quả để ôn thi đại học vì cover khá nhiều môn , giao diện cũng dễ nhìn nữa!",
      "Nội dung bài tập rất hữu ích, mình thường xuyên luyện tập trên web tại nhà ❤️",
    ];

  const [hightLightIndex, setHightLightIndex] = useState(0);

  // Sử dụng useMediaQuery để kiểm tra kích thước màn hình
  const isSmallScreen = useMediaQuery('(max-width: 750px)');
  // Số slide trên 1 view
  const slidesPerView = isSmallScreen ? 1 : 3;

  return (
    <div className="home-feedback">
      {/* <AnimationsFadeTop elementID={"home-feedback-title"}> */}
      <div data-aos="zoom-in" data-aos-duration="1500">
        <h1 style={{ textAlign: "center" }} id="home-feedback-title">Mọi người nghĩ gì về chúng tôi</h1>
      </div>
      {/* </AnimationsFadeTop> */}
      <div className="home-feedback-slide" style={{ height: '100%' }}>
        <Swiper
          style={{ height: '100%' }}
          slidesPerView={slidesPerView}
          spaceBetween={10}
          loop={true}
          onRealIndexChange={(swiper) => {
            // console.log(swiper.realIndex);
            setHightLightIndex(swiper.realIndex);
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <CardHomeFeedBack
              linkImg={arrLinkImg[0]}
              name={arrName[0]}
              rating={arrRating[0]}
              content={arrContent[0]}
              hightLight={!isSmallScreen ? (hightLightIndex === 7) : (hightLightIndex === 0)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardHomeFeedBack
              linkImg={arrLinkImg[1]}
              name={arrName[1]}
              rating={arrRating[1]}
              content={arrContent[1]}
              hightLight={!isSmallScreen ? (hightLightIndex === 0) : (hightLightIndex === 1)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardHomeFeedBack
              linkImg={arrLinkImg[2]}
              name={arrName[2]}
              rating={arrRating[2]}
              content={arrContent[2]}
              hightLight={!isSmallScreen ? (hightLightIndex === 1) : (hightLightIndex === 2)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardHomeFeedBack
              linkImg={arrLinkImg[3]}
              name={arrName[3]}
              rating={arrRating[3]}
              content={arrContent[3]}
              hightLight={!isSmallScreen ? (hightLightIndex === 2) : (hightLightIndex === 3)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardHomeFeedBack
              linkImg={arrLinkImg[4]}
              name={arrName[4]}
              rating={arrRating[4]}
              content={arrContent[4]}
              hightLight={!isSmallScreen ? (hightLightIndex === 3) : (hightLightIndex === 4)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardHomeFeedBack
              linkImg={arrLinkImg[5]}
              name={arrName[5]}
              rating={arrRating[5]}
              content={arrContent[5]}
              hightLight={!isSmallScreen ? (hightLightIndex === 4) : (hightLightIndex === 5)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardHomeFeedBack
              linkImg={arrLinkImg[6]}
              name={arrName[6]}
              rating={arrRating[6]}
              content={arrContent[6]}
              hightLight={!isSmallScreen ? (hightLightIndex === 5) : (hightLightIndex === 6)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardHomeFeedBack
              linkImg={arrLinkImg[7]}
              name={arrName[7]}
              rating={arrRating[7]}
              content={arrContent[7]}
              hightLight={!isSmallScreen ? (hightLightIndex === 6) : (hightLightIndex === 7)}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}