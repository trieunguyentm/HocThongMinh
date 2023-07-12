import { Button, Dialog, Divider, IconButton, MenuItem, Select } from '@mui/material'
import './styles.scss'
import { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

export default function AppBar() {
    const [openDialogSignIn, setOpenDialogSignIn] = useState(false);
    const [openDialogSignUp, setOpenDialogSignUp] = useState(false);
    // Đăng nhập
    const [signInUser, setSignInUser] = useState("");
    const [errorSignInUser, setErrorSignInUser] = useState(false);
    const [signInPassword, setSignInPassword] = useState("");
    const [errorSignInPassword, setErrorSignInPassword] = useState(false);

    // Đăng ký
    const [signUpUser, setSignUpUser] = useState("")
    const [errorSignUpUser, setErrorSignUpUser] = useState(false);
    const [signUpName, setSignUpName] = useState("");
    const [errorSignUpName, setErrorSignUpName] = useState(false);
    const [signUpPassword, setSignUpPassword] = useState("");
    const [errorSignUpPassword, setErrorSignUpPassword] = useState(false);
    const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");
    const [errorSignUpConfirmPassword, setErrorSignUpConfirmPassword] = useState(false);
    const [signUpEmail, setSignUpEmail] = useState("");
    const [errorSignUpEmail, setErrorSignUpEmail] = useState(false);
    const [signUpPhone, setSignUpPhone] = useState("");
    const [signUpClass, setSignUpClass] = useState("Chọn lớp của bạn");
    const [errorSignUpClass, setErrorSignUpClass] = useState(false);

    const [textErrorUser, setTextErrorUser] = useState("");
    const [textErrorName, setTextErrorName] = useState("");
    const [textErrorPassword, setTextErrorPassword] = useState("");
    const [textErrorConfirm, setTextErrorConfirm] = useState("");
    const [textErrorEmail, setTextErrorEmail] = useState("");
    const [textErrorClass, setTextErrorClass] = useState("");

    useEffect(() => {
        // Check user
        var regexUser = /^[a-z0-9]+$/;
        if (!regexUser.test(signUpUser) && signUpUser !== "") {
            setErrorSignUpUser(true);
            setTextErrorUser("Tên tài khoản không được chứa ký tự đặc biệt!")
        }
        else {
            setErrorSignUpUser(false);
        }
    }, [signUpUser, signUpConfirmPassword, signUpEmail])

    useEffect(() => {
        // Check password
        if (signUpPassword.length > 0 && signUpPassword.length < 6) {
            setErrorSignUpPassword(true);
            setTextErrorPassword("Mật khẩu phải có ít nhất 6 ký tự!")
        }
        else {
            setErrorSignUpPassword(false);
        }
    }, [signUpPassword])

    useEffect(() => {
        // Check confirm
        if (signUpConfirmPassword.length > 0 && signUpConfirmPassword.length < 6) {
            setErrorSignUpConfirmPassword(true);
            setTextErrorConfirm("Mật khẩu phải có ít nhất 6 ký tự!")
        }
        else if (signUpConfirmPassword !== signUpPassword && signUpConfirmPassword !== "") {
            setErrorSignUpConfirmPassword(true);
            setTextErrorConfirm("Xác nhận mật khẩu không đúng!")
        }
        else {
            setErrorSignUpConfirmPassword(false);
        }
    }, [signUpConfirmPassword, signUpPassword])

    useEffect(() => {
        // Check email
        var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!regexEmail.test(signUpEmail) && signUpEmail !== "") {
            setErrorSignUpEmail(true);
            setTextErrorEmail("Email không tồn tại!");
        }
        else {
            setErrorSignUpEmail(false);
        }
    }, [signUpEmail])

    const handleCloseDialogSignIn = () => {
        setOpenDialogSignIn(false);
    }

    const handleOpenDialogSignIn = () => {
        setOpenDialogSignIn(true);
        setSignInUser("");
        setErrorSignInUser(false);
        setSignInPassword("");
        setErrorSignInPassword(false);
    }

    const handleCloseDialogSignUp = () => {
        setOpenDialogSignUp(false);
    }

    const handleOpenDialogSignUp = () => {
        setOpenDialogSignUp(true);
        setSignUpUser("");
        setErrorSignUpUser(false);
        setSignUpName("");
        setErrorSignUpName(false);
        setSignUpPassword("");
        setErrorSignUpPassword(false);
        setSignUpConfirmPassword("");
        setErrorSignUpConfirmPassword(false);
        setSignUpEmail("");
        setErrorSignUpEmail(false);
        setSignUpPhone("");
        setSignUpClass("Chọn lớp của bạn");
        setErrorSignUpClass(false);
    }
    // Xử lý signin
    const handleClickSignIn = () => {
        if (signInUser === "") {
            setTextErrorUser("Vui lòng nhập trường này")
            setErrorSignInUser(true);
        }
        if (signInPassword === "") {
            setErrorSignInPassword(true);
        }
        if (signInUser !== ""
            && signInPassword !== ""
            && errorSignInUser === false
            && errorSignInPassword === false
        ) {
            alert("succes");
        }
        else {
            alert("fail");
        }
    }
    // Xử lý signup
    const handleClickSignUp = () => {
        if (signUpUser === "") {
            setTextErrorUser("Vui lòng nhập thông tin!");
            setErrorSignUpUser(true);
        }
        if (signUpName === "") {
            setTextErrorName("Vui lòng nhập thông tin!");
            setErrorSignUpName(true);
        }
        if (signUpPassword === "") {
            setTextErrorPassword("Vui lòng nhập thông tin!");
            setErrorSignUpPassword(true);
        }
        if (signUpConfirmPassword === "") {
            setTextErrorConfirm("Vui lòng nhập thông tin!");
            setErrorSignUpConfirmPassword(true);
        }
        if (signUpEmail === "") {
            setTextErrorEmail("Vui lòng nhập thông tin!");
            setErrorSignUpEmail(true);
        }
        if (signUpClass === "Chọn lớp của bạn") {
            setTextErrorClass("Vui lòng nhập thông tin!");
            setErrorSignUpClass(true);
        }
        if (
            signUpUser !== ""
            && signUpName !== ""
            && signUpPassword !== ""
            && signUpConfirmPassword !== ""
            && signUpEmail !== ""
            && signUpClass !== "Chọn lớp của bạn"
            && (errorSignUpUser === false)
            && (errorSignUpName === false)
            && (errorSignUpPassword === false)
            && (errorSignUpConfirmPassword === false)
            && (errorSignUpEmail === false)
            && (errorSignUpClass === false)

        ) {
            alert("success");
        }
        else {
            alert("fail");
        }
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
            {/* Dialog đăng nhập */}
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
                                    <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                                        <img
                                            alt='user'
                                            src='https://hocthongminh.com/_next/image/?url=%2Fimages%2Fapp%2Faccount.png&w=32&q=75'
                                            style={{ width: '23.43px', height: '23.43px' }}
                                        />
                                        <input
                                            id='user'
                                            type='text'
                                            style={{
                                                opacity: `${signInUser ? 1 : 0.5}`
                                            }}
                                            placeholder='Nhập tài khoản'
                                            value={signInUser}
                                            onChange={(e) => {
                                                setSignInUser(e.target.value);
                                                setErrorSignInUser(false);
                                            }}
                                        />
                                    </div>
                                    {
                                        errorSignInUser && (
                                            <div className='error-data'>
                                                Vui lòng nhập trường này!
                                            </div>
                                        )
                                    }

                                </div>
                            </div>
                            <div className='password-signin'>
                                <div className="password-signin-item">
                                    <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                                        <img
                                            alt='password'
                                            src='https://hocthongminh.com/_next/image/?url=%2Fimages%2Fapp%2Fpassword.png&w=32&q=75'
                                            style={{ width: '23.43px', height: '23.43px' }}
                                        />
                                        <input
                                            id='password'
                                            type='password'
                                            style={{
                                                opacity: `${signInPassword ? 1 : 0.5}`
                                            }}
                                            placeholder='Nhập mật khẩu'
                                            value={signInPassword}
                                            onChange={(e) => {
                                                setSignInPassword(e.target.value);
                                                setErrorSignInPassword(false);
                                            }}
                                        />
                                    </div>
                                    {
                                        errorSignInPassword && (
                                            <div className='error-data'>
                                                Vui lòng nhập trường này!
                                            </div>
                                        )
                                    }

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
                                    onClick={handleClickSignIn}
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

            {/* Dialog Đăng ký */}
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
                                            <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                                                <img
                                                    alt='account-signup'
                                                    src='https://hocthongminh.com/_next/image/?url=%2Fimages%2Fapp%2Faccount.png&w=32&q=75'
                                                    style={{ width: '23.43px', height: '23.43px' }}
                                                />
                                                <input
                                                    className="data-signup"
                                                    style={{
                                                        opacity: `${signUpUser ? 1 : 0.5}`
                                                    }}
                                                    type="text"
                                                    placeholder="Nhập tài khoản"
                                                    value={signUpUser}
                                                    onChange={(e) => {
                                                        setSignUpUser(e.target.value);
                                                    }}
                                                />
                                            </div>
                                            {
                                                errorSignUpUser && (
                                                    <div className='error-data'>
                                                        {textErrorUser}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className='name-signup'>
                                        <div className='name-signup-item'>
                                            <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                                                <img
                                                    alt='name-signup'
                                                    src='https://hocthongminh.com/_next/image/?url=%2Fimages%2Fapp%2Faccount.png&w=32&q=75'
                                                    style={{ width: '23.43px', height: '23.43px' }}
                                                />
                                                <input
                                                    className="data-signup"
                                                    style={{
                                                        opacity: `${signUpName ? 1 : 0.5}`
                                                    }}
                                                    type="text"
                                                    placeholder="Nhập tên"
                                                    value={signUpName}
                                                    onChange={(e) => {
                                                        setSignUpName(e.target.value);
                                                        setErrorSignUpName(false);
                                                    }}
                                                />
                                            </div>
                                            {
                                                errorSignUpName && (
                                                    <div className='error-data'>
                                                        {textErrorName}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className='password-signup'>
                                        <div className='password-signup-item'>
                                            <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                                                <img
                                                    alt='password-signup'
                                                    src='https://hocthongminh.com/_next/image/?url=%2Fimages%2Fapp%2Fpassword.png&w=32&q=75'
                                                    style={{ width: '23.43px', height: '23.43px' }}
                                                />
                                                <input
                                                    className="data-signup"
                                                    style={{
                                                        opacity: `${signUpPassword ? 1 : 0.5}`
                                                    }}
                                                    type="password"
                                                    placeholder="Nhập mật khẩu"
                                                    value={signUpPassword}
                                                    onChange={(e) => {
                                                        setSignUpPassword(e.target.value);
                                                    }}
                                                />
                                            </div>
                                            {
                                                errorSignUpPassword && (
                                                    <div className='error-data'>
                                                        {textErrorPassword}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className='confirm-password-signup'>
                                        <div className='confirm-password-signup-item'>
                                            <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                                                <img
                                                    alt='confirm-password-signup'
                                                    src='https://hocthongminh.com/_next/image/?url=%2Fimages%2Fapp%2Fpassword.png&w=32&q=75'
                                                    style={{ width: '23.43px', height: '23.43px' }}
                                                />
                                                <input
                                                    className="data-signup"
                                                    style={{
                                                        opacity: `${signUpConfirmPassword ? 1 : 0.5}`
                                                    }}
                                                    type="password"
                                                    placeholder="Nhập lại mật khẩu"
                                                    value={signUpConfirmPassword}
                                                    onChange={(e) => {
                                                        setSignUpConfirmPassword(e.target.value);
                                                    }}
                                                />
                                            </div>
                                            {
                                                errorSignUpConfirmPassword && (
                                                    <div className='error-data'>
                                                        {textErrorConfirm}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='signup-form-data-right'>
                                <div className='mail-signup'>
                                    <div className='mail-signup-item'>
                                        <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                                            <img
                                                alt='mail-signup'
                                                src='https://banner2.cleanpng.com/20180425/aae/kisspng-email-address-computer-icons-mobile-phones-5ae01ccdcb6393.2779692615246368778331.jpg'
                                                style={{ width: '23.43px', height: '23.43px' }}
                                            />
                                            <input
                                                className="data-signup"
                                                style={{
                                                    opacity: `${signUpEmail ? 1 : 0.5}`
                                                }}
                                                type="text"
                                                placeholder="Email"
                                                value={signUpEmail}
                                                onChange={(e) => {
                                                    setSignUpEmail(e.target.value);
                                                }}
                                            />
                                        </div>
                                        {
                                            errorSignUpEmail && (
                                                <div className='error-data'>
                                                    {textErrorEmail}
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className='phone-signup'>
                                    <div className='phone-signup-item'>
                                        <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                                            <img
                                                alt='phone-signup'
                                                src='https://hocthongminh.com/images/icon/phone-icon.svg'
                                                style={{ width: '23.43px', height: '23.43px' }}
                                            />
                                            <input
                                                className="data-signup"
                                                style={{
                                                    opacity: `${signUpPhone ? 1 : 0.5}`
                                                }}
                                                type="text"
                                                placeholder="Nhập số điện thoại của bạn"
                                                value={signUpPhone}
                                                onChange={(e) => setSignUpPhone(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='class-signup'>
                                    <div className='class-signup-item'>
                                        <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                                            <img
                                                alt='class-signup'
                                                src='https://hocthongminh.com/images/icon/class-profile-icon.svg'
                                                style={{ width: '23.43px', height: '23.43px' }}
                                            />
                                            <Select
                                                style={{
                                                    opacity: `${signUpClass === "Chọn lớp của bạn" ? 0.5 : 1}`
                                                }}
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
                                                value={signUpClass}
                                                onChange={(e) => {
                                                    setSignUpClass(e.target.value);
                                                    setErrorSignUpClass(false);
                                                }}
                                            >
                                                <MenuItem value={"Chọn lớp của bạn"} style={{ opacity: 0.5 }}>
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
                                        {
                                            errorSignUpClass && (
                                                <div className='error-data'>
                                                    {textErrorClass}
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='btn-signup-container'>
                            <Button
                                className='btn-signup'
                                variant='contained'
                                onClick={handleClickSignUp}
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