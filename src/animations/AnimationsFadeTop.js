import React, { useState, useEffect, useCallback } from 'react';
import { Fade } from 'react-reveal';

const AnimationsFadeTop = ({ children, elementID }) => {
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
        <Fade
            duration={1500}
            top
            when={isVisible}
        >
            {children}
        </Fade>
    );
};

export default AnimationsFadeTop;
