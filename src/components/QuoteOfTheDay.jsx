import { useState, useEffect } from 'react';

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

export default function QuoteOfTheDay({ setAuthorPage }) {
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

    return <>
        {loading ? <p>Loading...</p> : <>
            <div className="flex p-20 items-center justify-center text-black font-sans">
                <div>
                    <p className="text-sm md:text-2xl">{quote}</p>
                    <p>~ 
                        <span className="author-name" onClick={() => setAuthorPage(authorId)}>
                        
                        {authorName}
                        
                        </span> 
                        {authorTitle}
                    </p>
                </div>
            </div>        
        </>}
    </>
}