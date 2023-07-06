import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import '../../styles/category_course/CardCourse.css'

export default function CardCourse({ altImg, linkImg, describe, index }) {
    const colorImg = ["#009D9D",
        "rgb(85, 187, 126)",
        "rgb(245, 183, 61)",
        "rgb(245, 133, 81)",
        "rgb(61, 179, 218)",
        "rgb(142, 145, 229)",
        "rgb(218, 135, 145)"
    ];

    return (
        <div data-aos="zoom-in-up" data-aos-duration="1500">
            <Card sx={{ maxWidth: 250 }} className="card-course-zoom">
                <CardMedia
                    component="img"
                    alt={`${altImg}`}
                    height="130"
                    image={`${linkImg}`}
                />
                <CardContent>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className="card-course-description"
                    >
                        {describe}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        id={`btn-course-${index}`}
                        size="small"
                        variant="outlined"
                        style={{ border: `1px solid ${colorImg[index - 6]}` }}
                        endIcon={<KeyboardArrowRightIcon id={`icon-${index}`} style={{ color: colorImg[index - 6], fontWeight: "bold" }} />}
                    >
                        <p id={`text-${index}`} style={{ color: colorImg[index - 6], fontWeight: "bold" }}>LUYỆN NGAY</p>
                    </Button>
                </CardActions >
            </Card >
        </div>
    )
}