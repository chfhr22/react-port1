import { useState, useEffect } from 'react';

const useMouse = (ref) => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const updateMouse = (e) => {
        if (ref.current) {
            const { left, top } = ref.current.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;
            setMousePosition({ x, y });
        }
    };

    useEffect(() => {
        const element = ref.current;
        if (element) {
            element.addEventListener('mousemove', updateMouse);
        }

        return () => {
            if (element) {
                element.removeEventListener('mousemove', updateMouse);
            }
        };
    }, [ref]); // 또는 의존성 배열을 비워둘 수 있습니다.

    return mousePosition;
}

export default useMouse;
