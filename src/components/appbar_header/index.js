import { Button } from '@mui/material'
import './styles.scss'

export default function AppBar() {
    return (
        <div className='appbar-header'>
            <div className='appbar-header-container'>
                <div className='appbar-header-nav'>
                    <div className="appbar-header-left">
                        <img className="logo" alt="Logo" src="https://hocthongminh.com/images/logo.svg"></img>
                    </div>
                    <div className='appbar-header-right'>
                        <Button className="button-appbar-header" variant="contained" size="medium">Đăng nhập</Button>
                        <Button className="button-appbar-header" variant="contained" size="medium">Đăng ký</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}