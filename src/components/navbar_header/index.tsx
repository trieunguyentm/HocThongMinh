import React, { useEffect, useState } from "react";
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
import './styles.scss'
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ListButton from "./ListButton";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const pages: string[] = ["Luyện thi THPTQG", "THCS", "THPT", "Đề thi ĐGNL", "Tài liệu", "Kiến thức", "Thi đấu"];
  const THCS: string[] = ["Lớp 6", "Lớp 7", "Lớp 8", "Lớp 9"];
  const THPT: string[] = ["Lớp 10", "Lớp 11", "Lớp 12"];
  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);
  const [anchorElTHCS, setAnchorElTHCS] = useState<null | HTMLElement>(null);
  const [anchorElTHPT, setAnchorElTHPT] = useState<null | HTMLElement>(null);
  const openMenu: boolean = Boolean(anchorElMenu);
  const openTHCS: boolean = Boolean(anchorElTHCS);
  const openTHPT: boolean = Boolean(anchorElTHPT);
  const [openSmallTHCS, setOpenSmallTHCS] = useState<boolean>(false);
  const [openSmallTHPT, setOpenSmallTHPT] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button-nav');

    const handleMouseOver = (event: MouseEvent) => {
      const button = event.target as HTMLButtonElement;
      button.classList.add('hover');
    };

    const handleMouseOut = (event: MouseEvent) => {
      const button = event.target as HTMLButtonElement;
      button.classList.remove('hover');
    };

    buttons.forEach(button => {
      button.addEventListener('mouseover', handleMouseOver);
      button.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('mouseover', handleMouseOver);
        button.removeEventListener('mouseout', handleMouseOut);
      });
    };

  }, [])

  const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
    setOpenSmallTHCS(false);
    setOpenSmallTHPT(false);
  }

  const handleClickTHCS = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElTHCS(event.currentTarget);
  };

  const handleCloseTHCS = () => {
    setAnchorElTHCS(null);
  }

  const handleClickTHPT = (event: React.MouseEvent<HTMLElement>) => {
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
        <Container className="navbar-header-container">
          <Toolbar className="navbar-header-toolbar">
            {/* small */}
            <div className="navbar-header-toolbar-small">
              <IconButton onClick={handleClickMenu}
                sx={
                  {
                    display: { xs: 'flex', md: 'none' },
                    color: "white",
                  }
                }
              >
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
            </div>

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
                THCS.map((item, index) => {
                  const handleClick = () => {
                    const nameClass = item.split(" ")[1];
                    navigate(`/lop-${nameClass}`);
                  };

                  return (
                    <MenuItem onClick={handleClick} key={index}>
                      <Button
                        sx={{ my: 0, color: 'black', margin: '2px' }}
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
                  const handleClick = () => {
                    const nameClass = item.split(" ")[1];
                    navigate(`/lop-${nameClass}`);
                  }
                  return (
                    <MenuItem onClick={handleClick} key={item}>
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
    </div >
  )
}

export default NavBar;