import { QUOTES } from '../data/quotes.js';

export default function Quotes() {

    let random = Math.floor(Math.random() * QUOTES.length);
    const quotesByAuthor = QUOTES[random];

    let author = quotesByAuthor.authorName;

    random = Math.floor(Math.random() * quotesByAuthor.quotes.length);
    let quote = quotesByAuthor.quotes[random];

    console.log("after");
    return <>
        <div className="flex p-20 items-center justify-center text-black font-sans">
            <div>
                <p className="text-sm md:text-2xl">{quote}</p>
                <p className="text-xs">~ {author}</p>
            </div>
        </div>
    </>
}