export default function Greeting({ isMorning, userName }) {
    let greeting = "";
    if (isMorning) {
        greeting += "Good Morning!";
    } else {
        greeting += "Good Afternoon!";
    }

    return <>
        {/* <h1 className="flex p-20 text-black font-sans text-2xl">{greeting} {userName}</h1>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{greeting} {userName}</h1>
     */}
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{greeting}</span> {userName}</h1>
        <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">How are you today?</h2>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Browse some motivational quotes</p>
    </>
}