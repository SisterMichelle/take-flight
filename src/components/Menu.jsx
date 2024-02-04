import { useState } from 'react';

import MLogo from './Animations/MLogo.jsx';
import Button from './Button.jsx';
import Socials from './Socials.jsx';

export default function Menu() {
    const [isDay, setIsDay] = useState(true);

    function toggleDayNight() {
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
        <menu className="fixed right-0 top-0">
            <MLogo />
            <Socials />
            <Button onButtonClick={toggleDayNight}>{isDay ? "Sunset" : "Sunrise"}</Button>
        </menu>
    );
}