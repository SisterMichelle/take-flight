import { useState, useLayoutEffect } from 'react';

export default function DayNightToggle() {
    const [ bgTheme, setBgTheme ] = useState();

    useLayoutEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) 
        {
            document.documentElement.classList.add("dark");
            document.body.classList.add("sunset");
            document.body.classList.remove("sunrise");
            localStorage.theme = "dark";
            setBgTheme("sunset");
        } 
        else 
        {
            document.documentElement.classList.remove("dark");
            document.body.classList.add("sunrise");
            document.body.classList.remove("sunset");
            localStorage.theme = "light";
            setBgTheme("sunrise");
        }
    });

    function handleBgToggle() {
        if (bgTheme === "sunrise") {
            document.body.classList.add("sunset");
            document.body.classList.remove("sunrise");
            document.documentElement.classList.add("dark");

            localStorage.theme = "dark";
            setBgTheme("sunset");
        }
        else {
            document.body.classList.add("sunrise");
            document.body.classList.remove("sunset");
            document.documentElement.classList.remove("dark");

            localStorage.theme = "light";
            setBgTheme("sunrise");
        }
    }

    return (
        <div className="dayNight">
            <div className="toggle">
                <input type="checkbox" id="dayNightToggle" onClick={handleBgToggle} />
                <label className="toggle-label" htmlFor="dayNightToggle"></label>
            </div>
        </div>
    );
}