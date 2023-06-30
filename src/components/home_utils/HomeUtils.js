import AnimationsZoom from '../../animations/AnimationsZoom'
import '../../styles/home_utils/HomeUtils.css'
import SwiperHomeUtils from './SwiperHomeUtils'

export default function HomeUtils() {
    return (
        <div className="home-utils">
            <AnimationsZoom elementID={"home-utils-obj"}>
                <div id="home-utils-obj">
                    <div className="home-utils-title">Lợi ích</div>
                    <div className="home-utils-title-temp">Phương pháp phát triển khả năng tự học của Học Thông Minh</div>
                </div>
            </AnimationsZoom>

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