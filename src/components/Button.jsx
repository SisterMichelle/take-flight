export default function Button({ children, onButtonClick }) {
    return (
        <button className="absolute right-0 px-4 py-2 m-4 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={onButtonClick}>{children}</button>
    );
}