import { Button, MenuItem } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function ListButton({ pages, open, handleCloseMenu }) {

    const navigate = useNavigate();



    return (
        <>
            {
                pages.map((item, index) => {
                    function handleClickClass() {
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