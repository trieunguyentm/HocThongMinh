import { Grid } from '@mui/material';
import '../../styles/knowledge_view/KnowledgeView.css'
import CardKnowledgeView from './CardKnowledgeView';
// import AnimationsZoom from '../../animations/AnimationsZoom'

export default function KnowledgeView() {
    const arrLinkImg = [
        "https://blog.hocthongminh.com/wp-content/uploads/2023/06/Dac-trung-cac-the-tho-chinh-va-su-hinh-thanh-1.jpg",
        "https://blog.hocthongminh.com/wp-content/uploads/2023/06/Nhung-cot-moc-dang-nho-nhat-2.jpg",
        "https://blog.hocthongminh.com/wp-content/uploads/2023/06/Ngu-phap-thi-Toeic-4.png",
        "https://blog.hocthongminh.com/wp-content/uploads/2023/06/travel-guide-2.png"
    ];
    const arrTitle = [
        "Ngữ văn 12: Luật thơ – Đặc trưng, các thể thơ chính và sự hình thành luật thơ",
        "Lịch sử 11: Lý thuyết và các dạng bài tập củng cố kiến thức lịch sử Trung Quốc",
        "Công thức, dấu hiệu nhận biết và bài tập thì tương lai hoàn thành (Future Perfect)",
        "Lịch sử 11:  Những dấu mốc đáng nhớ của lịch sử Nhật Bản",
    ];
    const arrContent = [
        "Luật thơ trong ngữ văn là một khía cạnh quan trọng, nó không chỉ tạo nên sự hài hòa âm vận trong các tác phẩm thơ, mà còn góp phần định hình và phát triển các thể thơ chính. Đồng thời đây cũng là phần nội dung kiến thức nằm trong chương trình thi THPT …",
        "Vào những năm cuối của thế kỷ XX, châu Á có những biến đổi lớn. Trong đó, Trung Quốc – một quốc gia rộng lớn, có nền văn hóa lâu đời cũng không thoát khỏi thân phận thuộc địa. Để hiểu rõ đất nước này đã bị các nước đế quốc xâm lược như thế …",
        "Thì tương lai hoàn thành không được dùng phổ biến trong thực tế như các thì khác. Tuy nhiên nó lại được coi là phần ngữ pháp khó nhằn trong các đề thi, đặc biệt có thể xuất hiện ở kỳ thi THPT quốc gia. Vậy hôm nay bạn hãy cùng Học Thông Minh chinh …",
        "Nhật Bản là một trong những quốc gia có nền văn hóa – khoa học – công nghệ tiên tiến hàng đầu thế giới. Tuy nhiên tiến trình lịch sử hình thành và phát triển văn hóa sự kiện của quốc gia này vẫn còn nhiều sự thật thú vị. Để nắm rõ hơn về …",
    ];

    return (
        <div className="knowledge-view">
            <div className='knowledge-view-content'>

                <div className="knowledge-view-title" id='knowlegde-view-title'>
                    {/* <AnimationsZoom elementID="title-knowledge"> */}
                    <h1 id="title-knowledge">Kiến thức hay</h1>
                    {/* </AnimationsZoom> */}
                </div>
                <div className='knowledge-view-card-content'>
                    {/* <AnimationsZoom elementID="grid-container-knowledge"> */}
                    <div id="grid-container-knowledge">
                        <Grid
                            container
                            spacing={10}
                            style={{ display: 'flex', justifyContent: 'center' }}
                        >
                            {
                                arrLinkImg.map((linkImg, index) => {
                                    return (
                                        <Grid item xs={12}
                                            sm={12}
                                            md={3}
                                            key={index}
                                        >
                                            <CardKnowledgeView
                                                linkImg={linkImg}
                                                title={arrTitle[index]}
                                                content={arrContent[index]}
                                            />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </div>
                    {/* </AnimationsZoom> */}
                </div>
            </div>
        </div>
    )
}
