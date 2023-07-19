import { useSelector } from "react-redux";
import AppBar from "../../components/appbar_header";
import LetterAvatars from "../../components/appbar_header/Avatar";
import Footer from "../../components/footer";
import NavBar from "../../components/navbar_header";
import './styles.scss'
import { Button, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import EventIcon from '@mui/icons-material/Event';

export default function Profile() {
    // Lấy state từ store
    const saveInfoUser = useSelector((state) => state.saveInfoUser);
    const [name, setName] = useState(saveInfoUser.name);
    const [date, setDate] = useState(saveInfoUser.date || '');
    const [school, setSchool] = useState(saveInfoUser.school);
    const [email, setEmail] = useState(saveInfoUser.email);
    const [phone, setPhone] = useState(saveInfoUser.phone);
    const [classStudent, setClassStudent] = useState(saveInfoUser.classStudent);
    const [gender, setGender] = useState(saveInfoUser.gender);
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPhone, setErrorPhone] = useState("");
    const classArr = [
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
        // Check email
        var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!regexEmail.test(email) && email !== "") {
            setErrorEmail("Email không đúng!")
        }
        else {
            setErrorEmail("");
        }
    }, [email])

    useEffect(() => {
        // Check phone
        var regexPhone = /^[0-9]+$/;
        if (phone !== "" && (phone.length < 10 || phone.length > 11 || phone[0] !== '0' || !regexPhone.test(phone))) {
            setErrorPhone("Số điện thoại không đúng!")
        }
        else {
            setErrorPhone("");
        }
    }, [phone])

    // Hàm xử lý sự kiện khi giá trị trường nhập liệu ngày sinh thay đổi
    const handleChangeDate = (event) => {
        const inputChar = event.target.value.slice(-1);
        if (!/^\d+$/.test(inputChar)) {
            return; // Nếu ký tự nhập không phải chữ số, không làm gì cả
        }

        const inputValue = event.target.value;
        const formattedDate = formatDateString(inputValue);
        setDate(formattedDate);
    };

    const formatDateString = (inputValue) => {
        const cleanedValue = inputValue.replace(/\D/g, ''); // Lọc bỏ các ký tự không phải số
        const day = cleanedValue.slice(0, 2);
        const month = cleanedValue.slice(2, 4);
        const year = cleanedValue.slice(4, 8);

        const formattedValue = `${day}/${month}/${year}`;
        return formattedValue;
    };

    return (
        <>
            <AppBar />
            <NavBar />
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
                                            style={{ width: '150px', height: '150px', display: 'flex', justifyContent: 'center' }}
                                        >
                                            <LetterAvatars size={150} />
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
                                            {saveInfoUser.email}
                                        </p>
                                    </div>
                                </div>
                                <div style={{ display: 'block', width: '70%' }}>
                                    <div style={{ display: 'flex', width: '100%' }}>
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
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                            <div className="profile-input" style={{ marginTop: '16px' }}>
                                                <TextField
                                                    variant="standard"
                                                    style={{ width: '100%' }}
                                                    placeholder="Chọn ngày sinh của bạn"
                                                    InputProps={{
                                                        startAdornment: <EventIcon style={{ width: '22px', height: '22px', marginRight: '10px', color: 'gray' }} />,
                                                        disableUnderline: true, // <== added this
                                                    }}
                                                    value={date}
                                                    onChange={handleChangeDate}
                                                />
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
                                                    value={email}
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
                                                    value={phone}
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
            <Footer />
        </>

    )
}