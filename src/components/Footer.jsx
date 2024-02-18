import DayNightToggle from './DayNightToggle.jsx';
import Socials from './Socials.jsx';

export default function Footer() {
    return (
        <footer className="flex relative justify-between grow-0 shrink-0 w-full">
            <DayNightToggle />
            <Socials isFooter={true} />
        </footer>
    );
}