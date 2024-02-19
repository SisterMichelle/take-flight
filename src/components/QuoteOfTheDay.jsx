import { useState, useEffect, forwardRef } from 'react';

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

const qotd = forwardRef(function QuoteOfTheDay({ setAuthorPage }, ref) {
    const [ error, setError ] = useState(null);
    const [ quotes, setQuotes ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        fetch("http://localhost/api/quotes/", { headers, method: "GET" })
          .then(checkStatus)
          .then(parseJSON)
          .then((data) => {
              setQuotes(data);
              setLoading(false);
          })
          .catch((error) => setError(error));
    }, []);

    if (error) {
        return <div>An error occured: {error.message}</div>
    }

    let authorId = "";
    let authorName = "";
    let authorTitle = "";
    let quote = "";

    if(!loading) {
        let random = Math.floor(Math.random() * quotes.length);
        const quotesByAuthor = quotes[random];
    
        authorName = quotesByAuthor.authorName;
        authorTitle = " (" + quotesByAuthor.authorNationality + " " + quotesByAuthor.authorTitle + ")";
        authorId = quotesByAuthor.authorId;

        random = Math.floor(Math.random() * quotesByAuthor.quotes.length);
        quote = quotesByAuthor.quotes[random];
    }

    return (
        <div className="h-[400px]">
            {loading ? <p>Loading...</p> : <>
            <h3 ref={ref} className="my-10 font-extrabold text-2xl md:text-3xl lg:text-4xl text-sky-400">
                Quote of the day
            </h3>
            <div className="flex flex-col grow rounded-lg drop-shadow-lg m-4 p-4 bg-white w-2/3 justify-center">
                <p className="text-sm md:text-2xl">{quote}</p>
                <p>
                    <span className="cursor-pointer text-sky-600 hover:text-sky-400" onClick={() => setAuthorPage(authorId)}>
                        {authorName}
                    </span> 
                    <span className="text-xs md:text-sm">{authorTitle}</span>
                </p>
            </div>
            </>}
        </div>
    );
});

export default qotd;