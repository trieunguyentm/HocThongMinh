import { Button, MenuItem } from "@mui/material"

export default function ListButton({ pages, open, handleCloseMenu }) {
    return (
        <>
            {
                pages.map((item) => {
                    return (
                        <MenuItem onClick={handleCloseMenu} key={item} sx={{ display: `${open ? 'flex' : 'none'}` }}>
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