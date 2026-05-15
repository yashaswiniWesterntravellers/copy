import { useState, useEffect } from 'react';

export function useScrollBackground(threshold = 100) {
    const [navBackground, setNavBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Change background when scroll passes the threshold
            if (window.scrollY > threshold) {
                setNavBackground(true);
            } else {
                setNavBackground(false);
            }
        };

        // Check the scroll position on mount in case user reloads mid-scroll
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [threshold]);

    return navBackground;
}
