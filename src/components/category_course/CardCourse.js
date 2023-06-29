import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import '../../styles/category_course/CardCourse.css'

export default function CardCourse({ altImg, linkImg, describe, index }) {
    const colorImg = ["#009D9D", "rgb(85, 187, 126)", "rgb(245, 183, 61)", "rgb(245, 133, 81)"];
    return (
        <>
            <Card sx={{ maxWidth: 250 }}>
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
        </>
    )
}