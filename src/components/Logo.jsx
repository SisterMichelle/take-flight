import m8 from '../assets/logo/m8.svg';

export default function Logo({ toggleContactMe }) {
    return (
        <div onClick={toggleContactMe} className="relative left-4 top-5 cursor-pointer">
            <img src={m8} title="Contact Me!" alt="Michelle's Logo and Contact Info" width="50px" height="50px" />
        </div>
    );
}