import { Container } from '@mui/system'
import './styles.css'
import CategoryTestTab from './CategoryTestTab'

export default function CategoryTest() {
    return (
        <div className="category-test">
            <Container className="category-test-container">
                <CategoryTestTab />
            </Container>
        </div>
    )
}