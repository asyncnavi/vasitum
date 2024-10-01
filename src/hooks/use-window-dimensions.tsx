import { useState, useEffect } from 'react';

interface WindowDimensions {
    width: number;
    height: number;
}

const useWindowDimensions = (): WindowDimensions => {
    const getWindowDimensions = (): WindowDimensions => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height,
        };
    };

    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(getWindowDimensions);

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};

export default useWindowDimensions;