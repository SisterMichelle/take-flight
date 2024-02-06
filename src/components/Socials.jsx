import email from "../assets/email.svg";
import twitter from "../assets/twitter-original.svg";
import linkedin from "../assets/linkedin-plain.svg";
import github from "../assets/github-original.svg";

export default function Socials() {
    return (
        <ul className="flex gap-2 fixed left-20 top-7">
            <li><a href="mailto:mdnewman@proton.me" target="_blank"><img className="icon" src={email} alt="Email Me" /></a></li>
            <li><a href="https://www.linkedin.com/in/michellediannenewman/" target="_blank"><img className="icon" src={linkedin}  alt="Connect with me on LinkedIn" /></a></li>
            <li><a href="http://x.com/michlalatweets" target="_blank"><img className="icon" src={twitter} alt="Tweets on X" /></a></li>
            <li><a href="https://github.com/SisterMichelle" target="_blank"><img className="icon" src={github} alt="My GitHub Repos" /></a></li>
        </ul>
    );    
}