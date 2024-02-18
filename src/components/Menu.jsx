import { useState } from 'react'; 

import MLogo from './Animations/MLogo.jsx';
import Socials from './Socials.jsx';
import BreadCrumb from './BreadCrumb.jsx';
import Greeting from '../components/Greeting.jsx';
import Sigrid from '../components/Sigrid.jsx';

export default function Menu({ isMorning, userName, isAuthor, setAuthorId }) {
    const [ contactMe, setContactMe ] = useState(false);

    function toggleContactMe() {
        setContactMe(isOpen => !isOpen);
    }

    return <>
        <menu className="flex justify-between w-full">
            <MLogo toggleContactMe={toggleContactMe} />
            <BreadCrumb isAuthor={isAuthor} setAuthorId={setAuthorId} />
            <Greeting isMorning={isMorning} userName={userName} />
            <Sigrid />
        </menu>
        <div className="absolute left-8 top-20 bg-grey-400">
            <Socials isOpen={contactMe} isFooter={false} />
        </div>
    </>
}