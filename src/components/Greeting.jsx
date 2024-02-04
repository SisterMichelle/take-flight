export default function Greeting({ isDayTime, userName }) {
    let greeting = "Good ";
    if (isDayTime) {
        greeting += "Day!";
    } else {
        greeting += "Evening!";
    }

    return (
        <h1 className="flex p-20 text-black font-sans text-2xl">{greeting} {userName}</h1>
    );
}