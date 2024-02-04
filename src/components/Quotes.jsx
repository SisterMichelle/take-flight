export default function Quotes(props) {
    let randomQuote = Math.floor(Math.random() * props.quotes.length);
    let quoteOfTheDay = props.quotes[randomQuote];

    return <>
        <div className="flex p-20 items-center justify-center text-black font-sans">
            <div>
                <p className="text-2xl">{quoteOfTheDay}</p>
                <p className="text-xs">{props.author}</p>
            </div>
        </div>
    </>
}