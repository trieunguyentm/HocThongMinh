import './styles.css'

export default function CardHomeUtils({ srcImg, text }) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
            }}
        >
            <div className='container-card-home-utils' style={{ width: '50%' }}>
                <div className='container-img-home-utils'>
                    <div className='div-img-home-utils'>
                        <img
                            alt="img-card-home-utils"
                            src={srcImg}
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
                <div className='container-text-home-utils'>
                    <div className='div-text-home-utils'>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}