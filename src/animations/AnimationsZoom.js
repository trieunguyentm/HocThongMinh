import React, { useState, useEffect, useCallback } from 'react';
import { Zoom } from 'react-reveal';

const AnimationsZoom = ({ children, elementID }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = useCallback(() => {
        const element = document.getElementById(elementID);
        if (element) {
            const { top, bottom } = element.getBoundingClientRect();
            const isInView = top >= 0 && bottom <= window.innerHeight;
            setIsVisible(isInView);
        }
    }, [elementID]);

    useEffect(() => {
        const scrollListener = () => {
            handleScroll();
        };

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    }, [handleScroll]);

    return (
        <Zoom
            duration={2000}
            when={isVisible}
        >
            {children}
        </Zoom>
    );
};

export default AnimationsZoom;
