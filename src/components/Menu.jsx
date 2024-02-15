import { useState } from 'react'; 

// import Logo from './Logo';
import MLogo from './Animations/MLogo.jsx';
import DayNightToggle from './DayNightToggle.jsx';
import Socials from './Socials.jsx';

export default function Menu() {
    const [ contactMe, setContactMe ] = useState(false); 
    const [isDay, setIsDay] = useState(true);

    function toggleContactMe() {
        setContactMe(isOpen => !isOpen);
    }

    function handleDayNightClick() {
        if (isDay) {
          document.body.classList.add('sunset');
          document.body.classList.remove('sunrise');
        } else {
          document.body.classList.add('sunrise');
          document.body.classList.remove('sunset');
        }
  
        setIsDay(_day => !isDay);
    }

    return (
        <menu className="fixed left-0 top-0 w-full">
            <MLogo toggleContactMe={toggleContactMe} />
            <Socials isOpen={contactMe} isDay={isDay} />
            <DayNightToggle toggleDayNight={handleDayNightClick} />
        </menu>
    );
}