import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            
            setScrollProgress(scrolled);
            setIsVisible(winScroll > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div 
            className={`progress-wrap ${isVisible ? 'active-progress' : ''}`}
            onClick={scrollToTop}
            style={{ cursor: 'pointer' }}
        >
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path 
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    style={{
                        transition: 'stroke-dashoffset 10ms linear',
                        strokeDasharray: '307.919, 307.919',
                        strokeDashoffset: 307.919 - (307.919 * scrollProgress) / 100
                    }}
                />
            </svg>
        </div>
    );
};

export default ScrollProgress;

