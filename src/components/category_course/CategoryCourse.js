import { Grid } from "@mui/material";
import CardCourse from "./CardCourse";
import TitleCategory from "./TitleCategory";

export default function CategoryCourse() {
    const arrAltImg = ["Lớp 6", "Lớp 7", "Lớp 8", "Lớp 9"];
    const arrLinkImg = ["https://hocthongminh.com/_next/image/?url=%2Fimages%2FclassNumber%2Flop-6.png&w=1920&q=90",
        "https://hocthongminh.com/_next/image/?url=%2Fimages%2FclassNumber%2Flop-7.png&w=1920&q=90",
        "https://hocthongminh.com/_next/image/?url=%2Fimages%2FclassNumber%2Flop-8.png&w=1920&q=90",
        "https://hocthongminh.com/_next/image/?url=%2Fimages%2FclassNumber%2Flop-9.png&w=1920&q=90"];
    const arrDescribe = ["Tổng hợp tài liệu các môn Toán, Văn, Tiếng Anh, Lịch Sử,... đầy đủ và chi tiết nhất theo chương trình học lớp 6 và các đề thi học kỳ 1, học kỳ 2 kèm theo lời giải chi tiết.",
        "Làm bài tập trắc nghiệm các môn học bám sát với chương trình giảng dạy trên lớp của thầy cô để các em chủ động nắm rõ toàn bộ nội dung kiến thức trên lớp",
        "Làm bài tập các môn Toán, Hóa, Sinh, Địa, Sử,... theo chương trình lớp 8 mới nhất dưới hình thức trắc nghiệm. Các em có thể luyện đề kiểm tra, đề thi học kỳ 1, học kỳ 2 ngay tại trang web Học Thông Minh",
        "Luyện tập các câu hỏi trắc nghiệm về những môn học như Toán, Văn, Anh, Sinh,... theo chương trình giảng dạy trên tường và forrm đề thi giữa kỳ, học kỳ với đáp án chi tiết."];
    const arrIndex = [6, 7, 8, 9];

    return (
        <div>
            <TitleCategory />
            <div style={{ margin: "30px" }}>
                <h1>Khối THCS</h1>
                <Grid container spacing={2}>
                    {
                        arrIndex.map((itemArr, indexArr) => {
                            return (
                                <Grid item xs={6} sm={6} md={3}>
                                    <CardCourse
                                        altImg={arrAltImg[itemArr - 6]}
                                        linkImg={arrLinkImg[itemArr - 6]}
                                        describe={arrDescribe[itemArr - 6]}
                                        index={itemArr}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        </div>
    )
}