import { Button, Dialog, Divider, IconButton, MenuItem, Select } from '@mui/material'
import './styles.scss'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

export default function AppBar() {
    const [openDialogSignIn, setOpenDialogSignIn] = useState(false);
    const [openDialogSignUp, setOpenDialogSignUp] = useState(false);

    const handleCloseDialogSignIn = () => {
        setOpenDialogSignIn(false);
    }

    const handleOpenDialogSignIn = () => {
        setOpenDialogSignIn(true);
    }

    const handleCloseDialogSignUp = () => {
        setOpenDialogSignUp(false);
    }

    const handleOpenDialogSignUp = () => {
        setOpenDialogSignUp(true);
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
                            <Button
                                className="button-appbar-header"
                                variant="contained"
                                size="medium"
                                onClick={handleOpenDialogSignUp}
                            >
                                Đăng ký
                            </Button>
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
            <Dialog
                id="signup"
                open={openDialogSignUp}
                onClose={handleCloseDialogSignUp}
            >
                <div className='signup-form'>
                    <div className='signup-form-content'>
                        <div className='signup-form-content-title'>
                            <div style={{ display: 'block', width: '100%' }}>
                                <div className='signup-form-content-title-close'>
                                    <IconButton
                                        onClick={handleCloseDialogSignUp}
                                        className='btn-signup-close'
                                    >
                                        <CloseIcon style={{ color: '#009D9D' }} />
                                    </IconButton>
                                </div>
                                <div className='signup-form-content-title-signup'>
                                    <p>Tạo tài khoản</p>
                                </div>
                            </div>
                        </div>
                        <div className='signup-form-data'>
                            <div className='signup-form-data-left'>
                                <div className='signup-form-data-left-container'>
                                    <div className='account-signup'>
                                        <div className='account-signup-item'>
                                            <img
                                                alt='account-signup'
                                                src='https://hocthongminh.com/_next/image/?url=%2Fimages%2Fapp%2Faccount.png&w=32&q=75'
                                                style={{ width: '23.43px', height: '23.43px' }}
                                            />
                                            <input
                                                id="data-signup"
                                                type="text"
                                                placeholder="Nhập tài khoản"
                                            />
                                        </div>
                                    </div>
                                    <div className='name-signup'>
                                        <div className='name-signup-item'>
                                            <img
                                                alt='name-signup'
                                                src='https://hocthongminh.com/_next/image/?url=%2Fimages%2Fapp%2Faccount.png&w=32&q=75'
                                                style={{ width: '23.43px', height: '23.43px' }}
                                            />
                                            <input
                                                id="data-signup"
                                                type="text"
                                                placeholder="Nhập tên"
                                            />
                                        </div>
                                    </div>
                                    <div className='password-signup'>
                                        <div className='password-signup-item'>
                                            <img
                                                alt='password-signup'
                                                src='https://hocthongminh.com/_next/image/?url=%2Fimages%2Fapp%2Fpassword.png&w=32&q=75'
                                                style={{ width: '23.43px', height: '23.43px' }}
                                            />
                                            <input
                                                id="data-signup"
                                                type="password"
                                                placeholder="Nhập mật khẩu"
                                            />
                                        </div>
                                    </div>
                                    <div className='confirm-password-signup'>
                                        <div className='confirm-password-signup-item'>
                                            <img
                                                alt='confirm-password-signup'
                                                src='https://hocthongminh.com/_next/image/?url=%2Fimages%2Fapp%2Fpassword.png&w=32&q=75'
                                                style={{ width: '23.43px', height: '23.43px' }}
                                            />
                                            <input
                                                id="data-signup"
                                                type="password"
                                                placeholder="Nhập lại mật khẩu"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='signup-form-data-right'>
                                <div className='mail-signup'>
                                    <div className='mail-signup-item'>
                                        <img
                                            alt='mail-signup'
                                            src='https://banner2.cleanpng.com/20180425/aae/kisspng-email-address-computer-icons-mobile-phones-5ae01ccdcb6393.2779692615246368778331.jpg'
                                            style={{ width: '23.43px', height: '23.43px' }}
                                        />
                                        <input
                                            id="data-signup"
                                            type="text"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                                <div className='phone-signup'>
                                    <div className='phone-signup-item'>
                                        <img
                                            alt='phone-signup'
                                            src='https://hocthongminh.com/images/icon/phone-icon.svg'
                                            style={{ width: '23.43px', height: '23.43px' }}
                                        />
                                        <input
                                            id="data-signup"
                                            type="text"
                                            placeholder="Nhập số điện thoại của bạn"
                                        />
                                    </div>
                                </div>
                                <div className='class-signup'>
                                    <div className='class-signup-item'>
                                        <img
                                            alt='class-signup'
                                            src='https://hocthongminh.com/images/icon/class-profile-icon.svg'
                                            style={{ width: '23.43px', height: '23.43px' }}
                                        />
                                        <Select
                                            sx={{
                                                paddingLeft: '10px',
                                                width: '100%',
                                                boxShadow: "none",
                                                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                                                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                                                {
                                                    border: 0,
                                                },
                                                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                                {
                                                    border: 0,
                                                },

                                            }}
                                            value={"default"}
                                        >
                                            <MenuItem value={"default"} style={{ opacity: 0.5 }}>
                                                Chọn lớp của bạn
                                            </MenuItem>
                                            <MenuItem value={"Lớp 6"}>Lớp 6</MenuItem>
                                            <MenuItem value={"Lớp 7"}>Lớp 7</MenuItem>
                                            <MenuItem value={"Lớp 8"}>Lớp 8</MenuItem>
                                            <MenuItem value={"Lớp 9"}>Lớp 9</MenuItem>
                                            <MenuItem value={"Lớp 10"}>Lớp 10</MenuItem>
                                            <MenuItem value={"Lớp 11"}>Lớp 11</MenuItem>
                                            <MenuItem value={"Lớp 12"}>Lớp 12</MenuItem>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='btn-signup-container'>
                            <Button
                                className='btn-signup'
                                variant='contained'
                            >
                                Đăng ký ngay
                            </Button>
                        </div>
                        <div className='divider-signup'>
                            <Divider>HOẶC</Divider>
                        </div>
                        <div className='btn-signup-container-google'>
                            <Button
                                className='btn-signup-google'
                                startIcon={<img src="https://hocthongminh.com/images/icon/google-icon.svg" alt="Google Icon" style={{ width: '25px', height: '30px' }} />}
                                variant='contained'
                            >
                                Đăng nhập với Google
                            </Button>
                        </div>
                        <div className='no-account-signup'>
                            <span>Bạn đã có tài khoản?</span>
                            <span
                                style={{
                                    cursor: 'pointer',
                                    color: 'rgb(26, 218, 195)',
                                }}
                            >&nbsp;Đăng nhập ngay</span>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}