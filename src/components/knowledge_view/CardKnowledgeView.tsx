import React from 'react'
import { Card, CardMedia } from "@mui/material";
import './styles.scss'

interface CardKnowledgeViewProps {
  linkImg: string;
  title: string;
  content: string;
}
const CardKnowledgeView: React.FC<CardKnowledgeViewProps> = ({ linkImg, title, content }) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1500">
      <Card className="card-knowledge">
        <div className="card-knowledge-view" style={{ width: '100%' }}>
          <CardMedia
            className="card-media-knowledge"
            component="img"
            alt="card"
            height="150"
            image={`${linkImg}`}
          />
          <div className="card-knowledge-title">
            {title}
          </div>
          <p className="card-knowledge-content">
            {content}
          </p>
        </div>
      </Card>
    </div>
  )
}

export default CardKnowledgeView;