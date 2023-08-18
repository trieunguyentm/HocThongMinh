import React from 'react';
import { Button, MenuItem } from "@mui/material"
import { useNavigate } from "react-router-dom"

interface ListButtonProps {
  pages: string[];
  open: boolean;
  handleCloseMenu: () => void;
}

const ListButton: React.FC<ListButtonProps> = ({ pages, open, handleCloseMenu }) => {
  const navigate = useNavigate();

  return (
    <>
      {
        pages.map((item: string, index: number) => {
          const handleClickClass = () => {
            // Lấy ra số lớp
            const nameClass = item.split(" ")[1];
            // Chuyển đến trang tương ứng
            navigate(`/lop-${nameClass}`);
          }
          return (
            <MenuItem onClick={handleClickClass} key={index} sx={{ display: `${open ? 'flex' : 'none'}` }}>
              <Button
                sx={{ my: 2, color: 'black', margin: '0 12px' }}
              >
                {item}
              </Button>
            </MenuItem>
          )
        })
      }
    </>
  )
}

export default ListButton;