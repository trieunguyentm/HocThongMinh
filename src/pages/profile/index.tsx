import React from 'react'
import { useSelector } from "react-redux"
import AppBar from "../../components/appbar_header"
import LetterAvatars from "../../components/appbar_header/Avatar"
import Footer from "../../components/footer"
import NavBar from "../../components/navbar_header"
import './styles.scss'
import { Button, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import EventIcon from '@mui/icons-material/Event'
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DateField } from "@mui/x-date-pickers/DateField"
import dayjs from "dayjs"
import { RootState } from '../../redux/store'

const Profile: React.FC = () => {
  // Lấy state từ store
  const currentUser = useSelector((state: RootState) => state.auth.login.currentUser);
  const [sizeAvatar, setSizeAvatar] = useState<number>(150);
  const [name, setName] = useState<string>(currentUser?.name || "");
  const [date, setDate] = useState<dayjs.Dayjs | undefined>(
    currentUser?.date ? dayjs(currentUser.date) : undefined
  );
  const [school, setSchool] = useState<string>(currentUser?.school || "");
  const [email, setEmail] = useState<string>(currentUser?.email || "");
  const [phone, setPhone] = useState<string>(currentUser?.phone || "");
  const [classStudent, setClassStudent] = useState<string>(currentUser?.class || "");
  const [gender, setGender] = useState<string>(currentUser?.gender || "");
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [errorPhone, setErrorPhone] = useState<string>("");


  interface classArrType {
    value: string,
    label: string
  }

  const classArr: classArrType[] = [
    {
      value: "Chọn lớp của bạn",
      label: "Chọn lớp của bạn",
    },
    {
      value: "Lớp 6",
      label: "Lớp 6",
    },
    {
      value: "Lớp 7",
      label: "Lớp 7",
    },
    {
      value: "Lớp 8",
      label: "Lớp 8",
    },
    {
      value: "Lớp 9",
      label: "Lớp 9",
    },
    {
      value: "Lớp 10",
      label: "Lớp 10",
    },
    {
      value: "Lớp 11",
      label: "Lớp 11",
    },
    {
      value: "Lớp 12",
      label: "Lớp 12",
    }
  ]

  useEffect(() => {
    const updateSizeAvatar = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 685) {
        setSizeAvatar(80);
      } else {
        setSizeAvatar(150);
      }
    };

    // Gọi hàm updateSizeAvatar khi component được tạo và mỗi khi cửa sổ được resize
    updateSizeAvatar();
    window.addEventListener('resize', updateSizeAvatar);

    // Cleanup: Loại bỏ sự kiện resize khi component unmount
    return () => {
      window.removeEventListener('resize', updateSizeAvatar);
    };
  }, []);

  useEffect(() => {
    // Check email
    var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email !== undefined && !regexEmail.test(email) && email !== "") {
      setErrorEmail("Email không đúng!")
    }
    else {
      setErrorEmail("");
    }
  }, [email])

  useEffect(() => {
    // Check phone
    var regexPhone = /^[0-9]+$/;

    if (phone !== null && phone !== "" && phone !== undefined && (phone.length < 10 || phone.length > 11 || phone[0] !== '0' || !regexPhone.test(phone))) {
      setErrorPhone("Số điện thoại không đúng!")
    }
    else {
      setErrorPhone("");
    }

  }, [phone])

  return (
    <>
      <AppBar />
      <NavBar />
      {
        currentUser?.name ?
          (
            <div className="profile-main">
              <div className="profile-container">
                <div className="profile-page">
                  <div className="profile-page-title">
                    Thông tin cá nhân
                  </div>
                  <div className="profile-page-box">
                    <div className="profile-page-box-content">
                      <div className="profile-page-box-content-col-1">
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center'
                          }}
                        >
                          <div
                            className="profile-page-box-content-avatar"
                            style={{ display: 'flex', justifyContent: 'center' }}
                          >
                            <LetterAvatars size={sizeAvatar} />
                          </div>
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            margin: '20px',
                            fontSize: '18px',
                            fontWeight: 500,
                            wordWrap: "break-word",
                            textAlign: 'center',
                          }}
                        >
                          <p style={{ maxWidth: '100%' }}>
                            {currentUser.email || ""}
                          </p>
                        </div>
                      </div>
                      <div className="profile-page-box-content-col-2-and-3" style={{ display: 'block', width: '70%' }}>
                        <div className="profile-page-box-content-col-2-and-3-container" style={{ display: 'flex', width: '100%' }}>
                          <div className="profile-page-box-content-col-2">
                            <div className="profile-input">
                              <TextField
                                variant="standard"
                                style={{ width: '100%' }}
                                InputProps={{
                                  startAdornment: <img
                                    src="https://hocthongminh.com/images/icon/user-profile-icon.svg"
                                    alt='icon-user'
                                    style={{ width: '22px', height: '22px', marginRight: '10px' }} />,
                                  disableUnderline: true,
                                }}
                                value={name || ""}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                            <div className="profile-input" style={{ marginTop: '16px', display: 'flex', alignItems: 'center' }}>
                              <EventIcon style={{ width: '22px', height: '22px', marginRight: '10px', color: 'gray' }} />
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateField
                                  variant="standard"
                                  value={date || ""}
                                  onChange={(newValue) => {
                                    if (newValue instanceof dayjs || newValue === undefined) {
                                      setDate(newValue);
                                    }
                                  }}
                                  format="DD/MM/YYYY"
                                  InputProps={{
                                    disableUnderline: true, // <== added this
                                    placeholder: 'Chọn ngày sinh của bạn'
                                  }}
                                />
                              </LocalizationProvider>
                            </div>
                            <div className="profile-input" style={{ marginTop: '16px' }}>
                              <TextField
                                variant="standard"
                                style={{ width: '100%' }}
                                placeholder="Nhập trường học của bạn"
                                InputProps={{
                                  startAdornment: <img
                                    src="https://hocthongminh.com/images/icon/school-icon.svg"
                                    alt='icon-school'
                                    style={{ width: '22px', height: '22px', marginRight: '10px' }} />,
                                  disableUnderline: true, // <== added this
                                }}
                                value={school}
                                onChange={(e) => setSchool(e.target.value)}
                              />
                            </div>
                            <div className="profile-input" style={{ marginTop: '16px', border: '0px' }}>
                              <FormControl>
                                <FormLabel sx={{ color: "#333333", fontWeight: '500' }}>Giới tính</FormLabel>
                                <RadioGroup
                                  defaultValue={gender ? gender : null}
                                  row
                                  onChange={(e) => setGender(e.target.value)}
                                >
                                  <FormControlLabel value="Nữ" control={<Radio />} label="Nữ" />
                                  <FormControlLabel value="Nam" control={<Radio />} label="Nam" />
                                </RadioGroup>
                              </FormControl>
                            </div>
                          </div>
                          <div className="profile-page-box-content-col-3">
                            <div className="profile-input">
                              <TextField
                                variant="standard"
                                style={{ width: '100%' }}
                                InputProps={{
                                  startAdornment: <img
                                    src="https://hocthongminh.com/images/icon/email-icon.svg"
                                    alt='icon-email'
                                    style={{ width: '22px', height: '22px', marginRight: '10px' }} />,
                                  disableUnderline: true, // <== added this
                                }}
                                value={email || ""}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                            {errorEmail && (
                              <span style={{ color: 'red', fontSize: '12px' }}>{errorEmail}</span>
                            )}
                            <div className="profile-input" style={{ marginTop: '16px' }}>
                              <TextField
                                variant="standard"
                                style={{ width: '100%' }}
                                placeholder="Chọn số điện thoại của bạn"
                                InputProps={{
                                  startAdornment: <img
                                    src="https://hocthongminh.com/images/icon/phone-profile-icon.svg"
                                    alt='icon-phone'
                                    style={{ width: '22px', height: '22px', marginRight: '10px' }} />,
                                  disableUnderline: true, // <== added this
                                }}
                                value={phone || ""}
                                onChange={(e) => setPhone(e.target.value)}
                              />
                            </div>
                            {errorPhone && (
                              <span style={{ color: 'red', fontSize: '12px' }}>{errorPhone}</span>
                            )}
                            <div className="profile-input" style={{ marginTop: '16px' }}>
                              <TextField
                                variant="standard"
                                select
                                defaultValue={classStudent}
                                style={{ width: '100%' }}
                                InputProps={{
                                  startAdornment: <img
                                    src="https://hocthongminh.com/images/icon/class-profile-icon.svg"
                                    alt='icon-class'
                                    style={{ width: '22px', height: '22px', marginRight: '10px' }} />,
                                  disableUnderline: true, // <== added this
                                }}
                                onChange={(e) => setClassStudent(e.target.value)}
                              >
                                {classArr.map((option) => (
                                  <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </div>
                            {classStudent === "Chọn lớp của bạn" && (
                              <span style={{ color: 'red', fontSize: '12px' }}>{"Bạn phải chọn lớp!"}</span>
                            )}
                          </div>
                        </div>
                        <div style={{ paddingLeft: '16px' }}>
                          <div style={{ padding: '12px 8px', display: 'block' }}>
                            <div>
                              <Button
                                variant="contained"
                                sx={{
                                  textTransform: 'none',
                                  fontWeight: '500',
                                  minWidth: '64px',
                                  backgroundColor: 'rgb(241, 244, 248)',
                                  border: '1px solid rgb(213, 221, 231)',
                                  color: '#333333',
                                  borderRadius: '10px',
                                  outline: '0px',
                                  boxShadow: 'none',
                                  transition: 'all .5s',
                                  '&:hover': {
                                    backgroundColor: 'rgb(241, 244, 248)', // Màu nền khi di chuột qua button (giống màu nền mặc định)
                                    boxShadow: 'none',
                                    translate: '0 -5px',
                                  }
                                }}
                              >
                                Đổi mật khẩu
                              </Button>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                              <Button
                                variant="contained"
                                sx={{
                                  textTransform: 'none',
                                  fontWeight: '500',
                                  minWidth: '64px',
                                  backgroundColor: '#009c93',
                                  border: '1px solid rgb(213, 221, 231)',
                                  color: '#fff',
                                  borderRadius: '100px',
                                  outline: '0px',
                                  boxShadow: 'none',
                                  padding: '8px 20px',
                                  transition: 'all .5s',
                                  '&:hover': {
                                    backgroundColor: '#009c93', // Màu nền khi di chuột qua button (giống màu nền mặc định)
                                    boxShadow: 'none',
                                    translate: '0 -5px',
                                  }
                                }}
                              >
                                Cập nhật
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div >
          )
          :
          (
            <div className="profile-page-title" style={{ marginTop: '20px' }}>
              Đăng nhập để sử dụng chức năng này
            </div>
          )
      }
      <Footer />
    </>
  )
}

export default Profile