import { Grid } from '@mui/material'
import '../../styles/home_base/HomeBase.css'
import AnimationsZoom from '../../animations/AnimationsZoom'

export default function HomeBase() {
    return (
        <>

            <div className="home-base" id="home-base">
                <AnimationsZoom elementID={"home-base"}>
                    <h1>Nền tảng Học Thông Minh có gì?</h1>
                </AnimationsZoom>

                <div className="infor-home-base">
                    <Grid
                        container
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Grid item md={4} sm={4} xs={12} className='item-infor-home-base'>
                            <div style={{ fontSize: '64px', fontWeight: 700 }}>
                                100K+
                            </div>
                            <div style={{ fontSize: '20px', fontWeight: 600 }}>
                                Học Viên
                            </div>
                        </Grid>
                        <Grid item md={4} sm={4} xs={12} className='item-infor-home-base'>
                            <div style={{ fontSize: '64px', fontWeight: 700 }}>
                                150K+
                            </div>
                            <div style={{ fontSize: '20px', fontWeight: 600 }}>
                                Câu hỏi trắc nghiệm
                            </div>
                        </Grid>
                        <Grid item md={4} sm={4} xs={12} className='item-infor-home-base'>
                            <div style={{ fontSize: '64px', fontWeight: 700 }}>
                                3000+
                            </div>
                            <div style={{ fontSize: '20px', fontWeight: 600 }}>
                                Đề luyện thi
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}