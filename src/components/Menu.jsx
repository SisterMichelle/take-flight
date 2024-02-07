import { useState } from 'react'; 

import Logo from './Logo';
import DayNightToggle from './DayNightToggle.jsx';
import Socials from './Socials.jsx';

export default function Menu() {
    const [ contactMe, setContactMe ] = useState(false); 
    
    function toggleContactMe() {
        console.log("hello coffee ");
        setContactMe(isOpen => !isOpen);
    }

    return (
        <menu className="fixed left-0 top-0 w-full">
            <Logo toggleContactMe={toggleContactMe} />
            <Socials isOpen={contactMe} />
            <DayNightToggle />
        </menu>
    );
}