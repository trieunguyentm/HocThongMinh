import { Button, Dialog, Divider, IconButton, Menu, MenuItem, Select } from '@mui/material'
import * as React from 'react';
import './styles.scss'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import axios, { AxiosInstance } from 'axios';
import Message from './Message';
import { useDispatch, useSelector } from 'react-redux';
import LetterAvatars from './Avatar'
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import LogoutIcon from '@mui/icons-material/Logout';

import { loginFail, loginStart, loginSuccess, logoutFail, logoutStart, logoutSuccess, signupStart, signupSuccess } from '../../redux/slices/authSlice';
import jwtDecode from 'jwt-decode';
import CryptoJS from 'crypto-js';
import { useForm } from 'react-hook-form';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

const axiosJWT: AxiosInstance = axios.create();

const AppBar = () => {
  const navigate = useNavigate();
  // Redux
  const dispatch = useDispatch();
  // Lấy state từ store
  const currentUser = useSelector((state: RootState) => state.auth.login.currentUser);
  // Trạng thái đăng nhập
  const [status, setStatus] = useState<boolean>(currentUser ? true : false);
  // Đóng mở dialog
  const [openDialogSignIn, setOpenDialogSignIn] = useState<boolean>(false);
  const [openDialogSignUp, setOpenDialogSignUp] = useState<boolean>(false);
  // Đăng nhập
  const [signInUser, setSignInUser] = useState<string>("");
  const [errorSignInUser, setErrorSignInUser] = useState<boolean>(false);
  const [signInPassword, setSignInPassword] = useState<string>("");
  const [errorSignInPassword, setErrorSignInPassword] = useState<boolean>(false);
  // Đăng ký
  const [signUpClass, setSignUpClass] = useState<string>("Chọn lớp của bạn");
  const [errorSignUpClass, setErrorSignUpClass] = useState<boolean>(false);
  // Text lỗi
  const [textErrorClass, setTextErrorClass] = useState<string>("");
  // Mở và đóng Message
  const [openMessage, setOpenMessage] = useState<boolean>(false);
  const [typeMessage, setTypeMessage] = useState<string>("success");
  const [textMessage, setTextMessage] = useState<string>("");
  // Click User
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const statusOpenMenu: boolean = Boolean(anchorEl);

  // Đối với Form SignUp
  const { register: registerFormSignUp, handleSubmit: handleSubmitFormSignUp, formState: { errors: errorsFormSignUp } } = useForm({
    mode: "all"
  });

  const onSubmitFormSignUp = (data: any) => console.log(data);

  const getOpacityElement = (idElement: string) => {
    const element = document.getElementById(idElement) as HTMLInputElement | null
    if (!element) {
      return 0.5;
    }
    else {
      if (element.value) return 1
      else return 0.5
    }
  }

  // Tạo axios Interceptor xử lý request trước khi gửi đi
  axiosJWT.interceptors.request.use(
    async (config) => {
      // Giải mã accessToken
      if (currentUser) {
        const decodeToken: { foo: string, exp: number, iat: number } = jwtDecode(currentUser?.accessToken);
        if (decodeToken.exp <= Math.floor(Date.now() / 1000)) {
          try {
            const response = await axios.post(`http://localhost:8000/user/refresh/${currentUser._id}`, null, {
              withCredentials: true,
            });
            const accessTokenNew = response.data.accessToken;
            config.headers["Authorization"] = `Bearer ${accessTokenNew}`;
            dispatch(loginSuccess({
              ...currentUser,
              accessToken: accessTokenNew,
            }));
          } catch (error) {
            console.log(error);
          }
        }
      }
      return config; // Trả về config sau khi thay đổi
    },
    (error) => {
      console.log(error)
      Promise.reject(error)
    }
  )

  const openMenuUser = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  }

  const closeMenuUser = () => {
    setAnchorEl(null);
  }

  const checkSignUpUser = (signUpUser: string): boolean | string => {
    var regexUser = /^[a-z0-9]+$/;
    if (!regexUser.test(signUpUser) && signUpUser !== "") {
      return "Tên tài khoản không được chứa ký tự đặc biệt!";
    } else {
      return false;
    }
  };

  const checkSignUpName = (signUpName: string): boolean => {
    return true
  };

  const checkSignUpPassword = (signUpPassword: string): boolean | string => {
    if (signUpPassword.length > 0 && signUpPassword.length < 6) {
      return "Mật khẩu phải có ít nhất 6 ký tự!"
    }
    else {
      return false
    }
  }

  const checkSignUpConfirmPassword = (signUpConfirmPassword: string): boolean | string => {
    const signUpPasswordElement = document.getElementById('signUpPassword') as HTMLInputElement | null;
    if (!signUpPasswordElement) {
      return "Mật khẩu không tồn tại!";
    }

    if (signUpConfirmPassword.length > 0 && signUpConfirmPassword.length < 6) {
      return "Mật khẩu phải có ít nhất 6 ký tự!";
    }
    else if (signUpConfirmPassword !== signUpPasswordElement.value && signUpConfirmPassword !== "") {
      return "Xác nhận mật khẩu không đúng!";
    }
    else {
      return false;
    }
  }

  const checkSignUpEmail = (signUpEmail: string): string | boolean => {
    var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regexEmail.test(signUpEmail) && signUpEmail !== "") {
      return "Email không tồn tại!"
    }
    else {
      return false;
    }
  }

  const checkSignUpPhone = (signUpPhone: string): string | boolean => {
    var regexPhone = /^[0-9]+$/;
    if (signUpPhone !== "" && (signUpPhone.length < 10 || signUpPhone.length > 11 || signUpPhone[0] !== '0' || !regexPhone.test(signUpPhone))) {
      return "Số điện thoại không tồn tại!"
    }
    else {
      return false
    }
  }

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
    setSignUpClass("Chọn lớp của bạn");
    setErrorSignUpClass(false);
  };
  // Xử lý signin
  const handleClickSignIn = async () => {
    if (signInUser === "") {
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
      try {
        const url = "http://localhost:8000/auth/signin"

        const apiKey = process.env.REACT_APP_API_KEY;
        if (!apiKey) {
          throw new Error("REACT_APP_API_KEY is not defined");
        }

        const passwordEncode = CryptoJS.AES.encrypt(signInPassword, apiKey).toString()
        const dataSend = {
          usernameStudent: signInUser,
          passwordStudent: passwordEncode,
        }
        dispatch(loginStart())
        const response = await axios.post(url, dataSend, {
          withCredentials: true
        });
        // Đăng nhập thành công, lưu thông tin người dùng bằng Redux
        if (response.data.code === 0) {
          dispatch(loginSuccess(response.data.user))
          setTypeMessage("success");
          setTextMessage("Đăng nhập thành công!");
          setOpenMessage(true);
          setOpenDialogSignIn(false);
          setStatus(true);
        }
      } catch (error: any) {
        dispatch(loginFail());
        if (error.response?.data?.code === 1) {
          setTypeMessage("error");
          setTextMessage("Tài khoản không tồn tại!");
          setOpenMessage(true);
        }
        else if (error.response?.data?.code === 2) {
          setTypeMessage("error");
          setTextMessage("Mật khẩu không chính xác!");
          setOpenMessage(true);
        }
      }
    }
    else {
      setTypeMessage("error");
      setTextMessage("Hãy nhập đầy đủ thông tin!");
      setOpenMessage(true);
    }
  }
  // Xử lý signup
  const handleClickSignUp = async () => {
    // Kiểm tra lớp
    if (signUpClass === "Chọn lớp của bạn") {
      setTextErrorClass("Vui lòng nhập thông tin!");
      setErrorSignUpClass(true);
    }
    // Kiểm tra các thông tin khác
    if (
      errorsFormSignUp?.signUpUser?.message === "" &&
      errorsFormSignUp?.signUpPassword?.message === "" &&
      errorsFormSignUp?.signUpConfirmPassword?.message === "" &&
      errorsFormSignUp?.signUpEmail?.message === "" &&
      errorsFormSignUp?.signUpPhone?.message === "" &&
      signUpClass !== "Chọn lớp của bạn"
    ) {
      try {
        const signUpPasswordElement = document.getElementById('signUpPassword') as HTMLInputElement | null;
        const signUpUserElement = document.getElementById('signUpUser') as HTMLInputElement | null;
        const signUpNameElement = document.getElementById('signUpName') as HTMLInputElement | null;
        const signUpEmailElement = document.getElementById('signUpEmail') as HTMLInputElement | null;
        const signUpPhoneElement = document.getElementById('signUpPhone') as HTMLInputElement | null;

        if (!signUpPasswordElement || !signUpUserElement || !signUpNameElement || !signUpEmailElement || !signUpPhoneElement) {
          throw new Error("One or more elements not found.");
        }

        const apiKey = process.env.REACT_APP_API_KEY;
        if (!apiKey) {
          throw new Error("REACT_APP_API_KEY is not defined");
        }

        const passwordEncode = CryptoJS.AES.encrypt(signUpPasswordElement.value, apiKey).toString()
        const url = "http://localhost:8000/auth/signup"
        const dataSend = {
          usernameStudent: signUpUserElement.value,
          nameStudent: signUpNameElement.value,
          passwordStudent: passwordEncode,
          emailStudent: signUpEmailElement.value,
          phoneStudent: signUpPhoneElement.value,
          classStudent: signUpClass,
        }
        dispatch(signupStart())
        const response = await axios.post(url, dataSend, {
          withCredentials: true
        })
        if (response.data.code === 0) {
          dispatch(signupSuccess())
          setTypeMessage("success");
          setTextMessage("Đăng ký tài khoản thành công!");
          setOpenMessage(true);
          setOpenDialogSignUp(false);
          // Đăng nhập luôn sau khi đăng ký thành công
          try {
            const url = "http://localhost:8000/auth/signin"
            const passwordEncodeSignIn = CryptoJS.AES.encrypt(signUpPasswordElement.value, apiKey).toString()
            const dataSend = {
              usernameStudent: signUpUserElement.value,
              passwordStudent: passwordEncodeSignIn,
            }
            dispatch(loginStart())
            const response = await axios.post(url, dataSend, {
              withCredentials: true
            });
            // Đăng nhập thành công, lưu thông tin người dùng bằng Redux
            if (response.data.code === 0) {
              dispatch(loginSuccess(response.data.user))
              setTypeMessage("success");
              setTextMessage("Đăng nhập thành công!");
              setOpenMessage(true);
              setOpenDialogSignIn(false);
              setStatus(true);
            }
          } catch (error: any) {
            dispatch(loginFail());
            if (error.response?.data?.code === 1) {
              setTypeMessage("error");
              setTextMessage("Tài khoản không tồn tại!");
              setOpenMessage(true);
            }
            else if (error.response?.data?.code === 2) {
              setTypeMessage("error");
              setTextMessage("Mật khẩu không chính xác!");
              setOpenMessage(true);
            }
          }
        }
      } catch (error: any) {
        if (error.response.data.index === 0) {
          setTypeMessage("error");
          setTextMessage("Tên người dùng đã tồn tại!");
          setOpenMessage(true);
        }
      }
    }
    else {
      setTypeMessage("error");
      setTextMessage("Hãy nhập đầy đủ thông tin!");
      setOpenMessage(true);
    }
  }
  // Xử lý đăng xuất
  const handleSignOut = async () => {
    try {
      const url = `http://localhost:8000/user/logout/${currentUser._id}`
      dispatch(logoutStart());
      const response = await axiosJWT.post(url, null, {
        headers: {
          Authorization: `Bearer ${currentUser.accessToken}`
        },
        withCredentials: true
      })
      if (response.data.code === 0) {
        dispatch(logoutSuccess())
        setTypeMessage("success");
        setTextMessage("Đăng xuất thành công!");
        setOpenMessage(true);
        setOpenDialogSignIn(false);
        setStatus(false);
        closeMenuUser();
      }
    } catch (error) {
      // console.log(error)
      dispatch(logoutFail())
      setTypeMessage("error");
      setTextMessage("Xảy ra lỗi khi đăng xuất");
      setOpenMessage(true);
    }
  }
  // Xử lý xem trang cá nhân
  const handleViewProfile = () => {
    setAnchorEl(null);
    navigate('/thong-tin-ca-nhan');
  }

  return (
    <>
      {/* Giao diện */}
      <div className='appbar-header'>
        <div className='appbar-header-container'>
          <div className='appbar-header-nav'>
            <div className="appbar-header-left" onClick={() => navigate("/")}>
              <img
                className="logo"
                alt="Logo"
                src="https://hocthongminh.com/images/logo.svg">
              </img>
            </div>
            <div className='appbar-header-right'>
              <div style=
                {
                  {
                    display: `${status ? 'none' : 'flex'}`,
                    alignItems: 'center'
                  }
                }
              >
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
              <div style=
                {
                  {
                    display: `${status ? 'flex' : 'none'}`,
                    alignItems: 'center',
                    cursor: 'pointer'
                  }
                }
                onClick={openMenuUser}
              >
                <LetterAvatars />
              </div>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={statusOpenMenu}
                onClose={closeMenuUser}
              >
                <MenuItem onClick={handleViewProfile}>
                  <div style={{ display: 'flex', alignItems: 'center', padding: '10px 0', cursor: 'pointer' }}>
                    <PersonIcon style={{ marginRight: '7px' }} />
                    {currentUser?.name}
                  </div>
                </MenuItem>
                <MenuItem onClick={closeMenuUser}>
                  <div style={{ display: 'flex', alignItems: 'center', padding: '10px 0', cursor: 'pointer' }}>
                    <SchoolIcon style={{ marginRight: '7px' }} />
                    Kết quả học tập
                  </div>
                </MenuItem>
                <MenuItem onClick={handleSignOut}>
                  <div style={{ display: 'flex', alignItems: 'center', padding: '10px 0', cursor: 'pointer' }}>
                    <LogoutIcon style={{ marginRight: '7px' }} />
                    Đăng xuất
                  </div>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
      {/* Message */}
      <Message
        open={openMessage}
        onClose={() => setOpenMessage(false)}
        typeMessage={typeMessage}
        textMessage={textMessage}
      />
      {/* Dialog đăng nhập */}
      <Dialog
        id="signin"
        open={openDialogSignIn}
        onClose={handleCloseDialogSignIn}
      >
        <div className='signin-form'>
          <div className='signin-form-content'>
            {/* Title */}
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
            {/* Thông tin nhập */}
            <div className='sigin-form-data' style={{ display: 'block' }}>
              {/* Username */}
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
              {/* Password */}
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
              {/* Quên mật khẩu */}
              <div className='forget-password'>
                <div className='forget-password-item'>
                  <p>Quên mật khẩu</p>
                </div>
              </div>
              {/* Đăng nhập */}
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
            <form onSubmit={handleSubmitFormSignUp(onSubmitFormSignUp)}>
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
                            {...registerFormSignUp('signUpUser',
                              {
                                required: "Vui lòng nhập thông tin!",
                                validate: checkSignUpUser
                              }
                            )}
                            id="signUpUser"
                            className="data-signup"
                            style={{
                              // opacity: `${document.getElementById('signUpUser')?.value ? 1 : 0.5}`
                              opacity: getOpacityElement('signUpUser')
                            }}
                            type="text"
                            placeholder="Nhập tài khoản"
                          />
                        </div>
                        {
                          errorsFormSignUp?.signUpUser?.message && typeof errorsFormSignUp.signUpUser.message === 'string' && (
                            <div className='error-data'>
                              {errorsFormSignUp.signUpUser.message}
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
                            {...registerFormSignUp('signUpName',
                              {
                                required: "Vui lòng nhập thông tin!",
                                validate: checkSignUpName
                              }
                            )}
                            id="signUpName"
                            className="data-signup"
                            style={{
                              // opacity: `${document.getElementById('signUpName')?.value ? 1 : 0.5}`
                              opacity: getOpacityElement('signUpName')
                            }}
                            type="text"
                            placeholder="Nhập tên"
                          />
                        </div>
                        {
                          errorsFormSignUp?.signUpName?.message && typeof errorsFormSignUp.signUpName.message === 'string' && (
                            <div className='error-data'>
                              {errorsFormSignUp.signUpName.message}
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
                            {...registerFormSignUp('signUpPassword',
                              {
                                required: "Vui lòng nhập thông tin!",
                                validate: checkSignUpPassword
                              }
                            )}
                            id='signUpPassword'
                            className="data-signup"
                            style={{
                              // opacity: `${document.getElementById('signUpPassword')?.value ? 1 : 0.5}`
                              opacity: getOpacityElement('signUpPassword')
                            }}
                            type="password"
                            placeholder="Nhập mật khẩu"
                          />
                        </div>
                        {
                          errorsFormSignUp?.signUpPassword?.message && typeof errorsFormSignUp.signUpPassword.message === 'string' && (
                            <div className='error-data'>
                              {errorsFormSignUp.signUpPassword.message}
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
                            {...registerFormSignUp('signUpConfirmPassword',
                              {
                                required: "Vui lòng nhập thông tin!",
                                validate: checkSignUpConfirmPassword
                              }
                            )}
                            id='signUpConfirmPassword'
                            className="data-signup"
                            style={{
                              // opacity: `${document.getElementById('signUpConfirmPassword')?.value ? 1 : 0.5}`
                              opacity: getOpacityElement('signUpConfirmPassword')
                            }}
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                          />
                        </div>
                        {
                          errorsFormSignUp?.signUpConfirmPassword?.message && typeof errorsFormSignUp.signUpConfirmPassword.message === 'string' && (
                            <div className='error-data'>
                              {errorsFormSignUp.signUpConfirmPassword.message}
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
                          {...registerFormSignUp('signUpEmail',
                            {
                              required: "Vui lòng nhập thông tin!",
                              validate: checkSignUpEmail
                            }
                          )}
                          id='signUpEmail'
                          className="data-signup"
                          style={{
                            // opacity: `${document.getElementById('signUpEmail')?.value ? 1 : 0.5}`
                            opacity: getOpacityElement('signUpEmail')
                          }}
                          type="text"
                          placeholder="Email"
                        />
                      </div>
                      {
                        errorsFormSignUp?.signUpEmail?.message && typeof errorsFormSignUp.signUpEmail.message === 'string' && (
                          <div className='error-data'>
                            {errorsFormSignUp.signUpEmail.message}
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
                          {...registerFormSignUp('signUpPhone',
                            {
                              validate: checkSignUpPhone
                            }
                          )}
                          id='signUpPhone'
                          className="data-signup"
                          style={{
                            // opacity: `${document.getElementById('signUpPhone')?.value ? 1 : 0.5}`
                            opacity: getOpacityElement('signUpPhone')
                          }}
                          type="text"
                          placeholder="Nhập số điện thoại của bạn"
                        />
                      </div>
                      {
                        errorsFormSignUp?.signUpPhone?.message && typeof errorsFormSignUp.signUpPhone.message === 'string' && (
                          <div className='error-data'>
                            {errorsFormSignUp.signUpPhone.message}
                          </div>
                        )
                      }
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
                  type='submit'
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
            </form>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default AppBar