export default function Greeting({ userName }) {
    return (
        <div id="greeting" className="flex flex-col min-w-max grow rounded-lg">
            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 min-h-max">
                Hello, {userName}
            </h1>
        </div>
    );
}