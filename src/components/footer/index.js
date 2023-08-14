import './styles.scss'
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-hocthongminh">
        <div className="logo-hocthongminh">
          <img
            id='logo-hocthongminh'
            alt='logo-hocthongminh'
            src='https://hocthongminh.com/images/logo.svg'
          />
        </div>
        <div className="diachi-hocthongminh">
          <span>
            <PlaceIcon />&nbsp;Tầng 3, Lô NT KĐT mới Phùng Khoang, Phường Trung Văn, Quận Nam Từ Liêm, Hà Nội
          </span>
        </div>
        <div className="coquanchuquan-hocthongminh">
          &nbsp;Cơ quan chủ quản: Công ty Cổ phần Đầu tư và Phát triển Koolsoft
        </div>
        <div className="hotro-hocthongminh">
          <span>
            <EmailIcon />&nbsp;hotro.hocthongminh@gmail.com
          </span>
        </div>
      </div>
      <div className="info-hocthongminh">
        <div className='vechungtoi-hocthongminh'>
          <div style={{
            fontWeight: '500',
            fontSize: '20px',
            textDecoration: 'underline',
            marginBottom: '15px',
          }}>
            Về chúng tôi
          </div>
          <div>
            Giới thiệu
          </div>
          <div>
            Liên hệ
          </div>
        </div>
        <div className='chinhsach-hocthongminh'>
          <div style={{
            fontWeight: '500',
            fontSize: '20px',
            textDecoration: 'underline',
            marginBottom: '15px'
          }}>
            Chính sách
          </div>
          <div>
            Điều khoản sử dụng
          </div>
          <div>
            Chính sách bảo mật
          </div>
        </div>
        <div className='thongtin-hocthongminh'>
          <div style={{
            fontWeight: '500',
            fontSize: '20px',
            textDecoration: 'underline',
            marginBottom: '15px'
          }}>
            Thông tin
          </div>
          <div>
            Chia sẻ kiến thức
          </div>
          <div>
            Tin tức
          </div>
          <div>
            Tính điểm xét tốt nghiệp
          </div>
          <div>
            Tính điểm xét học bạ
          </div>
        </div>
      </div>
      <div className="ketnoi-hocthongminh">
        <div style={{ fontWeight: '500', fontSize: '16px' }}>
          Kết nối với Hocthongminh
        </div>
        <div style={{ display: 'flex' }}>
          <span className='icon-hocthongminh'>
            <a href='https://www.facebook.com/giao.duc.hocthongminh'>
              <img
                style={{ width: '30px', objectFit: 'cover' }}
                src='https://hocthongminh.com/images/facebook.svg'
                alt='fb-hocthongminh' />
            </a>
            <a href='https://www.youtube.com/channel/UChUj1IVarPSb1d7cFsx_r4w'>
              <img
                style={{ width: '30px', objectFit: 'cover' }}
                src='https://hocthongminh.com/images/social/youtube.svg'
                alt='ytb-hocthongminh' />
            </a>
            <a href='https://twitter.com/i/flow/login?redirect_after_login=%2Fhocthongminh'>
              <img
                style={{ width: '30px', objectFit: 'cover' }}
                src='https://hocthongminh.com/images/social/twitter.svg'
                alt='twitter-hocthongminh' />
            </a>
            <a href='https://www.pinterest.com/hocthongminh/'>
              <img
                style={{ width: '30px', objectFit: 'cover' }}
                src='https://hocthongminh.com/images/social/pinterest.svg'
                alt='printest-hocthongminh' />
            </a>
            <a href='https://www.tiktok.com/@hocthongminh.com'>
              <img
                style={{ width: '30px', objectFit: 'cover' }}
                src='https://hocthongminh.com/_next/image/?url=%2Fimages%2Fsocial%2Ftiktok.png&w=32&q=75'
                alt='tiktok-hocthongminh' />
            </a>
          </span>
        </div>
      </div>
    </div >
  )
}