import { Button } from '@mui/material'
import '../../styles/appbar_header/AppBar.css'

export default function AppBar() {
    return (
        <div className="appbar-header">
            <div className="left-appbar-header">
                <img className="logo" alt="Logo" src="https://hocthongminh.com/images/logo.svg"></img>
            </div>
            <div className="right-appbar-header">
                <Button className="button-appbar-header" variant="contained" size="small">Đăng nhập</Button>
                <Button className="button-appbar-header" variant="contained" size="small">Đăng ký</Button>
            </div>
        </div>

    )
}