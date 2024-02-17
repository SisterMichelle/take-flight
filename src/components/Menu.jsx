import { useState } from 'react'; 

// import Logo from './Logo';
import MLogo from './Animations/MLogo.jsx';
import DayNightToggle from './DayNightToggle.jsx';
import Socials from './Socials.jsx';
import BreadCrumb from './BreadCrumb.jsx';

export default function Menu({ isAuthor, setAuthorId, bgToggle }) {
    const [ contactMe, setContactMe ] = useState(false);

    function toggleContactMe() {
        setContactMe(isOpen => !isOpen);
    }

    return (
        <menu className="flex border-gray-50 p-4">
            <MLogo toggleContactMe={toggleContactMe} />
            <Socials isOpen={contactMe} />
            <BreadCrumb isAuthor={isAuthor} setAuthorId={setAuthorId} />
            <DayNightToggle bgToggle={bgToggle} />
        </menu>
    );
}