import React from 'react'
import { Container } from '@mui/system'
import CategoryTestTab from './CategoryTestTab'
import './styles.scss'

const CategoryTest: React.FC = () => {
  return (
    <div className="category-test">
      <Container className="category-test-container">
        <CategoryTestTab />
      </Container>
    </div>
  )
}

export default CategoryTest