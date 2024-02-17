export default function Greeting({ isMorning, userName }) {
    let greeting = "";
    if (isMorning) {
        greeting += "Good Morning!";
    } else {
        greeting += "Good Afternoon!";
    }

    return (
    <div className="flex flex-col items-center">
        <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 h-[3rem] md:h-[4rem] lg:h-[6rem]">
            {greeting}
        </h1>
        <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-black dark:text-white">
            How are you today?
        </h2>
    </div>
    );
}