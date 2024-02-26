import { useState, useEffect } from 'react';
import prevImg from "../assets/icons/prev.svg";
import nextImg from "../assets/icons/next.svg";

// Parses the JSON returned by a network request
const parseJSON = (resp) => (resp.json ? resp.json() : resp);

// Checks if a network request came back fine, and throws an error if not
const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }

  return parseJSON(resp).then((resp) => {
    throw resp;
  });
};

const headers = { "Content-Type": "application/json" };

export default function QuotesByAuthor({ authorId }) {
    const [ error, setError ] = useState(null);
    const [ quotes, setQuotes ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        fetch(`http://localhost/api/quotes/?author_id=${authorId}`, { headers, method: "GET" })
          .then(checkStatus)
          .then(parseJSON)
          .then((quotes) => {
              setQuotes(quotes);
              setLoading(false);
          })
          .catch((error) => setError(error));
    }, []);

    if (error) {
        return <div>An error occured: {error.message}</div>
    }

    const [ currQuote, setCurrQuote ] = useState(0);
    
    function setPrevQuote() {
        let prev = currQuote - 1;
        if (prev < 0) {
            prev = quotes[0].quotes.length - 1;
        }
        setCurrQuote(prev);
    }

    function setNextQuote() {
        let next = currQuote + 1; 
        if (next >= quotes[0].quotes.length) {
            next = 0;
        }
        setCurrQuote(next);
    }

    return (
        <div className="relative flex w-full text-stone-400 justify-center items-center">
            <div onClick={setPrevQuote} className="z-20 absolute top-15 left-10 grow-0 shrink-0 w-8 h-8 bg-stone-700 hover:bg-cyan-400 dark:bg-stone-700 dark:hover:bg-sky-900 rounded-full cursor-pointer">
                <img src={prevImg} alt="Previous Photo" className="w-4 h-4 m-2" />
            </div>
            {loading ? 'Loading...' : <>
                {quotes[0].quotes.map((quote, i) => {
                    return (
                        <p key={i} className={(currQuote === i) ? "bg-white rounded-full shadow-2xl min-h-min w-[60%] p-8 md:p-10 m-5 italic text-black quoteblock" : "hidden"}>
                            {quote}
                        </p>
                    );
                })}
            </>}
            <div onClick={setNextQuote} className="absolute top-15 right-10 grow-0 shrink-0 w-8 h-8 bg-stone-700 hover:bg-cyan-400 dark:bg-stone-700 dark:hover:bg-sky-900 rounded-full cursor-pointer">
                <img src={nextImg} alt="Next Photo" className="w-4 h-4 m-2" />
            </div>
        </div>
    ); 
}