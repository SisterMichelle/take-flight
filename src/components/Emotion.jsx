export default function Emotion() {
    const roundButton = "grow-0 w-8 h-8 py-1 px-2 bg-stone-700 hover:bg-cyan-400 dark:bg-stone-700 dark:hover:bg-sky-900 rounded-full cursor-pointer";

    return (
        <div className="grow">
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-black dark:text-white">
                How are you today?
            </h2>
            <ul className="flex gap-2">
                <li className={roundButton}>1</li>
                <li className={roundButton}>2</li>
                <li className={roundButton}>3</li>
            </ul>
        </div>
    );
}