"use client";

import {useEffect, useState} from "react";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    // 切换暗模式的函数
    const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => {
            const newDarkMode = !prevDarkMode;
            if (newDarkMode) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            return newDarkMode; // 这里返回更新后的状态
        });
    };

    // 组件挂载时根据系统主题设置初始状态
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            const newColorScheme = e.matches ? true : false;
            setDarkMode(newColorScheme);
            if (newColorScheme) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        handleChange(mediaQuery);  // 初始设置

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);


    return (<button
            onClick={toggleDarkMode}
            className="p-2">
            {/* 这里是SVG图标，可以根据需要更换 */}
            {darkMode ? (<svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="4"
                    />
                    <path d="M12 2v2"/>
                    <path d="M12 20v2"/>
                    <path d="m4.93 4.93 1.41 1.41"/>
                    <path d="m17.66 17.66 1.41 1.41"/>
                    <path d="M2 12h2"/>
                    <path d="M20 12h2"/>
                    <path d="m6.34 17.66-1.41 1.41"/>
                    <path d="m19.07 4.93-1.41 1.41"/>
                </svg>) : (<svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                </svg>)}
        </button>);
};

export default DarkModeToggle;