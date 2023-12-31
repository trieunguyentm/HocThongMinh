import React from "react";
import { CardContent, CardMedia, Rating, Typography } from "@mui/material";
import './styles.scss'

interface CardHomeFeedBackProps {
  linkImg: string,
  name: string,
  rating: number,
  content: string,
  hightLight: boolean
}

const CardHomeFeedBack: React.FC<CardHomeFeedBackProps> = ({ linkImg, name, rating, content, hightLight }) => {
  return (
    <div className="container-card-home-feedback" style={{ scale: `${hightLight ? "1.06" : "0.9"}` }}>
      <div style={{ height: '100%' }} className="card-home-feedback">
        {
          hightLight &&
          (
            <div className="card-icon-home-feedback">
              <img
                alt="icon"
                src="https://hocthongminh.com/images/active-feedback.svg"
              />
            </div>
          )
        }
        <div className="card-media-home-feedback" style={{ height: '100%' }}>
          <CardMedia
            sx={{ height: 80, width: 80 }}
            image={linkImg}
          />
        </div>
        <div className="card-name-home-feedback">
          {name}
        </div>
        <div className="card-rating-home-feedback">
          <Rating name="read-only" value={rating} readOnly style={{ border: '1px solid black', borderRadius: '30px' }} />
        </div>
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            className="card-content-home-feedback"
          >
            {content}
          </Typography>
        </CardContent>
      </div>
    </div >
  )
}

export default CardHomeFeedBack