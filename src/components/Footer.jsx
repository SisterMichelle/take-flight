import { forwardRef } from 'react';

import Socials from './Socials.jsx';
import reactjs from "../assets/icons/react-original.svg";
import tailwindcss from "../assets/icons/tailwindcss-plain.svg";
import php from "../assets/icons/php.svg";

const footer = forwardRef(function Footer({id}, ref) {
    return (
        <footer id={id} ref={ref} className="flex relative justify-start items-center grow-0 shrink-0 w-full text-black dark:text-white">
            <div className="flex grow-0 items-center">
                <p className="text-xs md:text-sm lg:text-lx2">
                <img className="w-6 h-6" src="/MLogo.svg" /> 
                </p>
                <Socials isFooter={true} />
            </div>
            <div className="flex grow justify-end items-end gap-2 mx-4">
                <p className="hidden md:inline md:text-sm lg:text-lx2">This site is built with</p>
                <img className="w-6 h-6" src={reactjs} alt="ReactJs" />
                <img className="w-6 h-6" src={tailwindcss} alt="TailwindCSS" />
                <img className="w-6 h-6" src={php} alt="PHP" />
            </div>
        </footer>
    );
});

export default footer;