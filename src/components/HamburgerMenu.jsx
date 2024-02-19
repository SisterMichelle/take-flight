import icon from "../assets/icons/tailwindcss-plain.svg";

export default function HamburgerMenu() {
    return (
        <div className="grow">
            <img className="icon" src={icon}  alt="Menu" />
        </div>
    );
}