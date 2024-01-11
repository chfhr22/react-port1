// MouseContext.js
import React, { createContext, useState, useEffect } from 'react';

export const MouseContext = createContext({ x: null, y: null });

export const MouseProvider = ({ children }) => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    useEffect(() => {
        const updateMouse = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMouse);

        return () => {
            window.removeEventListener('mousemove', updateMouse);
        };
    }, []);

    return (
        <MouseContext.Provider value={mousePosition}>
            {children}
        </MouseContext.Provider>
    );
};
