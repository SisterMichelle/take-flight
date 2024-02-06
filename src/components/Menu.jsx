import MLogo from './Animations/MLogo.jsx';
import Logo from './Logo';
// import Button from './Button.jsx';
import DayNightToggle from './Animations/DayNightToggle.jsx';
import Socials from './Socials.jsx';

export default function Menu() {
    return (
        <menu className="fixed right-0 top-0">
            <Logo />
            <Socials />
            {/* <Button onButtonClick={toggleDayNight}>{isDay ? "Sunset" : "Sunrise"}</Button> */}
            <DayNightToggle />
        </menu>
    );
}