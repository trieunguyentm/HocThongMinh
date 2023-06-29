import React, { useEffect, useState } from "react";
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
import '../../styles/navbar_header/NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ListButton from "./ListButton";

export default function NavBar() {
    const pages = ["Luyện thi THPTQG", "THCS", "THPT", "Đề thi ĐGNL", "Tài liệu", "Kiến thức", "Thi đấu"];
    const THCS = ["Lớp 6", "Lớp 7", "Lớp 8", "Lớp 9"];
    const THPT = ["Lớp 10", "Lớp 11", "Lớp 12"];
    const [anchorElMenu, setAnchorElMenu] = useState(null);
    const [anchorElTHCS, setAnchorElTHCS] = useState(null);
    const [anchorElTHPT, setAnchorElTHPT] = useState(null);
    const openMenu = Boolean(anchorElMenu);
    const openTHCS = Boolean(anchorElTHCS);
    const openTHPT = Boolean(anchorElTHPT);
    const [openSmallTHCS, setOpenSmallTHCS] = useState(false);
    const [openSmallTHPT, setOpenSmallTHPT] = useState(false);

    useEffect(() => {
        // Lấy tất cả các button có className là "button-nav"
        const buttons = document.querySelectorAll('.button-nav');

        // Lặp qua từng button và gắn sự kiện mouseover và mouseout
        buttons.forEach(button => {
            button.addEventListener('mouseover', () => {
                button.classList.add('hover'); // Thêm class "hover"
            });

            button.addEventListener('mouseout', () => {
                button.classList.remove('hover'); // Xóa class "hover"
            });
        });

        return () => {
            buttons.forEach(button => {
                button.removeEventListener('mouseover', () => {
                    button.classList.add('hover'); // Thêm class "hover"
                });

                button.removeEventListener('mouseout', () => {
                    button.classList.remove('hover'); // Xóa class "hover"
                });
            });
        }

    }, [])

    const handleClickMenu = (event) => {
        setAnchorElMenu(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorElMenu(null);
        setOpenSmallTHCS(false);
        setOpenSmallTHPT(false);
    }

    const handleClickTHCS = (event) => {
        setAnchorElTHCS(event.currentTarget);
    };

    const handleCloseTHCS = () => {
        setAnchorElTHCS(null);
    }

    const handleClickTHPT = (event) => {
        setAnchorElTHPT(event.currentTarget);
    }

    const handleCloseTHPT = () => {
        setAnchorElTHPT(null);
    }

    const handleClickSmallTHCS = () => {
        setOpenSmallTHCS(!openSmallTHCS);
    }

    const handleClickSmallTHPT = () => {
        setOpenSmallTHPT(!openSmallTHPT);
    }

    return (
        <div className="navbar-header">
            <AppBar position="sticky" className="navbar">
                <Container maxWidth="xl">
                    <Toolbar>
                        {/* small */}
                        <IconButton onClick={handleClickMenu} sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorElMenu}
                            open={openMenu}
                            onClose={handleCloseMenu}
                        >
                            <MenuItem onClick={handleCloseMenu}>
                                <Button
                                    sx={{ my: 2, color: 'black', margin: '2px' }}
                                >
                                    Luyện Thi THPT QG
                                </Button>
                            </MenuItem>
                            <MenuItem onClick={handleClickSmallTHCS}>
                                <Button
                                    sx={{ my: 2, color: 'black', margin: '2px' }}
                                    endIcon={openSmallTHCS ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                >
                                    THCS
                                </Button>

                            </MenuItem>
                            {/* Lớp 6, 7, 8, 9 */}
                            <ListButton pages={THCS} open={openSmallTHCS} handleCloseMenu={handleCloseMenu} />
                            <MenuItem onClick={handleClickSmallTHPT}>
                                <Button
                                    sx={{ my: 2, color: 'black', margin: '2px' }}
                                    endIcon={openSmallTHPT ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                >
                                    THPT
                                </Button>
                            </MenuItem>
                            {/* Lớp 10, 11, 12 */}
                            <ListButton pages={THPT} open={openSmallTHPT} handleCloseMenu={handleCloseMenu} />
                            <MenuItem onClick={handleCloseMenu}>
                                <Button
                                    sx={{ my: 2, color: 'black', margin: '2px' }}
                                >
                                    Đề thi ĐGNL
                                </Button>
                            </MenuItem>
                            <MenuItem onClick={handleCloseMenu}>
                                <Button
                                    sx={{ my: 2, color: 'black', margin: '2px' }}
                                >
                                    Tài liệu
                                </Button>
                            </MenuItem>
                            <MenuItem onClick={handleCloseMenu}>
                                <Button
                                    sx={{ my: 2, color: 'black', margin: '2px' }}
                                >
                                    Kiến thức
                                </Button>
                            </MenuItem>
                            <MenuItem onClick={handleCloseMenu}>
                                <Button
                                    sx={{ my: 2, color: 'black', margin: '2px' }}
                                >
                                    Thi đấu
                                </Button>
                            </MenuItem>
                        </Menu>
                        {/* medium */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {
                                pages.map((page) => {
                                    if (page !== "THCS" && page !== "THPT") {
                                        return (
                                            <Button
                                                key={page}
                                                className="button-nav"
                                                sx={{ my: 2, color: 'white', margin: '2px' }}
                                            >
                                                {page}
                                            </Button>
                                        )
                                    }
                                    else {
                                        return (
                                            <Button
                                                key={page}
                                                className="button-nav"
                                                sx={{ my: 2, color: 'white' }}
                                                endIcon={<KeyboardArrowDownIcon />}
                                                onClick={page === "THCS" ? handleClickTHCS : handleClickTHPT}
                                            >
                                                {page}
                                            </Button>
                                        )
                                    }
                                })
                            }
                        </Box>
                        {/* Menu khi open vào THCS */}
                        <Menu
                            anchorEl={anchorElTHCS}
                            open={openTHCS}
                            onClose={handleCloseTHCS}
                        >
                            {
                                THCS.map((item) => {
                                    return (
                                        <MenuItem onClick={handleCloseTHCS} key={item}>
                                            <Button
                                                sx={{ my: 2, color: 'black', margin: '2px' }}
                                            >
                                                {item}
                                            </Button>
                                        </MenuItem>
                                    )
                                })
                            }
                        </Menu>
                        {/* Menu khi open vào THPT */}
                        <Menu
                            anchorEl={anchorElTHPT}
                            open={openTHPT}
                            onClose={handleCloseTHPT}
                        >
                            {
                                THPT.map((item) => {
                                    return (
                                        <MenuItem onClick={handleCloseTHPT} key={item}>
                                            <Button
                                                sx={{ my: 2, color: 'black', margin: '2px' }}
                                            >
                                                {item}
                                            </Button>
                                        </MenuItem>
                                    )
                                })
                            }
                        </Menu>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}