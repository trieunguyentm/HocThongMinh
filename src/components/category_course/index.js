import { Grid } from "@mui/material";
import CardCourse from "./CardCourse";
import TitleCategory from "./TitleCategory";
import './styles.scss';
// import { styled } from '@mui/system';
// import { useEffect, useState } from "react";

// Sử dụng styled-components để tạo styled component
// const AnimatedComponent = styled('div')`
//   opacity: ${(props) => props.opacity} !important;
//   transform: scale(${(props) => props.opacity}) !important;
//   transition: opacity 1.0s ease-in-out, transform 1.0s ease-in-out !important;
// `;

export default function CategoryCourse() {
    // THCS
    const arrAltImgTHCS = ["Lớp 6", "Lớp 7", "Lớp 8", "Lớp 9"];
    const arrLinkImgTHCS = ["https://hocthongminh.com/_next/image/?url=%2Fimages%2FclassNumber%2Flop-6.png&w=1920&q=90",
        "https://hocthongminh.com/_next/image/?url=%2Fimages%2FclassNumber%2Flop-7.png&w=1920&q=90",
        "https://hocthongminh.com/_next/image/?url=%2Fimages%2FclassNumber%2Flop-8.png&w=1920&q=90",
        "https://hocthongminh.com/_next/image/?url=%2Fimages%2FclassNumber%2Flop-9.png&w=1920&q=90"];
    const arrDescribeTHCS = ["Tổng hợp tài liệu các môn Toán, Văn, Tiếng Anh, Lịch Sử,... đầy đủ và chi tiết nhất theo chương trình học lớp 6 và các đề thi học kỳ 1, học kỳ 2 kèm theo lời giải chi tiết.",
        "Làm bài tập trắc nghiệm các môn học bám sát với chương trình giảng dạy trên lớp của thầy cô để các em chủ động nắm rõ toàn bộ nội dung kiến thức trên lớp",
        "Làm bài tập các môn Toán, Hóa, Sinh, Địa, Sử,... theo chương trình lớp 8 mới nhất dưới hình thức trắc nghiệm. Các em có thể luyện đề kiểm tra, đề thi học kỳ 1, học kỳ 2 ngay tại trang web Học Thông Minh",
        "Luyện tập các câu hỏi trắc nghiệm về những môn học như Toán, Văn, Anh, Sinh,... theo chương trình giảng dạy trên tường và forrm đề thi giữa kỳ, học kỳ với đáp án chitiết."];
    const arrIndexTHCS = [6, 7, 8, 9];
    // const [opacityTHCS, setOpacityTHCS] = useState(0);
    // THPT
    const arrAltImgTHPT = ["Lớp 10", "Lớp 11", "Lớp 12"];
    const arrLinkImgTHPT = ["https://hocthongminh.com/_next/image/?url=%2Fimages%2FclassNumber%2Flop-10.png&w=1920&q=90",
        "https://hocthongminh.com/_next/image/?url=%2Fimages%2FclassNumber%2Flop-11.png&w=1920&q=90",
        "https://hocthongminh.com/_next/image/?url=%2Fimages%2FclassNumber%2Flop-12.png&w=1920&q=90"];
    const arrDescribeTHPT = ["Học online các môn Toán, Lý, Hóa, Sinh, Lịch sử, GDCD, Địa Lý, Văn, Tiếng Anh theo chương trình lớp 10 mới nhất dưới hình thức trắc nghiệm. Các em có thể học, luyện theo chương trình học của bộ GDDT và làm các bài kiểm tra học kỳ 1, học kỳ 2 ngay trên website Học Thông Minh",
        "Luyện tập các môn Toán, Lý, Hóa, Sinh, Sử, Địa, GDCD, Tiếng Anh, Văn theo chương trình học lớp 11 và các đề thi học kỳ 1, học kỳ 2 với chấm điểm và lời giải chi tiết cho các em dễ dàng nắm vững kiến thức của các môn học lớp 11.",
        "Luyện tập các môn Toán, Lý, Hóa, Sinh, Sử, Địa, GDCD, Tiếng Anh, Văn theo chương trình học lớp 12 và các đề thi học kỳ 1, học kỳ 2 với chấm điểm và lời giải chi tiết. Các bài kiểm tra và chương trình cũng hướng tới các dạng của đề thi đại học cho các em dễ dàng nắm vững kiến thức cũng như mục tiêu và chủ đề của đề thi THPT các môn."];
    const arrIndexTHPT = [10, 11, 12];
    // const [opacityTHPT, setOpacityTHPT] = useState(0);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const element = document.getElementById('course-THCS');
    //         const rect = element.getBoundingClientRect();
    //         const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    //         if (isVisible) {
    //             setOpacityTHCS(1);
    //         } else {
    //             setOpacityTHCS(0);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);


    // useEffect(() => {
    //     const handleScroll = () => {
    //         const element = document.getElementById('course-THPT');
    //         const rect = element.getBoundingClientRect();
    //         const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    //         if (isVisible) {
    //             setOpacityTHPT(1);
    //         } else {
    //             setOpacityTHPT(0);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <div className="category-course">
            <TitleCategory />
            <div style={{ margin: "30px" }}>
                <h1>Khối THCS</h1>
                {/* <AnimatedComponent id="course-THCS" opacity={opacityTHCS}> */}
                <Grid container spacing={1} className="grid-container-course">
                    {
                        arrIndexTHCS.map((itemArr, indexArr) => {
                            return (
                                <Grid item xs={6} sm={6} md={3} key={itemArr}>
                                    <CardCourse
                                        altImg={arrAltImgTHCS[itemArr - 6]}
                                        linkImg={arrLinkImgTHCS[itemArr - 6]}
                                        describe={arrDescribeTHCS[itemArr - 6]}
                                        index={itemArr}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
                {/* </AnimatedComponent> */}
            </div>

            <div style={{ margin: "30px" }}>
                <h1>Khối THPT</h1>
                <Grid container spacing={1} className="grid-container-course">
                    {
                        arrIndexTHPT.map((itemArr, indexArr) => {
                            return (
                                <Grid item xs={6} sm={6} md={3} key={itemArr}>
                                    <CardCourse
                                        altImg={arrAltImgTHPT[itemArr - 10]}
                                        linkImg={arrLinkImgTHPT[itemArr - 10]}
                                        describe={arrDescribeTHPT[itemArr - 10]}
                                        index={itemArr}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        </div >
    )
}
