import { Button } from "@mui/material";
import './styles.scss'

export default function CategoryTestLink({ name }) {
    return (
        <>
            <Button
                variant="contained"
                className="category-test-link-btn"
                fullWidth
                sx={{ color: 'black', fontWeight: 'bold' }}
            >
                {name}
            </Button>
        </>
    )
}