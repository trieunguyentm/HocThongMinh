import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';

// Sử dụng styled-components để tạo styled component
const AnimatedComponent = styled('div')`
  opacity: ${(props) => props.opacity};
  transition: opacity 0.8s ease-in-out;
`;

const CategoryTest = () => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('animated-component');
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                setOpacity(1);
            } else {
                setOpacity(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <AnimatedComponent id="animated-component" opacity={opacity}>
                Nội dung hoạt ảnh của bạn
            </AnimatedComponent>
            {/* Nội dung khác */}
        </div>
    );
};

export default CategoryTest;
