import React, { useEffect, useState } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    if (!loading) return null;

    return (
        <div className="preload preload-container">
            <div className="middle"></div>
        </div>
    );
};

export default Preloader;

