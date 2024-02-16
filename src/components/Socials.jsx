import { useRef } from 'react';

import email from "../assets/icons/email.svg";
import xlogo from "../assets/icons/xlogo.png";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";

export default function Socials({ isOpen }) {
    const socials = useRef();
    let classList = "transition-transform ease-out overflow-hidden origin-top transform space-y-2 ";
    
    if(isOpen) {
        classList += "scale-y-100 ";
    } else {
        classList += "scale-y-0";   
    }

    return (
        <div className="absolute left-8 top-20 bg-grey-400">
            <ul ref={socials} id="socials" className={classList}>
                <li><a href="mailto:mdnewman@proton.me" target="_blank"><img className="icon" src={email} alt="Email Me" /></a></li>
                <li><a href="https://www.linkedin.com/in/michellediannenewman/" target="_blank"><img className="icon" src={linkedin}  alt="Connect with me on LinkedIn" /></a></li>
                <li><a href="http://x.com/michlalatweets" target="_blank"><img className="icon" src={xlogo} alt="Tweets on X" /></a></li>
                <li><a href="https://github.com/SisterMichelle" target="_blank"><img className="icon" src={github} alt="My GitHub Repos" /></a></li>
            </ul>
        </div>
    );    
}