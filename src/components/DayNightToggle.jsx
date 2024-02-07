import { useState } from 'react';

export default function DayNightToggle() {
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
        <div className="absolute top-0 right-0 dayNight">
            <div className="toggle">
                <input type="checkbox" id="dayNightToggle" onClick={toggleDayNight} />
                <label className="toggle-label" htmlFor="dayNightToggle"></label>
            </div>
        </div>
    );
}