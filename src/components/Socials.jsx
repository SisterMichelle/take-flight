import email from "../assets/icons/at-sign.svg";
import xlogo from "../assets/icons/xlogo.png";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";

export default function Socials() {
    return (
        <ul id="socials" className="grid grid-cols-4 gap-2 p-2">
            <li><a href="mailto:mdnewman@proton.me" target="_blank"><img className="icon" src={email} alt="Email Me" /></a></li>
            <li><a href="https://www.linkedin.com/in/michellediannenewman/" target="_blank"><img className="icon" src={linkedin}  alt="Connect with me on LinkedIn" /></a></li>
            <li><a href="http://x.com/michlalatweets" target="_blank"><img className="icon" src={xlogo} alt="Tweets on X" /></a></li>
            <li><a href="https://github.com/SisterMichelle" target="_blank"><img className="icon" src={github} alt="My GitHub Repos" /></a></li>
        </ul>
    );    
}