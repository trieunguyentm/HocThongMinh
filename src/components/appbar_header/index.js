import { Button, Dialog, Divider, IconButton } from '@mui/material'
import './styles.scss'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

export default function AppBar() {
    const [openDialogSignIn, setOpenDialogSignIn] = useState(false);
    const handleCloseDialogSignIn = () => {
        setOpenDialogSignIn(false);
    }

    const handleOpenDialogSignIn = () => {
        setOpenDialogSignIn(true);
    }

    return (
        <>
            <div className='appbar-header'>
                <div className='appbar-header-container'>
                    <div className='appbar-header-nav'>
                        <div className="appbar-header-left">
                            <img className="logo" alt="Logo" src="https://hocthongminh.com/images/logo.svg"></img>
                        </div>
                        <div className='appbar-header-right'>
                            <Button
                                className="button-appbar-header"
                                variant="contained"
                                size="medium"
                                onClick={handleOpenDialogSignIn}
                            >
                                Đăng nhập
                            </Button>
                            <Button className="button-appbar-header" variant="contained" size="medium">Đăng ký</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog
                id="signin"
                open={openDialogSignIn}
                onClose={handleCloseDialogSignIn}
            >
                <div className='signin-form'>
                    <div className='signin-form-content'>
                        <div className='signin-form-content-title'>
                            <div style={{ display: 'block', width: '100%' }}>
                                <div className='signin-form-content-title-close'>
                                    <IconButton
                                        onClick={handleCloseDialogSignIn}
                                        className='btn-signin-close'
                                    >
                                        <CloseIcon style={{ color: '#009D9D' }} />
                                    </IconButton>
                                </div>
                                <div className='signin-form-content-title-signin'>
                                    <p>Đăng nhập</p>
                                </div>
                            </div>
                        </div>
                        <div className='sigin-form-data' style={{ display: 'block' }}>
                            <div className='account-signin'>
                                <div className="account-signin-item">
                                    <img
                                        alt='user'
                                        src='https://hocthongminh.com/_next/image/?url=%2Fimages%2Fapp%2Faccount.png&w=32&q=75'
                                        style={{ width: '23.43px', height: '23.43px' }}
                                    />
                                    <input
                                        id='user'
                                        type='text'
                                        placeholder='Nhập tài khoản'
                                    />
                                </div>
                            </div>
                            <div className='password-signin'>
                                <div className="password-signin-item">
                                    <img
                                        alt='password'
                                        src='https://hocthongminh.com/_next/image/?url=%2Fimages%2Fapp%2Fpassword.png&w=32&q=75'
                                        style={{ width: '23.43px', height: '23.43px' }}
                                    />
                                    <input
                                        id='password'
                                        type='password'
                                        placeholder='Nhập mật khẩu'
                                    />
                                </div>
                            </div>
                            <div className='forget-password'>
                                <div className='forget-password-item'>
                                    <p>Quên mật khẩu</p>
                                </div>
                            </div>
                            <div className='btn-signin-container'>
                                <Button
                                    className='btn-signin'
                                    variant='contained'
                                >
                                    Đăng nhập
                                </Button>
                            </div>
                            <div className='divider-signin'>
                                <Divider>HOẶC</Divider>
                            </div>
                            <div className='btn-signin-container-google'>
                                <Button
                                    className='btn-signin-google'
                                    startIcon={<img src="https://hocthongminh.com/images/icon/google-icon.svg" alt="Google Icon" style={{ width: '25px', height: '30px' }} />}
                                    variant='contained'
                                >
                                    Đăng nhập với Google
                                </Button>
                            </div>
                            <div className='no-account'>
                                <span>Bạn chưa có tài khoản?</span>
                                <span
                                    style={{
                                        cursor: 'pointer',
                                        color: 'rgb(26, 218, 195)',
                                    }}
                                >&nbsp;Đăng ký ngay</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}