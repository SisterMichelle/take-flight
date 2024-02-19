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

    return (
        <div className="text-stone-400">
            {loading ? 'Loading...' : <>
                {quotes[0].quotes.map((quote, i) => {
                    return (
                        <p key={i}>{quote}</p>
                    );
                })}
            </>}
        </div>
    ); 
}