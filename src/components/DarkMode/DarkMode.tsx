import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import { useEffect } from "react";
import "./DarkMode.css";

const DarkMode = () => {
    const LS = localStorage;

    useEffect(() => {
        const themeToggle = document.getElementById('darkmode-toggle');

        if (LS.getItem('theme') === 'light') {
            setLightMode();
        } else if (LS.getItem('theme') === 'dark') {
            setDarkMode();
            themeToggle?.click();
        }
    }, [])

    const setDarkMode = () => {
        LS.setItem('theme', 'dark');
        document.querySelector('body')?.setAttribute('data-theme', 'dark');
    }

    const setLightMode = () => {
        LS.setItem('theme', 'light');
        document.querySelector('body')?.setAttribute('data-theme', 'light');
    }

    const toggleTheme = (e: { target: { checked: boolean; }; }) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    }

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
