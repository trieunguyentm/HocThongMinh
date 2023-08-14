import { Grid } from "@mui/material";
import CategoryTestLink from "./CategoryTestLink";

export default function ContentTabOne() {
  const arrName = ["Đề Thi ĐGNL ĐHQG Hà Nội",
    "Đề Thi ĐGNL ĐHQG Hồ Chí Minh",
    "Đề thi ĐGNL ĐHSP Hà Nội",
    "Đề Thi ĐGTD Bách Khoa",
    "Đề Thi ĐGNL Bộ Công An"];

  return (
    <>
      {/* <AnimationsZoom elementID={"category-information-1"}> */}
      <div data-aos="zoom-in-up" data-aos-duration="1500">
        <p id="category-information-1">Tổng hợp mẫu các dạng đề thi đánh giá năng lực dưới dạng trắc nghiệm online của các trường với ngân hàng câu hỏi và đề thi lớn giúp bạn chuẩn bị tốt cho kì thi ĐGNL.</p>
      </div>
      {/* </AnimationsZoom> */}
      <Grid container spacing={2}>
        {
          arrName.map((itemArr, indexArr) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={indexArr}>
                <CategoryTestLink
                  name={itemArr}
                />
              </Grid>
            )
          })
        }
      </Grid>
    </>
  )
}