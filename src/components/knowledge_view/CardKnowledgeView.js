import { Card, CardMedia } from "@mui/material";
import '../../styles/knowledge_view/CardKnowledgeView.css'

export default function CardKnowledgeView({ linkImg, title, content }) {
    return (
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
    )
}