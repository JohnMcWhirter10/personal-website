'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect, useRef } from 'react';

const ThemeSwitch = () => {
    const [hidden, setHidden] = useState<boolean>(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [isMounted, setIsMounted] = useState(false);
    const dragRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const { theme, setTheme, themes } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (dragRef.current) {
            const rect = dragRef.current.getBoundingClientRect();

            setOffset({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });

            isDragging.current = true;
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging.current) {
            const newLeft = e.clientX - offset.x;
            const newTop = e.clientY - offset.y;

            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            if (dragRef.current) {
                const rect = dragRef.current.getBoundingClientRect();

                const clampedLeft = Math.min(
                    Math.max(newLeft, 0),
                    windowWidth - rect.width
                );
                const clampedTop = Math.min(
                    Math.max(newTop, 0),
                    windowHeight - rect.height
                );

                setPosition({ x: clampedLeft, y: clampedTop });
            }
        }
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const adjustPositionIfNeeded = () => {
        if (dragRef.current) {
            const rect = dragRef.current.getBoundingClientRect();
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            const clampedLeft = Math.min(
                Math.max(rect.left, 0),
                windowWidth - rect.width
            );
            const clampedTop = Math.min(
                Math.max(rect.top, 0),
                windowHeight - rect.height
            );

            setPosition({ x: clampedLeft, y: clampedTop });
        }
    };

    useEffect(() => {
        adjustPositionIfNeeded();
    }, [hidden]);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div
            ref={dragRef}
            className={`select-none fixed z-50 p-3 ${hidden ? 'w-fit opacity-30' : 'w-56'} bg-black border-2 border-pink-500 text-white rounded-md`}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
            onMouseDown={handleMouseDown}
        >
            <button
                className="border-2 border-white p-1"
                onClick={() => setHidden(!hidden)}
            >
                {hidden ? 'Hidden' : 'Click to Hide'}
            </button>
            <div className={`${hidden ? 'hidden' : 'block'}`}>
                <p>Current Theme: {theme}</p>
                <ul className="mt-2 flex flex-col gap-2">
                    Themes:
                    {themes.map((themeOption) => (
                        <li key={themeOption}>
                            <button
                                className="w-full px-2 py-1 border-2 border-white bg-black rounded hover:bg-pink-500"
                                onClick={() => setTheme(themeOption)}
                            >
                                {themeOption}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ThemeSwitch;
