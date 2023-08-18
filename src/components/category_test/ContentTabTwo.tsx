import React from "react"
import { Grid } from "@mui/material"
import CategoryTestLink from "./CategoryTestLink"

const ContentTabTwo: React.FC = () => {
  const arrName: string[] = ["Tiếng Anh", "Toán", "Vật Lý",
    "Hóa Học", "Sinh Học", "Lịch Sử",
    "Địa Lý", "Ngữ Văn", "Giáo Dục Công Dân"];

  return (
    <>
      <div data-aos="zoom-in-up" data-aos-duration="1500">
        <p id="category-information-2">Luyện thi THPT QG các môn Toán, Lý, Hóa, Sinh, Sử, Địa, Giáo Dục Công Dân, Tiếng Anh với đề thi chọn lọc từ các trường và những dạng bài thi bám sát với chương trình thi đại học.</p>
      </div>
      <Grid container spacing={2}>
        {
          arrName.map((itemArr: string, indexArr: number) => {
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

export default ContentTabTwo