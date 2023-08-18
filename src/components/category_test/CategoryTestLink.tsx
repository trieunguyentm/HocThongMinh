import React from "react"
import { Button } from "@mui/material";
import './styles.scss'

interface CategoryTestLinkProps {
  name: string
}

const CategoryTestLink: React.FC<CategoryTestLinkProps> = ({ name }) => {
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

export default CategoryTestLink